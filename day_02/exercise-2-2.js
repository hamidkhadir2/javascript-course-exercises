// ============================================================
// Übung 2.2 - Verzweigungen
// ------------------------------------------------------------
// Ausführen:  node day_02/exercise-2-2.js
// ============================================================

// 1. Schreibe describeDuration(minutes):
//      unter 20 Minuten  →  "schnell"
//      bis 45 Minuten    →  "normal"
//      sonst             →  "aufwendig"
//
//    Teste mit 10, 20, 45 und 90.
function describeDuration(minutes) {
  if (minutes < 20) {
    return "schnell";
  } else if (minutes <= 45) {
    return "normal";
  } else {
    return "aufwendig";
  }
}
console.log(describeDuration(10));
console.log(describeDuration(20));
console.log(describeDuration(45));
console.log(describeDuration(90 ));

// 2. Schreibe servingsLabel(servings):
//      1  →  "1 Portion"
//      4  →  "4 Portionen"
//
//    Teste mit 1 und 4.
function servingsLabel(servings) {
  if (servings === 1) {
    return "1 Portion";
  } else {
    return `${servings} Portionen`;
  }
}
console.log(servingsLabel(1));
console.log(servingsLabel(4));

// ------------------------------------------------------------
// 3. Truthy oder falsy?
//    Schreibe hinter jeden Aufruf deine Vorhersage als Kommentar.
//    Führe die Datei erst DANACH aus und vergleiche.
// ------------------------------------------------------------
function checkTruthy(value) {
  if (value) {
    console.log(`[${value}] (${typeof value}) ist truthy`);
  } else {
    console.log(`[${value}] (${typeof value}) ist falsy`);
  }
}

checkTruthy("Lasagne");   // Vorhersage:
checkTruthy("");          // Vorhersage:
checkTruthy(" ");         // Vorhersage:
checkTruthy(0);           // Vorhersage:
checkTruthy("0");         // Vorhersage:
checkTruthy("false");     // Vorhersage:
checkTruthy(null);        // Vorhersage:
checkTruthy(undefined);   // Vorhersage:


// ------------------------------------------------------------
// Ausbau: Schreibe isQuickVegetarian(minutes, isVegetarian), die
//         true zurückgibt, wenn ein Rezept vegetarisch ist UND
//         höchstens 20 Minuten dauert.
// ------------------------------------------------------------
function isQuickVegetarian(minutes, isVegetarian) {
  return minutes <= 20 && isVegetarian;
}
console.log(isQuickVegetarian(15, true));  // true
console.log(isQuickVegetarian(25, true));  // false
console.log(isQuickVegetarian(15, false)); // false