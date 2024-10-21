---
title: "podman-compose and DevContainer"
categories: ["devcontainer","podman","selinux"]
---
Mit [podman-compose](https://github.com/containers/podman-compose) kann man [Docker Compse Dateien](https://docs.docker.com/compose/) mit Podman ausführen. Damit kann man mehrere Container starten, z.B. einen für die Datenbank oder einen für einen Message Bus oder Cache. 

Dieses wird auch bei Devcontainern unterstützt, allerdings gibt es für mehrere Container andere Optionen als für einen. So kann man in der devcontainer.json keine Runargs angeben, mit denen man die `user-id` behalten kann. Diese führt dazu, dass man auf die Dateien nicht zugreifen kann, da diese dann root statt dem Containernutzer gehören 

Deshalb muss man in dem `.devcontainer` Verzeichnis eine `.env` Datei anlegen, in der man die passenden Attribute für podman setzten kann. 

```
PODMAN_USERNS=keep-id
``` 

Damit kann man auch mit podman-compose auf die Verzeichnisse zugreifen. 
