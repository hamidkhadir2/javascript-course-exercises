// ============================================================
// Übung 3.4 - Scope und Closures
// ------------------------------------------------------------
// Ausführen:  node day_03/exercise-3-4.js
// ============================================================

// ------------------------------------------------------------
// 1. Scope: Sage für a) bis d) vorher, was passiert.
//    Schreibe deine Vorhersage hinter die Zeile, DANN ausführen.
// ------------------------------------------------------------
const recipe = "Lasagne";

function showRecipe() {
  const recipe = "Pizza";
  console.log(recipe);           // a) Vorhersage:
}

showRecipe();
console.log(recipe);             // b) Vorhersage:

if (true) {
  const note = "heiß servieren";
}
// console.log(note);            // c) Vorhersage:
//                                  Entferne die Kommentarzeichen, führe aus
//                                  und setze sie danach wieder.

let total = 0;

function addToTotal(amount) {
  total += amount;
}

addToTotal(5);
addToTotal(3);
console.log(total);              // d) Vorhersage:


// ------------------------------------------------------------
// 2. Schreibe makeScaler(baseServings).
//    Sie gibt eine Funktion zurück, die eine Menge vom Grundrezept
//    auf eine gewünschte Portionszahl umrechnet.
//
//      const scalePancakes = makeScaler(4);
//      scalePancakes(500, 6)   →  750
//      scalePancakes(500, 2)   →  250
// ------------------------------------------------------------



// ------------------------------------------------------------
// 3. Schreibe makeIdGenerator(prefix).
//    Die zurückgegebene Funktion liefert bei jedem Aufruf die
//    nächste Nummer:
//
//      const nextRecipeId = makeIdGenerator("R");
//      nextRecipeId()   →  "R1"
//      nextRecipeId()   →  "R2"
//      nextRecipeId()   →  "R3"
// ------------------------------------------------------------



// ------------------------------------------------------------
// Ausbau: Lege einen zweiten Generator mit dem Präfix "Z" an
//         (für Zutaten). Rufe beide abwechselnd auf.
//
//           R1, Z1, R2, Z2 ...
//
//         Warum stören sich die beiden Zähler nicht?
//         Erkläre es in einem Kommentar.
// ------------------------------------------------------------
