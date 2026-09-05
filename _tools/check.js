// ============================================================
//  check.js – die Selbstkontrolle für die Übungen
// ------------------------------------------------------------
//  Du musst diese Datei nicht verstehen, um sie zu benutzen.
//  Ab Tag 4 kannst du sie lesen – dann kennst du alles darin.
//
//  Benutzung in deiner Übungsdatei:
//
//      check("double(4) ergibt 8", double(4), 8);
//      checkThat("Die Liste ist leer", ingredients.length === 0);
//
//  So startest du die Prüfung:
//
//    Tag 1–4, im Terminal:   node run-checks.js
//    Ab Tag 5, im Browser:   beide Dateien per <script> einbinden,
//                            check.js zuerst
//
//  Im Terminal erscheint eine Liste mit ✅ und ❌, im Browser
//  zusätzlich dieselbe Liste auf der Seite.
// ============================================================

const _results = [];

// Läuft dieser Code im Browser oder in Node?
const _inBrowser = typeof document !== "undefined";

function _equals(a, b) {
  // Reicht für alles, was im Kurs vorkommt: Zahlen, Texte,
  // Wahrheitswerte, Listen und einfache Objekte.
  return JSON.stringify(a) === JSON.stringify(b);
}

function _format(value) {
  if (typeof value === "string") return `"${value}"`;
  if (value === undefined) return "undefined";
  return JSON.stringify(value);
}

function check(description, actual, expected) {
  const passed = _equals(actual, expected);
  _results.push({ description, passed, actual, expected });

  if (passed) {
    console.log(`✅ ${description}`);
  } else {
    console.log(
      `❌ ${description}\n   erwartet: ${_format(expected)}\n   war aber: ${_format(actual)}`
    );
  }

  if (_inBrowser) _render();
  else _scheduleSummary();
}

function checkThat(description, condition) {
  check(description, Boolean(condition), true);
}

// ------------------------------------------------------------
//  Ausgabe im Terminal (Tag 1–4)
// ------------------------------------------------------------
let _summaryScheduled = false;

function _scheduleSummary() {
  // Wartet, bis alle Prüfungen durchgelaufen sind, und schreibt
  // dann eine einzige Schlusszeile.
  if (_summaryScheduled) return;
  _summaryScheduled = true;

  process.on("exit", () => {
    const passed = _results.filter((result) => result.passed).length;
    const total = _results.length;
    console.log("");
    console.log(`Selbstkontrolle: ${passed} von ${total} bestanden.`);
  });
}

// ------------------------------------------------------------
//  Ausgabe auf der Seite (ab Tag 5, im Browser)
// ------------------------------------------------------------
function _render() {
  let box = document.querySelector("#check-results");
  if (!box) {
    box = document.createElement("section");
    box.id = "check-results";
    document.body.append(box);
  }

  const passed = _results.filter((result) => result.passed).length;
  const total = _results.length;

  box.innerHTML = `<h2>Selbstkontrolle: ${passed} von ${total}</h2>`;

  const list = document.createElement("ul");
  for (const result of _results) {
    const row = document.createElement("li");
    row.className = result.passed ? "ok" : "failed";
    row.textContent = `${result.passed ? "✅" : "❌"} ${result.description}`;
    if (!result.passed) {
      const detail = document.createElement("div");
      detail.className = "detail";
      detail.textContent = `erwartet: ${_format(result.expected)} — war aber: ${_format(result.actual)}`;
      row.append(detail);
    }
    list.append(row);
  }
  box.append(list);
}

// ------------------------------------------------------------
//  Damit die beiden Befehle überall bekannt sind – im Browser
//  wie in Node, ohne dass du etwas importieren musst.
// ------------------------------------------------------------
globalThis.check = check;
globalThis.checkThat = checkThat;
