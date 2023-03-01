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

function toggleMenu() {

    let toogle = document.getElementById('menu-icons').classList

    if (toogle == 'expanded') {

        document.getElementById('menu-icons').innerHTML = `
        
                <div class="menu-icon-text m-small">
                    <img src="img/lightbulb-regular.svg" alt="Show Notes">
                </div>
                <div class="menu-icon-text m-small">
                    <img src="img/circle-down-regular.svg" alt="Remove to archive">
                </div>
                <div class="menu-icon-text m-small">
                    <img src="img/trash-can-regular.svg" alt="Remove to trash">
                </div>
        
        `
        document.getElementById('menu-icons').classList.remove('expanded')
        document.getElementById('menu-icons').classList.add('not-expanded')
        // Der Reload wir ausgeführt weil nach dem Togglen das Marieren der aktiven Kategorie nicht mehr funktioniert.
        window.location.reload()

    } else {

        inputNewValues()
        saveStateMenu()
        markActiveCategory()

    }

}

function inputNewValues() {

    document.getElementById('menu-icons').innerHTML = `
        
                <div class="menu-icon-text">
                    <a href="#index"><img src="img/lightbulb-regular.svg" alt="Show Notes">Notes</a>

                </div>
                <div class="menu-icon-text">
                    <a href="#archive"><img src="img/circle-down-regular.svg" alt="Remove to archive">Archive</a>
                </div>
                <div class="menu-icon-text">
                    <a href="#trash"><img src="img/trash-can-regular.svg" alt="Remove to trash">Trash</a>
                </div>
    
    `
    document.getElementById('menu-icons').classList.add('expanded')
    document.getElementById('menu-icons').classList.remove('not-expanded')
}



function saveStateMenu() {

    // Save new entry in "menu-icons"

    let saveState = document.getElementById('menu-icons').innerHTML
    localStorage.setItem('showMenu', saveState)

}

function markActiveCategory() {

    // Verstehe ich nicht

    let icons = document.getElementById("menu-icons");
    let icon = icons.getElementsByClassName("menu-icon-text");

    for (let i = 0; i < icon.length; i++) {
        icon[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }

}












