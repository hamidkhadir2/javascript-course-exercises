// ============================================================
// Übung 1.3 – Lösung
// ============================================================


// ------------------------------------------------------------
// 1. + 2. Rezept in Variablen, Ausgabe mit Template Literal
// ------------------------------------------------------------
// Die Mengen gelten für EINE Portion.
const title = "Rührkuchen";
const bakingMinutes = 45;
const flourGrams = 125;
const eggs = 0.75;
const milkMl = 60;

console.log(`${title} (${bakingMinutes} Minuten): ${flourGrams} g Mehl, ${eggs} Eier, ${milkMl} ml Milch`);


// ------------------------------------------------------------
// 3. + 4. Portionszahl, Ausgabe angepasst
// ------------------------------------------------------------
const servings = 4;

console.log(`${title} für ${servings} Portionen:`);
console.log(`${flourGrams * servings} g Mehl`);
console.log(`${eggs * servings} Eier`);
console.log(`${milkMl * servings} ml Milch`);


// ------------------------------------------------------------
// Ausbau A – aufrunden
// ------------------------------------------------------------
// Bei 6 Portionen wären es 4.5 Eier.
console.log(`${Math.ceil(eggs * 6)} Eier für 6 Portionen (aufgerundet)`);


// ------------------------------------------------------------
// Ausbau B – Portionszahl beim Aufruf mitgeben
// ------------------------------------------------------------
//     node day_01/exercise-1-3.js 8
//
// process.argv ist eine Liste aller Angaben beim Aufruf:
//   [0] der Pfad zu node
//   [1] der Pfad zu dieser Datei
//   [2] das Erste, was DU angehängt hast
//
// Und dieser Wert ist IMMER Text – auch wenn du 8 tippst.
// Ohne Number(...) wäre "8" * 125 zwar zufällig richtig (bei * wandelt
// JavaScript still um), aber "8" + 1 ergäbe "81".
// Deshalb: sofort beim Einlesen umwandeln.

const input = process.argv[2];

if (input) {
  console.log("Rohwert:", input, "– Typ:", typeof input);   // string!

  const wantedServings = Number(input);

  console.log(`${title} für ${wantedServings} Portionen:`);
  console.log(`${flourGrams * wantedServings} g Mehl`);
  console.log(`${Math.ceil(eggs * wantedServings)} Eier`);
  console.log(`${milkMl * wantedServings} ml Milch`);
}
