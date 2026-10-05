// ============================================================
// Übung 3.4 - Lösung
// ============================================================

// ------------------------------------------------------------
// 1. Scope
// ------------------------------------------------------------
const recipe = "Lasagne";

function showRecipe() {
  const recipe = "Pizza";
  console.log(recipe);           // a) Pizza
}
// Die Funktion hat ihre EIGENE Variable recipe. Innen verdeckt sie
// die äußere - die äußere bleibt davon unberührt.

showRecipe();
console.log(recipe);             // b) Lasagne

if (true) {
  const note = "heiß servieren";
}
// console.log(note);            // c) ReferenceError: note is not defined
// note existiert nur in den { } des if-Blocks.
// Außen sieht nicht nach innen.

let total = 0;

function addToTotal(amount) {
  total += amount;
}

addToTotal(5);
addToTotal(3);
console.log(total);              // d) 8
// Innen sieht nach außen: Die Funktion verändert die äußere Variable.
// Das funktioniert - ist aber schwer nachzuvollziehen, wenn viele
// Funktionen dieselbe äußere Variable ändern.


// ------------------------------------------------------------
// 2. makeScaler
// ------------------------------------------------------------
function makeScaler(baseServings) {
  return (amount, desiredServings) => amount / baseServings * desiredServings;
}

const scalePancakes = makeScaler(4);
console.log(scalePancakes(500, 6));   // 750
console.log(scalePancakes(500, 2));   // 250


// ------------------------------------------------------------
// 3. makeIdGenerator
// ------------------------------------------------------------
function makeIdGenerator(prefix) {
  let count = 0;
  return () => {
    count++;
    return `${prefix}${count}`;
  };
}

const nextRecipeId = makeIdGenerator("R");
console.log(nextRecipeId());   // R1
console.log(nextRecipeId());   // R2
console.log(nextRecipeId());   // R3


// ------------------------------------------------------------
// Ausbau
// ------------------------------------------------------------
const nextIngredientId = makeIdGenerator("Z");
const nextRecipeIdAgain = makeIdGenerator("R");

console.log(nextRecipeIdAgain());   // R1
console.log(nextIngredientId());    // Z1
console.log(nextRecipeIdAgain());   // R2
console.log(nextIngredientId());    // Z2

// Jeder Aufruf von makeIdGenerator legt ein NEUES count an.
// Jede zurückgegebene Funktion merkt sich ihr eigenes count -
// die beiden Zähler wissen nichts voneinander.
