// ============================================================
// Übung 3.2 - Typische Schleifen
// ------------------------------------------------------------
// Ausführen:  node day_03/exercise-3-2.js
// ============================================================

// 1. Akkumulation
//    Schreibe countChar(text, char), die zählt, wie oft char in text
//    vorkommt.
//
//      countChar("Bananenbrot", "n")   →  3
//      countChar("Bananenbrot", "x")   →  0
 function countChar(text, char) { 
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countChar("hamid khadir", "h")); 


// 2. Suche
//    Schreibe findFirstSpace(text), die die Position des ersten
//    Leerzeichens zurückgibt - oder -1, wenn es keins gibt.
//    Benutze dafür eine Schleife, nicht indexOf.
//
//      findFirstSpace("Chili sin Carne")   →  5
//      findFirstSpace("Pfannkuchen")       →  -1

 function findFirstSpace(text){
    for (let i=0;i<text.length;i++)
        if (text[i]=== " ") return i
        else if (i===text.length-1) return -1



        }


console.log(findFirstSpace("Chili sin Carne"));
console.log(findFirstSpace("Pfannkuchen"));

    //#endregion}
// 3. Transformation
//    Schreibe initials(name), die die Anfangsbuchstaben aller Wörter
//    zurückgibt.
//
//      initials("Anna Lena Meyer")   →  "ALM"
//      initials("Tom")               →  "T"
//
//    Tipp: Ein Anfangsbuchstabe ist das erste Zeichen - oder ein
//          Zeichen, vor dem ein Leerzeichen steht.
function initials(name){
    let result = "";
    for (let i=0;i<name.length;i++){
        if (i===0 || name[i-1]===" "){
            result += name[i];
        }
    }
    return result;
}
 console.log(initials("Anna Lena Meyer"));
 console.log(initials("Tom"));


// ------------------------------------------------------------
// Ausbau A: Schreibe reverse(text):  reverse("Brot")  →  "torB"
//
// Ausbau B: Schreibe isPalindrome(text), die prüft, ob ein Wort
//           vorwärts und rückwärts gleich ist - ohne Rücksicht auf
//           Groß- und Kleinschreibung.
//
//             isPalindrome("Rentner")   →  true
//             isPalindrome("Lasagne")   →  false
// ------------------------------------------------------------
