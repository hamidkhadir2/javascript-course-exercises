// ============================================================
// Übung 3.3 - Arrow Functions
// ------------------------------------------------------------
// Ausführen:  node day_03/exercise-3-3.js
// ============================================================

// 1. Schreibe diese vier Funktionen als Arrow Functions - so kurz
//    wie möglich. Die Aufrufe unten müssen danach dasselbe ausgeben.

function double(x) {
  return x * 2;
}

function greet(name) {
  return `Hallo, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function servingsLabel(servings) {
  if (servings === 1) {
    return "1 Portion";
  } else {
    return `${servings} Portionen`;
  }
}

console.log(double(4));          // 8
console.log(greet("Mia"));       // Hallo, Mia!
console.log(add(2, 3));          // 5
console.log(servingsLabel(1));   // 1 Portion
console.log(servingsLabel(4));   // 4 Portionen


// 2. Schreibe isVegetarianLabel(isVegetarian) als Arrow Function
//    mit dem ternären Operator:
//
//      true   →  "vegetarisch"
//      false  →  "mit Fleisch"



// 3. Warum ergibt half(8) undefined? Erkläre es in einem Kommentar
//    und repariere die Funktion.

const half = (x) => { x / 2 };

console.log(half(8));   // soll 4 sein



// ------------------------------------------------------------
// Ausbau: Diese Zeile steht VOR der Funktion. Entferne die
//         Kommentarzeichen und führe die Datei aus.
//
// console.log(square(3));
//
// const square = (x) => x * x;
//
//         Was passiert? Was müsstest du ändern, damit es
//         funktioniert - ohne die Reihenfolge zu tauschen?
// ------------------------------------------------------------
