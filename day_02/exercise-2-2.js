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


// 2. Schreibe servingsLabel(servings):
//      1  →  "1 Portion"
//      4  →  "4 Portionen"
//
//    Teste mit 1 und 4.


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
