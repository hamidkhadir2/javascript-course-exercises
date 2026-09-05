// ============================================================
//  Kinoprogramm – Tagesausgabe (Lösung)
// ------------------------------------------------------------
//  Ausführen:  node day_01/exercise-1-4.js
// ============================================================

console.log("Kinoprogramm wird geladen …");

const movieTitle = "Dune – Der Wüstenplanet";
const startTime = "20:15";

// FEHLER 4 behoben: stand als "178" in Anführungszeichen, war also Text.
// Erkennungszeichen: KEINE Fehlermeldung, aber "17815 Minuten" statt 193.
// Bei Text bedeutet + aneinanderhängen, nicht addieren.
const runtimeMinutes = 178;

const adsMinutes = 15;
const pricePerTicket = 11.5;

// FEHLER 2 behoben: war const und wurde eine Zeile später überschrieben.
// Erkennungszeichen: TypeError: Assignment to constant variable.
// Ein Wert, der sich ändert, braucht let.
let screenNumber = 3;

// Der Film wurde in den größeren Saal verlegt.
screenNumber = 5;

// FEHLER 3 behoben: hier stand movietitle, die Variable heißt movieTitle.
// Erkennungszeichen: ReferenceError: movietitle is not defined.
// JavaScript unterscheidet Groß- und Kleinschreibung.
console.log(`Film: ${movieTitle}`);

// FEHLER 1 behoben: die Backticks um den Text fehlten.
// Erkennungszeichen: SyntaxError – und solange der drin ist, läuft
// KEINE einzige Zeile der Datei, auch nicht die Ausgabe in Zeile 8.
console.log(`Saal ${screenNumber}, Beginn ${startTime} Uhr`);

console.log(`Laufzeit inklusive Werbung: ${runtimeMinutes + adsMinutes} Minuten`);
console.log(`3 Karten kosten ${pricePerTicket * 3} Euro`);
