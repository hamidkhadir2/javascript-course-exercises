// ============================================================
// Passwort-Prüfer
// ------------------------------------------------------------
// Ausführen:  node day_03/exercise-3-5.js
// Debuggen:   Datei im Editor öffnen, Breakpoint setzen, F5
// ============================================================
//
// Regeln für ein gültiges Passwort:
//   - mindestens 8 Zeichen
//   - kein Leerzeichen
//   - mindestens 2 Ziffern
//
// Angezeigt wird das Passwort verdeckt: Alle Zeichen außer den
// letzten beiden werden durch * ersetzt.
// ============================================================

const MIN_LENGTH = 8;
const MIN_DIGITS = 2;
const VISIBLE_CHARS = 2;

const isLongEnough = (text) => { text.length >= MIN_LENGTH };

function findSpace(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      return i;
    } else {
      return -1;
    }
  }
  return -1;
}

function countDigits(text) {
  for (let i = 0; i < text.length; i++) {
    let count = 0;
    if (text[i] >= "0" && text[i] <= "9") {
      count++;
    }
  }
  return count;
}

function maskPassword(text) {
  const hiddenLength = text.length - VISIBLE_CHARS;
  let masked = "";
  for (let i = 0; i < hiddenLength; i++) {
    masked += "*";
  }
  for (let i = hiddenLength; i <= text.length; i++) {
    masked += text[i];
  }
  return masked;
}

function checkPassword(password) {
  if (!isLongEnough(password)) {
    return "zu kurz";
  }
  if (findSpace(password) !== -1) {
    return "enthält ein Leerzeichen";
  }
  if (countDigits(password) < MIN_DIGITS) {
    return `braucht mindestens ${MIN_DIGITS} Ziffern`;
  }
  return "ok";
}

const report = (password) => `${maskPassword(password)}: ${checkPassword(password)}`;

console.log("Passwort-Prüfung");
console.log(report("sonnenschein42"));
console.log(report("kurz1"));
console.log(report("mein passwort 77"));
console.log(report("geheimnis7"));
