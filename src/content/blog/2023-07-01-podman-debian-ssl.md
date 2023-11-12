---
categories: [debian,podman,bookworm,x509]
title: 'Podman Debian Bookworm SSL Fehler'
---
Nachdem ich auf Windows 11 [debian](https://www.debian org) 11 installiert habe und dann auf 12 aktualisiert habe, habe ich als erstes [podman](https://podman.io) installiert. Danach teste ich eigentlich immer, ob der 'hello-world' container läuft. Leider gab es einen Zertifikatsfehler.  

```
 sudo podman run hello-world
[sudo] password for hygl:
Resolved "hello-world" as an alias (/etc/containers/registries.conf.d/shortnames.conf)
Trying to pull docker.io/library/hello-world:latest...
Error: initializing source docker://hello-world:latest: pinging container registry registry-1.docker.io: Get "https://registry-1.docker.io/v2/": x509: certificate signed by unknown authority
```

Der Fehler war, das ich keine ca-certifikate installiert hatte, ein 

```
sudo apt-get install ca-certificates curl gnupg
```

aus der [Docker Installationsanleitung für Debian](https://docs.docker.com/engine/install/debian/) hat das Problem behoben. Wahrscheinlich hätte ich gnupg und curl gar nicht gebraucht für die rZertifikate, sind aber eh nützliche Werkzeuge.