//! Globale Variablen

let note = []; // für Zeilenumbrüche und Notizen

//! Header und Footer in index.html laden

async function includeHTML() {
    let includeElements = document.querySelectorAll("[w3-include-html]");
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = "Page not found";
        }
    }
}

//! Den Text bei den Kategoriensymbolen auf und zu

function toggleMenu() {

    // Es wird nach allen Elementen gesucht, die die Klasse 'menu-icon-text' haben
    let elements = document.querySelectorAll('.menu-icon-text');
    // Es wird eine Schleife erstellt, die jedes Element durchläuft
    elements.forEach((element) => {
        // Es wird nach dem ersten Link-Element innerhalb eines Elements mit der Klasse 'menu-icon-text' gesucht.
        let a = element.querySelector('a');
        if (a.classList.contains('d-none')) {
            a.classList.remove('d-none');
        } else {
            a.classList.add('d-none');
        }
    });
}

//! Inhalt Textarea löschen

function clearTextArea() {
    let clear = document.getElementById('autoresizing');
    clear.value = ''

}

//! Notizen hinzufügen

function addNote() {
    let noteText = document.getElementById('autoresizing').value;
    let noteArray = noteText.split("\n");
    let noteString = noteArray.join("<br>");
    note.push(noteString);

    let myNotes = document.getElementById('mynotes')
    myNotes.innerHTML = '';
    loadNotes()
    for (let i = 0; i < note.length; i++) {
        myNotes.innerHTML += `

<br>
                <label>CATEGORY: OPEN</label>
                <div class="note-box">
                    <div class="notes">
                        <div class="content">${note[i]}</div>
                        <div class="dialog">
                            <div><img src="/davacad_7/notizblock/img/bookmark-regular-not-active.svg" alt="Pin Task">
                            </div>
                            <div><img src="/davacad_7/notizblock/img/pen-to-square-solid.svg" alt="Edit Task">
                            </div>
                            <div><img src="/davacad_7/notizblock/img/circle-down-regular.svg" alt="Archive Note"></div>
                            <div><img src="/davacad_7/notizblock/img/trash-can-regular.svg" alt="Trash Note"></div>

                        </div>

                    </div>

                </div>
                `;
    }
    document.getElementById('autoresizing').value = ''
    saveNotes();
}



//! Notizen speichern

function saveNotes() {
    let newNote = JSON.stringify(note);
    localStorage.setItem('activeNote', newNote)
}

//! Gespeicherte Notizen laden

function loadNotes() {
    let newNote = localStorage.getItem('activeNote')
    if (newNote) {
        note = JSON.parse(newNote)
    }
    return note;
}

//! Notiz löschen

//! Noitzen einer bestimmten Kategory zuordnen

//! Notiz anpinnen

//! Notizen filtern