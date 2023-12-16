---
title: "VS Code Java download Sources und JavaDoc"
categories: ["Editor", "VS Code","Java","Maven"]
---
Damit in VS Code beim Maven Projekten Sources und JavaDoc heruntergeladen werden, müssen an zwei verschiedenen Stellen Konfigurationen votgenommen werden.

In der `settings.json` von VS Code :

```
"java.maven.downloadSources": true
```

In der `settings.xml` von maven: 

```xml 
<settings>
    <profiles>
        <profile>
            <id>downloadSources</id>
            <properties>
                <downloadSources>true</downloadSources>
                <downloadJavadocs>true</downloadJavadocs>
            </properties>
        </profile>
    </profiles>

    <activeProfiles>
            <activeProfile>downloadSources</activeProfile>
    </activeProfiles>
</settings>
```