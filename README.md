# Übungen — Frontend-Programmierung mit JavaScript

Die Übungen zum Kurs an der Hochschule Hannover. Ein Ordner pro Kurstag.

## Einmalig einrichten

Du brauchst **Node.js** (Version 20 oder neuer). Prüfe im Terminal:

```
node -v
```

Erscheint eine Versionsnummer, bist du startklar. Erscheint `command not found`, hol
die Installation nach — die Anleitung dazu hast du vor Kursbeginn bekommen.

Weitere Pakete werden **nicht** installiert. `npm install` ist nicht nötig.

## Übungen bearbeiten

```
day_01/
├── AUFGABEN.md        Die Aufgabenstellung — hier fängst du an
├── FEHLERSUCHE.md     Aufgabenblatt zur Fehlersuche des Tages
├── exercise-1-1.js    deine Arbeitsdateien
├── exercise-1-2.js
├── exercise-1-3.js
└── solution/          Musterlösungen — erst ansehen, wenn du es selbst versucht hast
```

Ab Tag 4 liegt dort zusätzlich `recipes.js` — die gemeinsame Datenbasis des Kurses. Ab Tag 5
kommen `.html`- und `.css`-Dateien dazu, weil der Code dann im Browser läuft.

Eine Datei ausführen — dazu ins Tagesverzeichnis wechseln:

```
cd day_01
node exercise-1-2.js
```

## Sich selbst testen

Aus dem **Projektordner** (dort, wo diese Datei liegt):

| Befehl | Was er prüft |
|---|---|
| `npm test` | alle Übungen |
| `npm test -- day_1` | alle Übungen von Tag 1 |
| `npm test -- day_1 exercise-1-2` | nur diese eine |

Der Test führt deine Datei aus und vergleicht die Ausgabe mit dem, was in der Aufgabe steht:

```
day_01 / exercise-1-2

✅ Das Programm läuft ohne Fehler
✅ Teil A: ein Satz mit Dauer, Portionen und vegetarisch
❌ Teil B: Überschrift der Einkaufsliste
   Es fehlt eine Zeile wie "Einkaufsliste für 6 Portionen:".
   Die Portionszahl darf eine andere sein — sie muss nur dort stehen.
○  Ausbau A: Eier aufgerundet — noch offen (Ausbau, freiwillig)
```

- **❌ rot** — hier stimmt noch etwas nicht. Nimm dir immer den **obersten** roten Punkt vor.
- **○ grau** — eine Ausbauaufgabe. Freiwillig, macht den Lauf nicht rot.
- Bricht dein Programm mit einem Fehler ab, zeigt der Test die Fehlermeldung und prüft nicht weiter.
  Das ist Absicht: Genauso verhält sich JavaScript auch sonst.

Der Test ist ein Hilfsmittel, keine Note. Niemand sieht das Ergebnis außer dir.

### Ab Tag 5: Selbstkontrolle im Browser

Ab Tag 5 läuft der Code in einer HTML-Seite, und `npm test` kann dort nicht mehr mitlesen.
Stattdessen lädt jede Übungsseite am Ende eine Datei `checks-5-x.js`. Das Ergebnis erscheint
**unten auf der Seite** und zusätzlich in der Konsole (`F12`):

```
Selbstkontrolle: 5 von 8
✅ Aufgabe 2: Die Überschrift nennt die Anzahl
❌ Aufgabe 3: Die Zählzeile stimmt
   erwartet: "6 Rezepte, davon 4 vegetarisch" — war aber: "Noch nichts geladen."
```

Dafür brauchst du die VS-Code-Erweiterung **Live Server**: Rechtsklick auf die `.html`-Datei
→ *Open with Live Server*. Die Dateien `checks-*.js` veränderst du nicht.

## Regeln, die im ganzen Kurs gelten

- **Der Unterricht ist deutsch, der Code ist englisch.** Variablen- und Funktionsnamen schreibt
  man im Beruf auf Englisch. Kommentare und Ausgabetexte bleiben deutsch.
- **Woche 1 ohne KI-Assistenten.** Wer die Grundlagen nicht selbst tippt, kann später nicht
  beurteilen, was ein Assistent ausgibt. Für die Fehlersuche gilt das den ganzen Kurs über.
- **Kein Tag setzt voraus, dass der Vortag fertig ist.** Wer hängt oder gefehlt hat, startet
  vom Stand in `solution/`.

## Und wenn etwas gar nicht geht

`fehlerprotokoll.md` im Projektordner ist deine Sammlung: Symptom, Vermutung, wie geprüft,
Ursache, Fix. Führe sie ab Tag 1 — in der Prüfung ist sie erlaubt.
