// ============================================================
// Passwort-Prüfer (Lösung)
// ------------------------------------------------------------
// Ausführen:  node day_03/exercise-3-5.js
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

// FEHLER 1 behoben: stand als  (text) => { text.length >= MIN_LENGTH }
// Erkennungszeichen: KEINE Fehlermeldung, aber JEDES Passwort ist
// "zu kurz". Im Debugger: isLongEnough liefert undefined, und
// !undefined ist true.
// Mit { } braucht eine Arrow Function ein return.
const isLongEnough = (text) => text.length >= MIN_LENGTH;

// FEHLER 2 behoben: return -1 stand im else INNERHALB der Schleife.
// Erkennungszeichen: KEINE Fehlermeldung, aber "mein passwort 77"
// gilt als ok. Im Debugger: Die Schleife läuft nur einmal, beim
// ersten Zeichen "m".
// "Nicht gefunden" steht erst fest, wenn ALLE Zeichen geprüft sind.
function findSpace(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      return i;
    }
  }
  return -1;
}

// FEHLER 3 behoben: let count = 0 stand IN der Schleife.
// Erkennungszeichen: ReferenceError: count is not defined -
// erst sichtbar, nachdem Fehler 1 behoben ist.
// count gab es nur im Block der Schleife (Scope). Und selbst wenn:
// Bei jedem Durchlauf hätte es wieder bei 0 angefangen.
// Startwert einer Akkumulation gehört VOR die Schleife.
function countDigits(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] >= "0" && text[i] <= "9") {
      count++;
    }
  }
  return count;
}

// FEHLER 4 behoben: Die zweite Schleife lief mit i <= text.length.
// Erkennungszeichen: KEINE Fehlermeldung, aber jede Zeile endet
// mit "undefined": ************42undefined
// Die letzte Position ist text.length - 1. text[text.length] gibt
// es nicht.
function maskPassword(text) {
  const hiddenLength = text.length - VISIBLE_CHARS;
  let masked = "";
  for (let i = 0; i < hiddenLength; i++) {
    masked += "*";
  }
  for (let i = hiddenLength; i < text.length; i++) {
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
