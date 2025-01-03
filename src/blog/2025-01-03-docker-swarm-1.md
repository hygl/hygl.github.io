---
title: "Docker Swarm Mode installieren"
categories: ["swarm","linux", "docker","container"]
---
Viele wissen gar nicht, das aktuelle Dockerversionen einen Modus enthalten, um nativ einen Cluster von Docker Engines als [Swarm](https://docs.docker.com/engine/swarm/) zu betreiben. Dieses ist im Vergleich zu anderen Lösunge wie Kubernetes oder [Nomad](https://www.nomadproject.io/) sehr leichtgewichtig und intuitiv, weil die Beschreibungen der Stacks in Docker im Grunde [Docker Compose](https://docs.docker.com/compose/) entsprechen. Konkret gibt es da ein paar kleine Unterschiede, aber dazu in einem späteren Blogpost mehr. 

In diesem Blogpost soll erst mal geschaut werden, wie ein Swarm initialisiert wird und wie man weiter Knoten hinzufügt. 

```shell
docker swarm init --advertise-addr 2001:4dd7:2a2f:0:e437:c064:89a8:51a
Swarm initialized: current node (smtdqjvumqj0a17z10n2tu46q) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-33yr0yqktj3dpr47hc1kl022j1z59epqj3av5b8kjlh7gjikrw-dcqz9pgso2ifxlkgf1l2ooo26 [2001:4dd7:2a2f:0:e437:c064:89a8:51a]:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```

Eigentlich reicht `docker swarm init` aus, aber wenn man mehrere IPv6-Adressen an einem Netzwerkdevice hat, dann muss man angeben, welche promoted werden soll. Der erste Knoten ist dann automatisch ein Managementknoten, der sowohl den Swarm managed, als auch Container ausführen kann. Auf einem Swarm-Knoten könnne weiter ganz normale *Docker Container* oder *Docker Compose Dateien* ausgeführt werden, diese werden nur immer lokal und nicht im Cluster betrieben. Wie man einzelne Dienste oder ganze *Stacks* im Cluster betreibt, sehen wir im nächsten Beitrag. 


