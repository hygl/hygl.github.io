---
categories: [docker,spring]
---
Docker can be run quite stable and easy under windows 8. At first install [msysgit](https://msysgit.github.io/) and launch a bash shell. Get the latest Version of the [docker](http://www.docker.com)  client and [docker-machine](https://docs.docker.com/machine/) by pasting the next two commands:

{% highlight text %}
curl -L https://get.docker.com/builds/Windows/x86_64/docker-1.6.0.exe > /bin/docker
curl -L https://github.com/docker/machine/releases/download/v0.2.0/docker-machine_windows-amd64.exe > /bin/docker-machine
{% endhighlight %}

Verify your installation:

{% highlight text %}
$ docker -v
Docker version 1.6.0, build 4749651

$ docker-machine -v
D:\Programme\Git\bin\docker-machine version 0.2.0 (8b9eaf2)
{% endhighlight %}

You can now provision a boot2docker instance on hyper-v using docker-machine. It will automatic download the latest boot2docker image, create a hyper-v vm and register the nessesary keys.

1. Install (Internet Connection Sharing)[http://www.packet6.com/allowing-windows-8-1-hyper-v-vm-to-work-with-wifi/] aka NAT for hyper-v or use (bridging)[http://blogs.technet.com/b/canitpro/archive/2014/03/11/step-by-step-enabling-hyper-v-for-use-on-windows-8-1.aspx].
2. Provision a <code>dev</code> environmten with <code>docker-machine create -d hyper-v dev</code>.
3. Set up your env varibles with <code>eval "$(docker-machine env local)"</code>. You should at this to your <code>.bashrc</code>, so it is present in every shell.
4. Test your environment by running <code>docker run hello-world</code>.

To orcestrate multiple docker images, you can use (docker-compose)[https://docs.docker.com/compose/]. Since it a the moment heavily relies on posix file api, which is not present on windows, you can use it inside a (docker image)[https://github.com/dduportal-dockerfiles/docker-compose]. You can simply add an alias to your <code>.bashrc</code>

{% highlight text %}
alias docker-compose="docker run -v \"\$(pwd)\":/app dduportal/docker-compose:latest"
{% endhighlight %}

Test your installation by running <code>docker-compose --version</code>.
