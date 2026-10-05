// ============================================================
// Übung 1.3 – Werte, Typen und der Rezept-Rechner
// ------------------------------------------------------------
// Ausführen:  node day_01/exercise-1-3.js
// ============================================================

// 1. Lege fünf Variablen für ein Kuchenrezept an:
//    Titel, Backdauer, Mehl, Eier und Milch.
//    Überlege bei jeder: const oder let?
const title = "benanenkuchen";
const bakingMinutes = 50;
const flourGrams = 125;
const eggs = 2.75;
const milkMl = 800;


// 2. Nutze ein Template Literal, um das Rezept auszugeben.
console.log(`${title}  ${bakingMinutes} Minuten, ${flourGrams} g Mehl, ${eggs} Eier, ${milkMl} ml Milch= guten apetit!`);


// 3. Lege eine Variable für die Anzahl an Portionen an.



// 4. Passe die Ausgabe des Rezepts an die Portionszahl an.



// ------------------------------------------------------------
// Ausbau A: Eier aufrunden – halbe Eier kauft niemand.
//           Suche in der MDN-Doku nach Math.ceil
//
// Ausbau B: Die Portionszahl beim Aufruf mitgeben:
//
//               node day_01/exercise-1-3.js 8
//
//           Der Wert steht dann in process.argv[2].
//           Gib ihn erst einmal mit console.log aus und
//           schau dir GENAU an, was dort ankommt,
//           bevor du damit rechnest.
// ------------------------------------------------------------
