// ============================================================
// Übung 2.1 - Lösung
// ============================================================

// 1. greet
function greet(name) {
  return `Hallo, ${name}!`;
}

console.log(greet("Mia"));   // Hallo, Mia!


// 2. scaleAmount
function scaleAmount(amount, baseServings, desiredServings) {
  return amount / baseServings * desiredServings;
}


// 3. Mehl für 6 statt 4 Portionen
const flourGrams = scaleAmount(500, 4, 6);
console.log(`${flourGrams} g Mehl`);   // 750 g Mehl


// ------------------------------------------------------------
// Ausbau
// ------------------------------------------------------------
function printGreeting(name) {
  console.log(`Hallo, ${name}!`);
}

const result = printGreeting("Ana");   // gibt "Hallo, Ana!" aus
console.log(result);                   // undefined

// printGreeting GIBT etwas AUS, aber es gibt nichts ZURÜCK.
// Eine Funktion ohne return liefert undefined - "kein Wert".
// In result landet deshalb undefined.
