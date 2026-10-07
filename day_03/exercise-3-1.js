// ============================================================
// Übung 3.1 - for und while
// ------------------------------------------------------------
// Ausführen:  node day_03/exercise-3-1.js
// ============================================================

// 1. Gib mit einer for-Schleife die Zahlen 1 bis 10 aus.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Gib eine Mehl-Tabelle für 1 bis 8 Portionen aus.
//    Pro Portion braucht man 125 g Mehl.
//
//      1 × 125 g = 125 g Mehl
//      2 × 125 g = 250 g Mehl
//      ...
//      8 × 125 g = 1000 g Mehl
//
//    Lege die 125 als Konstante an, nicht als Zahl mitten im Code.
for (let portion = 1; portion <= 8; portion++) {
  const flourPerPortion = 125;
  const totalFlour = portion * flourPerPortion;
  console.log(`${portion} × ${flourPerPortion} g = ${totalFlour} g Mehl`);
}


// 3. Schreibe mit einer while-Schleife einen Küchentimer:
//
//      Noch 5 Minuten
//      Noch 4 Minuten
//      Noch 3 Minuten
//      Noch 2 Minuten
//      Noch 1 Minute
//      Fertig!
//
//    Achtung: "1 Minute", nicht "1 Minuten".


  let minutesLeft = 5; 
    while (minutesLeft > 0) {
        if (minutesLeft === 1) {    
            console.log("Noch 1 Minute");
        } else {
            console.log(`Noch ${minutesLeft} Minuten`);
        }
        minutesLeft--;
    }
    console.log("Fertig!");


// ------------------------------------------------------------
// Ausbau: Ein Sparschwein startet mit 0 Euro. Jede Woche kommen
//         7,50 Euro dazu. Nach wie vielen Wochen sind mindestens
//         100 Euro drin? Gib die Woche und den Betrag aus.
//
//         Welche Schleife passt hier besser - for oder while?
//         Begründe in einem Kommentar.
// ------------------------------------------------------------

let weeks = 0;
let savings = 0;
while (savings < 100) {
  weeks++;
  savings += 7.50;
  console.log(`Woche ${weeks}: ${savings.toFixed(2)} Euro`);
}