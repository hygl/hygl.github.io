---
categories: [docker, kubernetes, git, gitea, drone, ci ,cd]
---
I wabted to deploy [gitea](http://gitea.io) and [drone](http://drone.io) inside a kubernetes cluster via helm, but I had trouble with service discovery and different ports between ingresses and external services. So I started to write my own `.yml` files for deployment in mygithub repo. 
