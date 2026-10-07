// ============================================================
// Übung 2.4 - Eingaben prüfen
// ------------------------------------------------------------
// Ausführen:  node day_02/exercise-2-4.js
// ============================================================

// 1. Schreibe validateRecipeTitle(input).
//    Entferne zuerst Leerzeichen am Anfang und Ende, dann prüfe:
//
//      leer                         →  "Bitte einen Titel eingeben."
//      kürzer als 3 Zeichen         →  "Der Titel ist zu kurz."
//      enthält "test" (egal ob groß
//      oder klein geschrieben)      →  "Bitte einen echten Titel eingeben."
//      sonst                        →  null  (kein Fehler)
function validateRecipeTitle(input) {
  let trimmedInput = input.trim().toLowerCase();
if (trimmedInput === "") {
  return "Bitte einen Titel eingeben.";
} else if (trimmedInput.length < 3) {
  return "Der Titel ist zu kurz.";
} else if (trimmedInput.includes("test")) {
  return "Bitte einen echten Titel eingeben.";
} else {
  return null;
}
}

// 2. Schreibe validateEmail(input).
//    Entferne zuerst Leerzeichen am Anfang und Ende, dann prüfe:
//
//      leer                         →  "Bitte eine E-Mail-Adresse eingeben."
//      kein @                       →  "Die E-Mail-Adresse braucht ein @."
//      kein . nach dem @            →  "Nach dem @ fehlt ein Punkt."
//      sonst                        →  null
//
//    Tipp: indexOf und lastIndexOf liefern Positionen. Positionen
//          kann man mit < und > vergleichen.
function validateEmail(input) {
  let trimmedInput = input.trim().toLowerCase();
if (trimmedInput === "") { 
    return "Bitte eine E-Mail-Adresse eingeben.";  }
    else if(trimmedInput.indexOf("@") === -1) {
        return "Die E-Mail-Adresse braucht ein @.";
    }
    else if(trimmedInput.lastIndexOf(".") < trimmedInput.indexOf("@")) {
        return "Nach dem @ fehlt ein Punkt.";
    } else {
        return null;
    }
}

 //3. Entferne die Kommentarzeichen und teste deine Funktionen.
  //  Hinter jedem Aufruf steht das erwartete Ergebnis.

 console.log(validateRecipeTitle("  Pfannkuchen  "));  // null
 console.log(validateRecipeTitle("   "));              // Bitte einen Titel eingeben.
 console.log(validateRecipeTitle("Ei"));               // Der Titel ist zu kurz.
 console.log(validateRecipeTitle("TEST-Rezept"));      // Bitte einen echten Titel eingeben.

 console.log(validateEmail("anna@example.de"));        // null
 console.log(validateEmail(""));                       // Bitte eine E-Mail-Adresse eingeben.
 console.log(validateEmail("anna.example.de"));        // Die E-Mail-Adresse braucht ein @.
 console.log(validateEmail("anna@example"));           // Nach dem @ fehlt ein Punkt.
 console.log(validateEmail("anna.mueller@example"));   // Nach dem @ fehlt ein Punkt.



// ------------------------------------------------------------
// Ausbau A: "anna@@example.de" hat zwei @. Ergänze eine Prüfung:
//           "Die E-Mail-Adresse darf nur ein @ enthalten."
//
// Ausbau B: Den Titel beim Aufruf mitgeben:
//
//               node day_02/exercise-2-4.js "  Pfannkuchen "
//
//           Gib entweder die Fehlermeldung aus oder
//           "Titel übernommen: Pfannkuchen".
//           Was passiert, wenn du gar nichts mitgibst?
// ------------------------------------------------------------
