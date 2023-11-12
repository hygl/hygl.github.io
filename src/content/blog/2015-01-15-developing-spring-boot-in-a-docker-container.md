---
categories: [spring,docker]
---
[Spring Boot](http://projects.spring.io/spring-boot/) makes it easy to build [microservices](http://martinfowler.com/articles/microservices.html). Containers are a standard way to run microservices in production.

This post shows how to develop a spring boot application inside of a [docker](http://www.docker.com) container using the [spring-boot-maven-plugin](http://docs.spring.io/spring-boot/docs/1.2.1.RELEASE/reference/htmlsingle/#using-boot-maven-plugin), the Springsource Toolsuite, docker and [fig](http://www.fig.sh).

The source is a minimal Spring Boot example from this [guide to build a RESTful Web Service with spring boot](http://spring.io/guides/gs/rest-service/). The full soucecode can be found on [github](https://github.com/hygl/docker-spring-boot-example).

Add a dependecy to [spring-loaded](https://github.com/spring-projects/spring-loaded) to the spring boot maven plugin to reload changed classes inside the docker container.
 {% highlight xml %}
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>springloaded</artifactId>
            <version>1.2.1.RELEASE</version>
        </dependency>
    </dependencies>
</plugin>
{% endhighlight %}

The Dockerfile:
 {% highlight text %}
FROM dockerfile/java:oracle-java8
MAINTAINER philipp.huegelmeyer@ble.de
EXPOSE 8080
ENV http_proxy http://httpproxy.service.ble.de:9090
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y --force-yes  maven
RUN mkdir -p /data/spring-rest
WORKDIR /data/spring-rest
{% endhighlight %}

The fig.yml:

 {% highlight text %}
 web:
   build: .
   #environment:
   #  - MAVEN_OPTS="-javaagent:springloaded-1.2.1.jar -noverify"
   ports:
     - "8080:8080"
   volumes:
     - docker-rest:/data/spring-rest
   command: mvn spring-boot:run
{% endhighlight %}

The container can be build with <code>fig build</code> and run it with <code>fig up</code>. Open the maven project inside the springsource toolsuite. Changed classes will be loaded automatically inside the docker container.
