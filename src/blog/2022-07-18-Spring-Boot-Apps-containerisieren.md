---
title: Spring Boot Apps containisieren
categories: [Spring, Docker, K8s]
---

In diesem Artikel geht es darum, eine bestehende Spring Boot Anwendung, die schon als jar vorliegt, zu containerisieren.

Als Werkzeuge werden, in diesem Beispiel [maven](https://maven.apache.org/) als Buildwerkzeug, docker als Containerengine und [k0s](https://k0sproject.io) als Kubernetes Distribution gewählt, aber das lässt sich leicht durch andere Werkzeuge ersetzten.

Zuerst wird spring-boot-starter-actuator als Abhängigkeit hinzugefügt, damit später im Betrieb REST-Endunkte abngeboten werden, um den Containerbetrieb zu überwachen.

```
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Danach braucht man einen Dockerfile, der den Build als Container beschreibt Hier ein einfaches Beispiel, wahrscheinlich würde man im richtigen Betrieb auf einem Basis-Image des Betriebes aufsetzten.

```
FROM eclipse-temurin:17
RUN mkdir -p /usr/src/app
COPY target/*.jar /usr/src/app/app.jar
ENV SERVER_PORT 8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/src/app/app.jar"
```

Danach kann das Image mit docker build . gebaut werden und danach ausgeführt und getaggt werden. Jetzt muss es nur noch getaggt werden und mit `docker push <tag>` in eine Registry verschoben werden.

Danach kann der Container mit kubectl run `spring-boot --image=<tag>` im Kubernetes-Cluster erstellt werden und dann auf den Service mit `kubectl port-forward spring-boot 8080` zugegriffen werden. Dieses eigent sich jedoch nur für lokale Entwicklung. Im Betrieb verwendet man entweder einen LoadBalancer Service oder einen Ingress.
