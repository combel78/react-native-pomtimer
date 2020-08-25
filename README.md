## Beispiel-Repository zum Artikel MyReact Teil 5: Eine mobile Tomatenuhr

Dieses Repository enthält das Pomtimer-Beispiel in React Native. Nach dem Klonen dieses Repositories kann dieses mit

### `npm install`

aufgesetzt werden. Das Projekt kann dann mit einem der folgenden Befehle gestartet werden:

### `npm start` oder `expo start`

Die Ausführung der oberen Befehle startet die Expo-Laufzeitumgebung mit dem Beispielprojekt. Es öffnet sich ein Browserfenster mit der URL
http://localhost:19002; mit der angezeigten Webseite und dem internen Metro Bundler lässt sich das Projekt nun auf einem Android-Gerät/Emulator oder einem iOS-Gerät/Simulator ausführen.

Soll die App auf einem physischen Gerät ausgeführt werden, muss vorher die Expo-App installiert werden. Diese kann im Apple App Store unter https://apps.apple.com/app/apple-store/id982107779 oder auf Google Play unter https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www bezogen werden.

Für die Ausführung innerhalb eines Android-Emulators muss dieser zunächst installiert werden.

Dazu können die folgenden Schritte nachvollzogen werden:

1. Download des Android Studio-Entwicklungspaketes von der Android-Webseite [7]. Android Studio ist auf der Webseite unter „Download Options“ für Windows, Mac oder Linux erhältlich.
2. Installation des Programmpaketes. Nach der Installation kann eine automatische Update-Installation erfolgen, um die Entwicklungsumgebung auf den aktuellsten Stand zu bringen.
3. Start von Android Studio: es öffnet sich ein Willkommens-Fenster, in dem ein Projekt erstellt oder geladen werden kann; weiterhin können Basiskonfiguration vorgenommen werden (Menü „Configure“ am unteren Fensterrand).
4. Auswahl des Punktes „SDK-Magager“ im Menü „Configures“. Es öffnet sich das Fenster der installierten Bestandteile zum Android-Enwicklungspaketes (SDK). Im Tab „SDK Platforms“ sollten 1-2 aktuelle Android-Versionen (z.B. 9 und 10) ausgewählt werden, im Tab „SDK Tools“ sollten Haken bei den Punkten „Android SDK Build-Tools“, „Android Emulator“, „Android SDK Platform-Tools“, „Google Play services“ und „Intel x86 Emulator“ gesetzt werden. Nach dem Klick auf „OK“ öffnet sich ein separates Fenster und führt den Download der installierten Pakete durch. Nachdem der Vorgang abgeschlossen ist, kann mit dem nächsten Schritt fortgefahren werden.
5. Auswahl des Punktes „AVD-Manager“ im Menü „Configure“. Es öffnet sich der Android Virtual Device Manager, das Verwaltungswerkzeug für Android Emulatoren (Abbildung 5). Durch Klick auf den Button „Create Virtual Device“ kann nun ein neues Gerät hinzugefügt werden. Die Liste besteht aus einer Menge von Emulatoren (Smart Phones, Tablets, TV-Geräte, …) abhängig von Bildschirmauflösung und Bauart. Zur Emulation eines durchschnittlichen Android-Smartphones kann beispielsweise ein Goggle Pixel 2 gewählt werden.
6. Durch Klick auf „Next“ wird nun die auf dem Gerät installierte Android-Version ausgewählt (unabhängig von dem in Punkt 4 installierten Android SDK). Hier sollte ein aktuelles Image gewählt werden, jedoch sollte das Release einen Namen haben (z.B. „Pie“), da es bei den neuesten Android-Images ggf. Kompatibilitäts-Probleme zum Projekt geben kann. Initial muss ein Image erst heruntergeladen werden, deswegen muss zunächst auf „Download“ neben dem Release Name in der Liste geklickt werden. Einmal heruntergeladene Images können auf mehreren virtuellen Geräten installiert werden.
7. Nach der Auswahl des Gerätes und dem Download eines Android-Images kann der Vorgang abgeschlossen werden. Das Gerät erscheint nun in der Liste im AVD-Manager. Durch Klick auf das „Play“-Symbol unter „Actions“ kann der entsprechende Emulator gestartet werden. Sollte das noch nicht funktionieren, kann es sein, dass im Bios des Entwicklungs-PCs noch die Virtualisierungsfunktion Intel VT-x aktiviert werden muss. Nach einem Neustart des Systems nach der Bios-Änderung sollte der Emulator dann starten.
