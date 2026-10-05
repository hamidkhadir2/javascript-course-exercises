// ============================================================
// Übung 3.2 - Lösung
// ============================================================

// 1. Akkumulation
function countChar(text, char) {
  let count = 0;                     // Startwert VOR der Schleife
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      count++;
    }
  }
  return count;                      // Ergebnis NACH der Schleife
}

console.log(countChar("Bananenbrot", "n"));   // 3
console.log(countChar("Bananenbrot", "x"));   // 0


// 2. Suche
function findFirstSpace(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      return i;                      // gefunden → sofort raus
    }
  }
  return -1;                         // erst nach ALLEN Zeichen: nichts da
}

console.log(findFirstSpace("Chili sin Carne"));   // 5
console.log(findFirstSpace("Pfannkuchen"));       // -1


// 3. Transformation
function initials(name) {
  let result = "";
  for (let i = 0; i < name.length; i++) {
    const isWordStart = i === 0 || name[i - 1] === " ";
    if (isWordStart) {
      result += name[i];
    }
  }
  return result;
}

console.log(initials("Anna Lena Meyer"));   // ALM
console.log(initials("Tom"));               // T


// ------------------------------------------------------------
// Ausbau A - reverse
// ------------------------------------------------------------
// Rückwärts zählen: Start bei der letzten Position (length - 1),
// Ende bei 0 - deshalb >= 0.
function reverse(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
}

console.log(reverse("Brot"));   // torB


// ------------------------------------------------------------
// Ausbau B - isPalindrome
// ------------------------------------------------------------
function isPalindrome(text) {
  const lower = text.toLowerCase();
  return lower === reverse(lower);
}

console.log(isPalindrome("Rentner"));   // true
console.log(isPalindrome("Lasagne"));   // false
