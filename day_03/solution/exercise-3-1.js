// ============================================================
// Übung 3.1 - Lösung
// ============================================================

// 1. Zahlen 1 bis 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// 2. Mehl-Tabelle
const FLOUR_PER_SERVING = 125;

for (let servings = 1; servings <= 8; servings++) {
  console.log(`${servings} × ${FLOUR_PER_SERVING} g = ${servings * FLOUR_PER_SERVING} g Mehl`);
}


// 3. Küchentimer
let minutesLeft = 5;

while (minutesLeft > 0) {
  const unit = minutesLeft === 1 ? "Minute" : "Minuten";
  console.log(`Noch ${minutesLeft} ${unit}`);
  minutesLeft--;
}
console.log("Fertig!");

// Ohne minutesLeft-- würde die Bedingung nie falsch:
// eine Endlosschleife. Abbrechen mit Strg+C.


// ------------------------------------------------------------
// Ausbau - Sparschwein
// ------------------------------------------------------------
// while passt besser: Wie viele Wochen es werden, wissen wir
// vorher nicht - genau das ist die Frage.
const WEEKLY_SAVING = 7.5;
const TARGET = 100;

let balance = 0;
let week = 0;

while (balance < TARGET) {
  week++;
  balance += WEEKLY_SAVING;
}

console.log(`Nach ${week} Wochen: ${balance} Euro`);   // Nach 14 Wochen: 105 Euro
