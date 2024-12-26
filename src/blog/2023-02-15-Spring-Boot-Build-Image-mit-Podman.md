---
categories: [podman, spring-boot, containerd]
title: 'Spring Boot Build Image mit Podman'
---
Damit man mit Spring Boot aus seiner Anwendung einen Container bauen kann ( mit [buildpack](https://buildpacks.io/)), reicht es, auf der Kommantozeile `mvn spring-boot:build-image`einzugeben, wenn man maven verwendet. 

Will man den Container mit [podman](https://podman.io) bauen, so braucht man unter Linux z.B. einen rootless podman server. Diesen konfiguriert man zuerst in der Maven pom.xml:

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <docker>
             <host>unix:///run/user/1000/podman/podman.sock</host>
             <bindHostToBuilder>true</bindHostToBuilder>
        </docker>
    </configuration>
</plugin>
```
Um den rootless Server zu starten, das Image zu bauen und ihn dann wieder zu töten, habe ich mit ein kleines Bashskript geschrieben:

```bash
#!/usr/bin/env bash

podman system service --time 0 &
./mvnw spring-boot:build-image
pkill podman
```