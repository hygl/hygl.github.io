---
categories: [docker,spring]
---
At the moment we are planing our new [microservices](https://microservices.io/) architecture. Since we have not changed our Java Archtecture (Spring apps deployed in apache tomcat exchanging infos via SOAP Web Services) in ages, it is a good time to overcome some old habbits and make it easier for us to finally arrive in teh age of containers and cloud native applications. 

Since we like our development stack, we do not want to get rid of spring boot. But we want to change a few things here and there. On the one side we do not want to build our frontend in any java framework anymore, since this is not state of the art. On the other end we do not want to use spring webflow to describe our business flows, because we can not talk with our customers about web flow config files and share them with business analysts. 

Our agency has selected [bpmn](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) as the notation language for all our business processes, so this seems to be a good language to exchange software processes as well. So we hven choosen [camunda](https://camunda.com/) as a process engine and microservice orcestrator. The Frontend will be a tasklist using html and a javascript framework. 

For the backend microservices we want to stick to spring boot, but want to use [REST Services](https://en.wikipedia.org/wiki/Representational_state_transfer) from now on.But instead of building a war file and deploy it into apache tomcat, we want to use [spring native](https://spring.io/blog/2021/03/11/announcing-spring-native-beta) to paclage our apps for qa and production. The advantages are

+ faster Run time
+ smaller binaries
+ secure, since we do not have to deploy unused code
+ save money in the cloud, since we can use smaller machines

The disatvantages are at the moment

- slower builds
- not all libraries support the [graalvm](https://www.graalvm.org/) at the moment

But since we start with a new microservices architecture we can wait till spring native hast matured and we can mix and build services, that do not work as native app as a traditional java app. 