// ============================================================
// Freibad-Kasse - Kassenbon (Lösung)
// ------------------------------------------------------------
// Ausführen:  node day_02/exercise-2-5.js
// ============================================================
//
// Preise:
//   kind        3 Euro
//   student     4 Euro
//   erwachsen   6 Euro
//   sonntags    1 Euro Zuschlag auf jede Karte
// ============================================================

const ADULT_PRICE = 6;
const SUNDAY_SURCHARGE = 1;

// FEHLER 4 behoben: stand als  input.trim();  in einer eigenen Zeile.
// Erkennungszeichen: KEINE Fehlermeldung, aber
//   FRAU WEBER: unbekannte Kategorie " erwachsen "
// Die Anführungszeichen in der Ausgabe zeigen die Leerzeichen.
// Strings sind unveränderlich - trim() gibt einen NEUEN String zurück,
// und der wurde weggeworfen.
function normalizeCategory(input) {
  return input.trim().toLowerCase();
}

// FEHLER 1 behoben: stand als name.toUppercase() - kleines c.
// Erkennungszeichen: TypeError: name.toUppercase is not a function.
// Die Ausgabe bricht nach der Überschrift ab.
function formatName(name) {
  return name.toUpperCase();
}

function getBasePrice(category) {
  let price;
  switch (category) {
    case "kind":
      price = ADULT_PRICE / 2;
      break;
    case "student":
      price = ADULT_PRICE - 2;
      // FEHLER 3 behoben: break fehlte.
      // Erkennungszeichen: KEINE Fehlermeldung, aber Jonas zahlt
      // 6 statt 4 Euro - den Erwachsenenpreis. Ohne break läuft der
      // switch in den nächsten case weiter und überschreibt price.
      break;
    case "erwachsen":
      price = ADULT_PRICE;
      break;
    default:
      price = null;
  }
  return price;
}

function getTicketPrice(category, weekday) {
  const basePrice = getBasePrice(category);
  if (basePrice === null) {
    return null;
  }
  // FEHLER 2 behoben: stand als  if (weekday = "sonntag")
  // Erkennungszeichen: KEINE Fehlermeldung, aber jede Karte kostet
  // 1 Euro zu viel. = weist zu, und "sonntag" ist truthy - die
  // Bedingung ist also IMMER wahr.
  if (weekday === "sonntag") {
    return basePrice + SUNDAY_SURCHARGE;
  }
  return basePrice;
}

function formatTicket(name, categoryInput, weekday) {
  const category = normalizeCategory(categoryInput);
  const price = getTicketPrice(category, weekday);

  if (price === null) {
    return `${formatName(name)}: unbekannte Kategorie "${category}"`;
  }
  return `${formatName(name)} (${category}): ${price} Euro`;
}

console.log("Freibad Sonnenbad - Kassenbon");
console.log(formatTicket("Mia", "kind", "samstag"));
console.log(formatTicket("Jonas", "Student", "samstag"));
console.log(formatTicket("Frau Weber", " erwachsen ", "sonntag"));
console.log(formatTicket("Tom", "rentner", "samstag"));

// Jonas ist der lehrreichste Fall: Mit Fehler 2 UND 3 zahlt er
// 7 Euro (6 + 1). Wer nur einen der beiden behebt, sieht 6 oder 5 -
// das Symptom ändert sich, verschwindet aber nicht.
