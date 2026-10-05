// ============================================================
// Übung 3.3 - Lösung
// ============================================================

// 1. Als Arrow Functions
const double = (x) => x * 2;
const greet = (name) => `Hallo, ${name}!`;
const add = (a, b) => a + b;
const servingsLabel = (servings) => servings === 1 ? "1 Portion" : `${servings} Portionen`;

console.log(double(4));          // 8
console.log(greet("Mia"));       // Hallo, Mia!
console.log(add(2, 3));          // 5
console.log(servingsLabel(1));   // 1 Portion
console.log(servingsLabel(4));   // 4 Portionen


// 2. isVegetarianLabel
const isVegetarianLabel = (isVegetarian) => isVegetarian ? "vegetarisch" : "mit Fleisch";

console.log(isVegetarianLabel(true));    // vegetarisch
console.log(isVegetarianLabel(false));   // mit Fleisch


// 3. half
// Die geschweiften Klammern machen aus dem Ausdruck einen Block.
// x / 2 wird zwar ausgerechnet, aber nicht zurückgegeben - und eine
// Funktion ohne return liefert undefined.
// Reparatur: Klammern weg (dann wird automatisch zurückgegeben) -
// oder Klammern behalten und return davorschreiben.
const half = (x) => x / 2;

console.log(half(8));   // 4


// ------------------------------------------------------------
// Ausbau
// ------------------------------------------------------------
// console.log(square(3));
// const square = (x) => x * x;
//
// → ReferenceError: Cannot access 'square' before initialization
//
// square ist eine const-Variable und existiert erst ab ihrer Zeile.
// Als Funktionsdeklaration wird sie beim Start "nach oben gezogen"
// (hoisting) und funktioniert auch vor ihrer Zeile:

console.log(square(3));   // 9

function square(x) {
  return x * x;
}
