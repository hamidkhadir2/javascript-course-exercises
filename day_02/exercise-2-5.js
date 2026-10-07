// ============================================================
// Freibad-Kasse - Kassenbon
// ------------------------------------------------------------
// Ausführen:  node day_02/exercise-2-5.js
// ============================================================
//
// Preise:
//   kind        3 Euro
//   student     4 Euro
//   erwachsen   6 Euro
//   sonntags    1 Euro Zuschlag auf jede Karte
//
// Die Kategorie wird an der Kasse eingetippt. Groß- und
// Kleinschreibung sowie Leerzeichen am Anfang oder Ende
// sollen keine Rolle spielen.
// ============================================================

const ADULT_PRICE = 6;
const SUNDAY_SURCHARGE = 1;

function normalizeCategory(input) {
  const trimmedInput = input.trim();
  return trimmedInput.toLowerCase();
}

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
