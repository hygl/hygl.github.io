---
categories: [ubuntu, wsl, ls, color]
title: 'Fixen der Farbausgabe bei WSL'
---
Bei WSL werden Verzeichnisse in einer seltsamen Farbe angezeigt, wenn sie die Berechtigung `777`haben-. Dieses Problem gibt es schon lange und es gibt auch eine Menge Lösungen, aber jedes Mal muss ich wieder danach googeln, deshalb schreibe ich es einfach mal auf. Einfach die folgende Zeile in der `.bashrc`ergänzen:

```
export LS_COLORS+=':ow=01;33'
```