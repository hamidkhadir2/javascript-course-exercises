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
function servingsLabel(servings) {
  return servings === 1 ? "1 Portion" : `${servings} Portionen`;
}
console.log(servingsLabel(4));
// 2. Schreibe difficultyLabel(level) mit switch:
//      1  →  "leicht"
//      2  →  "mittel"
//      3  →  "schwer"
//      alles andere  →  "unbekannt"
//
//    Teste mit 1, 3 und 7.

function difficultyLabel(level) {
  switch (level) {
    case 1:
      return "leicht";
    case 2:
      return "mittel";
    case 3:
      return "schwer";
    default:
      return "unbekannt";
  }
}
console.log(difficultyLabel(1));
console.log(difficultyLabel(3));
console.log(difficultyLabel(7));



// 3. Schreibe formatRecipe(title, minutes) mit Guard Clauses:
//      kein Titel          →  "Kein Titel angegeben"
//      Dauer 0 oder kleiner →  "Ungültige Dauer"
//      sonst               →  "Lasagne - 45 Minuten"
//
//    Teste mit:
//      formatRecipe("Lasagne", 45)
//      formatRecipe("", 45)
//      formatRecipe("Lasagne", 0)

function formatRecipe(title, minutes) {
  if (!title) {
    return "Kein Titel angegeben";
  }
  if (minutes <= 0) {
    return "Ungültige Dauer";
  }
  return `${title} - ${minutes} Minuten`;
}
console.log(formatRecipe("Lasagne", 45));
console.log(formatRecipe("", 45));
console.log(formatRecipe("Lasagne", 0));

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
fuction formatRecipe(title, minutes, level) {
  if (!title) {
    return "Kein Titel angegeben";
  }
  if(minutes<=0) {
    return "Ungültige Dauer";
  }
    const difficulty = difficultyLabel(level); 
    return `${title} - ${minutes} Minuten, ${difficulty}`;    
    if (difficulty === "unbekannt") {
      return `${title} - ${minutes} Minuten, unbekannter Schwierigkeitsgrad`;
    }
    return `${title} - ${minutes} Minuten, ${difficulty}`;
}   
console.log(formatRecipe("Lasagne", 45, 2));
