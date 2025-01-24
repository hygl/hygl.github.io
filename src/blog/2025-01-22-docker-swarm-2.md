---
title: "Docker Swarm: Services und Stacks"
categories: ["swarm","linux", "docker","container"]
---
Nach dem Erstellen eines Swarms kann man auf diesem Services und Stacks deployen.

Ein [Service](https://docs.docker.com/engine/swarm/services/), der auf einem Swarm deployed wird, wird deklariert, d.h. man beschreibt seinem verlangten Status (z.B. offne Netzwerkports, Ressourcenbedarf, Characteristik des Hosts, auf den der Container deployed wird).

Ein deployter Service kann aktualisiert, skaliert und wieder entfernt werden. Im Gegensatz zu Kubernetes enthält ein Service bei Docker den Container selber, mögliche Volumes, Netzwerkport, aber auch den Ingress. Auch kann ein Service zum Beispiel repliziert werden und ihm kann der Zugriff auf Secrets gewährt werden. 

Ein [Stack](https://docs.docker.com/engine/swarm/stack-deploy/) besteht aus einem oder mehreren Containern, Volumes etc. Docker Swarm Stacks verwenden das alte [Compose file version3](https://docs.docker.com/reference/compose-file/legacy-versions/) Format und sind nicht mit der [Compose Datei Spezifikation](https://docs.docker.com/reference/compose-file/) kompatibel. Genau wie Services sind Stacks, wenn sie Netzwerkports veröffentlichen, über diese auf jeden Host erreichbar. 