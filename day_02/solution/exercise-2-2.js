// ============================================================
// Übung 2.2 - Lösung
// ============================================================

// 1. describeDuration
function describeDuration(minutes) {
  if (minutes < 20) {
    return "schnell";
  } else if (minutes <= 45) {
    return "normal";
  } else {
    return "aufwendig";
  }
}

console.log(describeDuration(10));   // schnell
console.log(describeDuration(20));   // normal  - 20 ist nicht < 20
console.log(describeDuration(45));   // normal  - 45 ist <= 45
console.log(describeDuration(90));   // aufwendig


// 2. servingsLabel
function servingsLabel(servings) {
  if (servings === 1) {
    return "1 Portion";
  } else {
    return `${servings} Portionen`;
  }
}

console.log(servingsLabel(1));   // 1 Portion
console.log(servingsLabel(4));   // 4 Portionen


// ------------------------------------------------------------
// 3. Truthy oder falsy?
// ------------------------------------------------------------
function checkTruthy(value) {
  if (value) {
    console.log(`[${value}] (${typeof value}) ist truthy`);
  } else {
    console.log(`[${value}] (${typeof value}) ist falsy`);
  }
}

checkTruthy("Lasagne");   // truthy
checkTruthy("");          // falsy  - leerer Text
checkTruthy(" ");         // truthy - ein Leerzeichen ist ein Zeichen!
checkTruthy(0);           // falsy
checkTruthy("0");         // truthy - Text mit einem Zeichen, keine Zahl
checkTruthy("false");     // truthy - Text, kein Boolean
checkTruthy(null);        // falsy
checkTruthy(undefined);   // falsy

// Die Überraschungen sind " ", "0" und "false": Es zählt nicht,
// wie der Text AUSSIEHT, sondern nur, ob er leer ist.


// ------------------------------------------------------------
// Ausbau
// ------------------------------------------------------------
function isQuickVegetarian(minutes, isVegetarian) {
  return isVegetarian && minutes <= 20;
}

console.log(isQuickVegetarian(15, true));    // true
console.log(isQuickVegetarian(15, false));   // false
console.log(isQuickVegetarian(30, true));    // false

// Kein if nötig: Der Vergleich ergibt schon true oder false.
