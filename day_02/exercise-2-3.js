// ============================================================
// Übung 2.3 - Guard Clauses, ternärer Operator, switch
// ------------------------------------------------------------
// Ausführen:  node day_02/exercise-2-3.js
// ============================================================

// 1. Schreibe servingsLabel(servings) aus Übung 2.2 neu -
//    diesmal mit dem ternären Operator statt if/else.
//
//      1  →  "1 Portion"
//      4  →  "4 Portionen"


// 2. Schreibe difficultyLabel(level) mit switch:
//      1  →  "leicht"
//      2  →  "mittel"
//      3  →  "schwer"
//      alles andere  →  "unbekannt"
//
//    Teste mit 1, 3 und 7.


// 3. Schreibe formatRecipe(title, minutes) mit Guard Clauses:
//      kein Titel          →  "Kein Titel angegeben"
//      Dauer 0 oder kleiner →  "Ungültige Dauer"
//      sonst               →  "Lasagne - 45 Minuten"
//
//    Teste mit:
//      formatRecipe("Lasagne", 45)
//      formatRecipe("", 45)
//      formatRecipe("Lasagne", 0)



// ------------------------------------------------------------
// Ausbau: Erweitere formatRecipe um einen dritten Parameter level
//         und hänge den Schwierigkeitsgrad an:
//
//           Lasagne - 45 Minuten, mittel
//
//         Benutze dafür difficultyLabel. Was soll passieren, wenn
//         level ungültig ist? Entscheide dich und begründe es
//         in einem Kommentar.
// ------------------------------------------------------------
