---
title: "VS Code und Wayland"
categories: ["Editor", "VS Code","wayland"]
---
Ich verwende auf dem Desktop zumeist Ubuntu und Gnome. Als ich kurz vor Weihnachten einen neuen Laptop bekommen habe, habe ich [Ubuntu 23.10](https://releases.ubuntu.com/mantic/) installiert, das standardmäßig auf [Wayland](https://wayland.freedesktop.org/) setzt. Da ich nicht mehr so gute Augen wie mit Anfang 20 habe, habe ich *Fractional Scaling* aktiviert und die Auflösung auf 125% gestellt. Dies hat bei [VS Code](https://code.visualstudio.com/) dazu geführt, das die Anwendung eine verschommene Schrift hat.

Der Grund dafür ist, dass die Anwendung standardmäßig als X Anwendung ausgeführt wird und von der Skalierung nur über Umwege erfährt, was die Schrift verschwimmen lässt. Die Skalierung für VS Code zu deaktivieren hatte den effekt, das die Schrift dann vielzu klein war. VS Code ist eine [Electon Anwendung](https://www.electronjs.org/de/). Electron basiert wiederum auf Chromium und Chromium erhält mit [Ozone](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ozone_overview.md) eine Engine, die sich um die Anzeige unter Wayland und Mir kümmert. Im Gegensatz zu anderen Desktopumgebungen bietet Gnome kein Server Side Rendering an, weswegen man Electron dazu bringen muss, den Fensterahmen selber zu zeichnen, sonst hat das Fenster keinen Rahmen. Dazu braucht man zwei Flaggen, ich habe mir in der `.bashrc` einfach einen Alias gesetzt, da ich vs code eigenlich immer von der Shell aus verwende:

```sh
alias code="code --enable-features=WaylandWindowDecorations --ozone-platform-hint=auto"
```

Als Fehler trat dann noch auf, dass ein *normales* Fenster seine Knöpfe (Minimieren, Maximieren, Schließen) rechts gezeigt hat und VS Code links. Ich vermute, das lag daran, dass kein Default gesetzt war und GTK und Electron einen unterschiedlichen angenommen haben. Nachdem ich die Knöpfe mit [GNOME Tweaks](https://gitlab.gnome.org/GNOME/gnome-tweaks) einmal nach links und wieder nach rechts geschoben habe, werden sie nun konsistent rechts angezeigt. 

Um zu verstehen,  warum GTK/GNOME sich nicht selber um das Zeichnen der Fenster kümmert, hat mir dieser [Thread](https://gitlab.gnome.org/GNOME/mutter/-/issues/217) geholfen

