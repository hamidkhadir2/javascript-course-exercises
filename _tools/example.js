// ============================================================
//  So sähe eine Übungsdatei ab Tag 2 aus
// ============================================================
//  Aufgabe: Die Funktion soll die Menge einer Zutat auf eine
//  andere Portionszahl umrechnen. Sie enthält zwei Fehler.
//
//  Repariere sie, bis unten alles grün ist.
// ============================================================

function amountForServings(amount, baseServings, desiredServings) {
  const factor = baseServings / desiredServings;   // Fehler 1: verdreht
  return amount + factor;                          // Fehler 2: falscher Operator
}


// ------------------------------------------------------------
//  Selbstkontrolle – diesen Teil nicht verändern
// ------------------------------------------------------------
check(
  "500 g für 4 Portionen bleiben bei 4 Portionen 500 g",
  amountForServings(500, 4, 4),
  500
);

check(
  "500 g für 4 Portionen werden bei 8 Portionen zu 1000 g",
  amountForServings(500, 4, 8),
  1000
);

check(
  "250 ml für 4 Portionen werden bei 2 Portionen zu 125 ml",
  amountForServings(250, 4, 2),
  125
);

checkThat(
  "Das Ergebnis ist eine Zahl",
  typeof amountForServings(500, 4, 6) === "number"
);
