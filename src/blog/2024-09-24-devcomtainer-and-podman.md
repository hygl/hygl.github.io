---
title: "DevContainer and Podman"
categories: ["devcontainer","podman","selinux"]
---
Ich habe heute längere Zeit versucht, devcontainer und fedora41 mit podman zum Laufen zu bekommen. Dabei habe ich viele verschiedene Seiten und Lösungen durchgesucht und hier dokumentiere ich nun die verschiedenen Schritte, um für mich zu einer lauffährigen Lösung zu kommen. Ich kann leider im Nachhinein nicht sagen, ob alle Schritte notwendig sind.

## podman.sock

`~/.config/systemd/user/podman.service` : 

```
[Unit]
Description=Podman API Service
Requires=podman.socket
After=podman.socket
Documentation=man:podman-api(1)
StartLimitIntervalSec=0

[Service]
Type=oneshot
Environment=REGISTRIES_CONFIG_PATH=/etc/containers/registries.conf
ExecStart=/usr/bin/podman system service unix:///home/hygl/docker.sock
TimeoutStopSec=30
KillMode=process

[Install]
WantedBy=multi-user.target
Also=podman.socket
```

`~/.config/systemd/user/podman.socket` : 

```
[Unit]
Description=Podman API Socket
Documentation=man:podman-api(1)

[Socket]
ListenStream=/home/hygl/docker.sock
SocketMode=0660

[Install]
WantedBy=sockets.target
```

## Devcontainers

Hier eine beispielhafte `devcontainer.json` für dieses Nodeprojekt:

```json
{
    "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
    "runArgs": [
        "--userns=keep-id:uid=1000,gid=1000"
    ],
    //"workspaceFolder": "/workspaces",
    "containerUser": "node",
    "updateRemoteUserUID": true,
    "containerEnv": {
        "HOME": "/home/node"
    },
    "remoteUser": "node"
    
}
```

... und der passende dazugehördende `Dockerfile`: 

```dockerfile
FROM mcr.microsoft.com/devcontainers/javascript-node:20

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME 

USER $USERNAME
```

## SELinux

Leider hat all dieses noch nichts genützt, solange das Verzeichnis mit dem Sourcecode noch nicht richtig gelabelt ist. Dies geht mit; 

```bash
chcon -Rt svirt_sandbox_file_t /home/hygl/src/hygl.github.io/
```

Und schon kann der rootless devcontainer geöffnet werden.