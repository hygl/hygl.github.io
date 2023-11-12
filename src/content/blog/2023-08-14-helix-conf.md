---
categories: [ai,ml]
title: "Helix Config"
---
Nachdem ich in den letzten Tagen neovim ausprobiert habe, muss ich leider sagen, dass mir der Editor viel zu kompliziert ist. Nicht von der Bedienung, sondern von dern Konfuguration, es gibt viele Plugin-Manager, Plugins und Konfigurationen dazu. Zudem kann die Konfiguration sowohl in Lua als auch in Vimscript erfolgen und schnell hat man davon eine krude Mischung. Deswegen bin ich zurück zu [helix](http://www.helix.com). Helix hat viele gute Defaults (z.B. eingebauten File Picker und Status Bar) und unterstützt noch keine Plugins. Deshalb ist die Konfiguration wirklich angenehm kurz. Außerdem ist sie einheitlich in (toml)[https://toml.io/en/].

Sprachen werde über das (Language Server protocol)[https://langserver.org/] unterstützt, mit dem sich verschiedene CLients mit dem gleichen Server verbinden können und von diesem Unterstützung bei einer Sprache erhaltenn können. Für html, css und co. installiert man z.B.

```bash
npm install -g vscode-langservers-extracted
```

Eine Übersicht über alle standardmäßig unterstützen Sprachen und ob der entsprechende Language Server gefundunden wurde, findet sich unter:

```console
hx --health
```
Meine (Konfiguration)[https://github.com/hygl/hxconf] findet sich auf github und enthält neben ein paar Java-spezifischen Tastaturkomandos nur ein transparentes Theme, damit das ganze gut im Terminal funktioniert, wenn dieser ein anderes Colortheme hat oder einen transparenten Hintergrund.   
 


