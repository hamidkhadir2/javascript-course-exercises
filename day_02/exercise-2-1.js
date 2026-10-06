// ============================================================
// Übung 2.1 - Funktionen
// ------------------------------------------------------------
// Ausführen:  node day_02/exercise-2-1.js
// ============================================================

// 1. Schreibe eine Funktion greet(name), die "Hallo, <name>!"
//    zurückgibt. Rufe sie auf und gib das Ergebnis aus.
//
//      Hallo, Mia!
function greet(name) {
console.log(`Hallo, ${name}!`);
}
greet("Mia");
// 2. Schreibe eine Funktion scaleAmount(amount, baseServings, desiredServings),
//    die eine Menge vom Grundrezept auf die gewünschte Portionszahl umrechnet.

function scaleAmount(amount, baseServings, desiredServings) {
  return (amount / baseServings) * desiredServings;}

console.log(scaleAmount(500, 4, 6) + " g Mehl");


let amount = "";
if (amount) {
console.log("Bitte Menge eingeben");}

// 3. Rechne damit 500 g Mehl von 4 auf 6 Portionen um und gib das
//    Ergebnis aus:
//
//      750 g Mehl



// ------------------------------------------------------------
// Ausbau: Sage vorher, was die letzten beiden Zeilen ausgeben.
//         Entferne dann die Kommentarzeichen und prüfe deine Vorhersage.
//
 function printGreeting(name) {
  console.log(`Hallo, ${name}!`);}
 printGreeting("Ana");
//
// const result = printGreeting("Ana");
// console.log(result);
// ------------------------------------------------------------
