// ============================================================
// Übung 2.4 - Lösung
// ============================================================

// 1. validateRecipeTitle
function validateRecipeTitle(input) {
  const title = input.trim();

  if (title === "") {
    return "Bitte einen Titel eingeben.";
  }
  if (title.length < 3) {
    return "Der Titel ist zu kurz.";
  }
  if (title.toLowerCase().includes("test")) {
    return "Bitte einen echten Titel eingeben.";
  }
  return null;
}


// 2. validateEmail
function validateEmail(input) {
  const email = input.trim();
  const atPosition = email.indexOf("@");

  if (email === "") {
    return "Bitte eine E-Mail-Adresse eingeben.";
  }
  if (atPosition === -1) {
    return "Die E-Mail-Adresse braucht ein @.";
  }
  // lastIndexOf, nicht indexOf: Vor dem @ darf auch ein Punkt stehen
  // (anna.mueller@...). Entscheidend ist der LETZTE Punkt.
  if (email.lastIndexOf(".") < atPosition) {
    return "Nach dem @ fehlt ein Punkt.";
  }
  // Ausbau A: Gibt es ein zweites @, ist die erste Fundstelle
  // nicht die letzte.
  if (atPosition !== email.lastIndexOf("@")) {
    return "Die E-Mail-Adresse darf nur ein @ enthalten.";
  }
  return null;
}


// 3. Tests
console.log(validateRecipeTitle("  Pfannkuchen  "));  // null
console.log(validateRecipeTitle("   "));              // Bitte einen Titel eingeben.
console.log(validateRecipeTitle("Ei"));               // Der Titel ist zu kurz.
console.log(validateRecipeTitle("TEST-Rezept"));      // Bitte einen echten Titel eingeben.

console.log(validateEmail("anna@example.de"));        // null
console.log(validateEmail(""));                       // Bitte eine E-Mail-Adresse eingeben.
console.log(validateEmail("anna.example.de"));        // Die E-Mail-Adresse braucht ein @.
console.log(validateEmail("anna@example"));           // Nach dem @ fehlt ein Punkt.
console.log(validateEmail("anna.mueller@example"));   // Nach dem @ fehlt ein Punkt.
console.log(validateEmail("anna@@example.de"));       // Die E-Mail-Adresse darf nur ein @ enthalten.


// ------------------------------------------------------------
// Ausbau B - Titel beim Aufruf mitgeben
// ------------------------------------------------------------
//     node day_02/exercise-2-4.js "  Pfannkuchen "
//
// Ohne Angabe ist process.argv[2] undefined. undefined.trim() wäre
// ein TypeError - deshalb zuerst eine Guard Clause.

const input = process.argv[2];

if (input === undefined) {
  console.log("Kein Titel mitgegeben.");
} else {
  const error = validateRecipeTitle(input);
  if (error) {
    console.log(error);
  } else {
    console.log(`Titel übernommen: ${input.trim()}`);
  }
}
