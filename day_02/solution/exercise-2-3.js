// ============================================================
// Übung 2.3 - Lösung
// ============================================================

// 1. servingsLabel mit ternärem Operator
function servingsLabel(servings) {
  return servings === 1 ? "1 Portion" : `${servings} Portionen`;
}

console.log(servingsLabel(1));   // 1 Portion
console.log(servingsLabel(4));   // 4 Portionen


// 2. difficultyLabel mit switch
//    Innerhalb einer Funktion beendet return den switch - kein break nötig.
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

console.log(difficultyLabel(1));   // leicht
console.log(difficultyLabel(3));   // schwer
console.log(difficultyLabel(7));   // unbekannt


// 3. formatRecipe mit Guard Clauses
function formatRecipe(title, minutes) {
  if (!title) {
    return "Kein Titel angegeben";
  }
  if (minutes <= 0) {
    return "Ungültige Dauer";
  }

  return `${title} - ${minutes} Minuten`;
}

console.log(formatRecipe("Lasagne", 45));   // Lasagne - 45 Minuten
console.log(formatRecipe("", 45));          // Kein Titel angegeben
console.log(formatRecipe("Lasagne", 0));    // Ungültige Dauer


// ------------------------------------------------------------
// Ausbau
// ------------------------------------------------------------
// Entscheidung: Ein ungültiger Schwierigkeitsgrad ist ein Fehler in
// den Daten, kein Sonderfall der Anzeige. Deshalb eine eigene Guard
// Clause mit Meldung - statt "unbekannt" still mit auszugeben.
function formatRecipeWithLevel(title, minutes, level) {
  if (!title) {
    return "Kein Titel angegeben";
  }
  if (minutes <= 0) {
    return "Ungültige Dauer";
  }
  const label = difficultyLabel(level);
  if (label === "unbekannt") {
    return "Ungültiger Schwierigkeitsgrad";
  }

  return `${title} - ${minutes} Minuten, ${label}`;
}

console.log(formatRecipeWithLevel("Lasagne", 45, 2));   // Lasagne - 45 Minuten, mittel
console.log(formatRecipeWithLevel("Lasagne", 45, 9));   // Ungültiger Schwierigkeitsgrad
