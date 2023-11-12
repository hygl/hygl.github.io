---
categories: [opensuse,helix]
title: 'Install helix on OpenSUE'
---
Auf [opensuse](https://www.opensuse.org) Leap 15.5. sind anscheinend die Paketabhängigkeiten für [helix](https://helix-editor.com/) nicht ganz sauber, das Installieren des Editors alleine reicht nicht. Man muss auch `helix-runtime` installieren und eine Link setzen:

```bash
sudo zypper in helix helix-runtime 
mkdir -p ~/.config/helix
ln -s /usr/lib64/helix/runtime/ ~/.config/helix/runtime
alias hx=helix 
```
