---
title: "Lazyloading jpa and spring webflow"
categories : ["spring"]
---
When I did a code review recently in some of our projects I found a lot of calls of `Hibernate.initialze()` to get rid of lazy loading problems when using hibernate as a jpa provider. Despite of using the `OpenEntitymanagerInViewFilter` lazy loading somehow did not seem to work, so the developers did it by hand. I disliked the solution, because there was a lot of code that did not solve any domain problem and was specific to the jpa provider.

I investigated the problem and found out, that the lazy loading problem manifested itself with [spring webflow](http://projects.spring.io/spring-webflow/). During the transition from one view state to another spring webflow often makes more then one http request, so the transaction of the filter is closed and opened again, before the new view is rendered.

The solution is to not apply the filter to any web flow. A good solution is to map all controllers to a sub-url like `/controller` and map the filter to it.

The web flows should use a [flow managed persitend context](http://docs.spring.io/spring-webflow/docs/2.3.3.RELEASE/reference/html/flow-managed-persistence.html) instead. Therefor you register a `jpaFlowExecutionListener`:

 ``` xml
 <webflow:flow-executor id="flowExecutor" flow-registry="flowRegistry">
    <webflow:flow-execution-listeners>
        <webflow:listener ref="jpaFlowExecutionListener" />
    </webflow:flow-execution-listeners>
</webflow:flow-executor>

<bean id="jpaFlowExecutionListener"
      class="org.springframework.webflow.persistence.JpaFlowExecutionListener">
    <constructor-arg ref="entityManagerFactory" />
    <constructor-arg ref="transactionManager" />
</bean>
```

 If you want to use lazy loading in a flow, you have to mark it as a `persistence-context`:

``` xml
 <?xml version="1.0" encoding="UTF-8"?>
<flow xmlns="http://www.springframework.org/schema/webflow"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.springframework.org/schema/webflow
                          http://www.springframework.org/schema/webflow/spring-webflow-2.0.xsd">

    <persistence-context />

    ....

</flow>
```

Please be aware, that you now have to define in which end states you want to commit your context.

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<flow xmlns="http://www.springframework.org/schema/webflow"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.springframework.org/schema/webflow
                         http://www.springframework.org/schema/webflow/spring-webflow-2.0.xsd">

    ....

    <end-state id="confirmed" commit="true" />

</flow>
```
