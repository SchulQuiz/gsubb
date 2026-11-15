# Eli – ausschließlich in SchulQuiz/gsubb

Die einzige Ergänzung an einer bestehenden Datei ist ein zusätzliches Script-Tag
in `suche/index.html`. `assets/suche.js`, Startseite, Navigation, CSS und Suchindex
bleiben unverändert. Alle übrigen Dateien sind neu und liegen hier bzw. in
`assets/eli-shortcut.js`.

Das separate Skript fängt exakt „Eli“ ab, unabhängig von Großschreibung und
Rand-Leerzeichen. Es reagiert erst auf das Absenden mit Enter oder dem Suchen-Knopf sowie auf
eine bereits abgesendete Such-URL. Reines Tippen oder Einfügen löst keine
Weiterleitung aus. Andere Suchbegriffe bleiben beim vorhandenen Suchcode.

Die lokale Unterseite `/gsubb/Eli/` führt die vollständige Animation selbst aus.
Alle benötigten Dateien sind lokal enthalten; es gibt keine externen Abrufe oder
iframe-Abhängigkeiten. Die Three.js-Lizenz liegt unverändert in THREE-LICENSE.txt.

Zum Deaktivieren nur das zusätzliche Script-Tag in `suche/index.html`
auskommentieren. Es muss kein bestehender Suchcode entfernt oder ersetzt werden.
