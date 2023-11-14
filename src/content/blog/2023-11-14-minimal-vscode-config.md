---
title: "Minimale VS Code Konfiguration"
categories: ["Editor", VS Code"]
---
Nachdem ich in letzter Zeit viel mit helix, vim und neovim *rumgespielt* habe, bin ich doch immer wieder zu vs code zurückgekehrt, weil der editor einfahc funktioniert und nicht so viel Konfiguration erfordert.

Fehlende Sprachunterstützung kann einfach durch Plugins wie zum Beispiel für [Java](https://code.visualstudio.com/docs/languages/java) nachgerüstet werden und auch sonst lässt sich der Edior mittlerweile gut anpassen. So gibt es eine Menge [Farbschemata](https://vscodethemes.com/), ich verwende zum Beispiel [haki neosolarized V3](https://vscodethemes.com/e/mathstylish.tokyo-dark-themes/haki-neosolarized-v2?language=javascript), dass hier leider nicht abgebildet ist.

VS Code enthält allerdings auch jede Menge GUI, die man nicht benötigt, wenn man die [Tastaturkurzbefehle](https://code.visualstudio.com/docs/getstarted/keybindings) beherrscht. Zum Glück kann man viele dieser Feature abstellen. Ich habe mit [dieser Konfiguration](https://medium.com/@marciobarrios/minimal-user-interface-for-visual-studio-code-2ab849eb6d8e) angefangen, und dieses dann an meine Bedürfnisse angepasst. Meine Config sieht nun so aus, das ist zwar mehr als bei Helix, lässt sich aber gut zwischen verschiedenen [Editoren synchen](https://code.visualstudio.com/docs/editor/settings-sync). 

Im Moment sieht meine Config so aus: 

```json
{
    "redhat.telemetry.enabled": false,
    "boot-java.rewrite.reconcile": true,
    "workbench.iconTheme": "material-icon-theme",
    "editor.guides.indentation": false,
    "http.proxyAuthorization": null,
    "editor.renderWhitespace": "none", // removes whitespace chars
    "editor.renderLineHighlight": "line", // removes line highlight
    "editor.overviewRulerBorder": false, // removes border from overview ruler (located on the right, same position as the scrollbar)
    "editor.hideCursorInOverviewRuler": true, // hides cursor mark in the overview ruler
    "editor.folding": false, // removes the folding feature
    "workbench.activityBar.location": "hidden",
    "editor.occurrencesHighlight": false, // removes highlights occurrences (still works when you select a word)
    "editor.matchBrackets": "near", // removes the highlight of matching brackets (I use Subtle Match Brackets extension for this)
    "editor.glyphMargin": true, // removes the space used mainly for debugging indicators
    "workbench.editor.showIcons": true, // removes icon from opened files in tabs
    "workbench.editor.tabCloseButton": "off", // removes cross icon from tabs
    "editor.tokenColorCustomizations": {
        "[Haki Neosolarized V3]": {  // disable italic
            "textMateRules": [{
                "scope": [
                    "comment",
                    "meta.var.expr storage.type",
                    "keyword.control.flow",
                    "keyword.control.return",
                    "meta.directive.vue punctuation.separator.key-value.html",
                    "meta.directive.vue entity.other.attribute-name.html",
                    "tag.decorator.js entity.name.tag.js",
                    "tag.decorator.js punctuation.definition.tag.js",
                    "storage.modifier"
                ],
                "settings": {
                    "fontStyle": ""
                }
            }]
        }
    },
    "git.autofetch": true,
    "git.confirmSync": false,
    "workbench.colorTheme": "Haki Neosolarized V3",
    "editor.minimap.enabled": false, // 
    "editor.fontLigatures": false, // disable font ligatures
    "workbench.settings.editor": "json", // Default edit config in json Editor 
    "telemetry.telemetryLevel": "off" // Do not send telemetry
}
```
