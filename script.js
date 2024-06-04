// Variabili per il countdown
var countdownActive = false;
var countdownInterval;

function searchGuest() {
    console.log("searchGuest() function called"); // Aggiunta per il debug
    var input, filter, tables, i, j, txtValue;
    input = document.getElementById("searchInput");
    console.log("Input value:", input.value); // Aggiunta per il debug
    filter = input.value.trim().toUpperCase();
    tables = document.getElementsByClassName("table");
    console.log("Number of tables:", tables.length); // Aggiunta per il debug

    // Nasconde il messaggio di errore se è già visualizzato
    var errorMessage = document.getElementById("errorMessage");
    if (errorMessage) {
        errorMessage.style.display = "none";
    }

    // Gestione del countdown
    if (filter === "FUTURO") {
        if (!countdownActive) {
            startCountdown();
            countdownActive = true;
        }
        return;
    } else if (filter === "PASSATO") {
        clearInterval(countdownInterval);
        countdownActive = false;
        hideTables(false);
        return;
    }

    // Mostra tutti i tavoli se la ricerca è vuota o il countdown non è attivo
    if (filter === "" || !countdownActive) {
        hideTables(false);
        return;
    }

    // Filtra i tavoli in base alla ricerca
    var found = false;
    for (i = 0; i < tables.length; i++) {
        var table = tables[i];
        var tableHeaderText = table.querySelector("h3").textContent.toUpperCase();
        var tableRows = table.querySelectorAll("h3 ~ h3");
        for (j = 0; j < tableRows.length; j++) {
            txtValue = tableRows[j].textContent || tableRows[j].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                table.style.display = "";
                found = true;
                break;
            }
        }
        if (tableHeaderText.indexOf(filter) > -1) {
            table.style.display = "";
            found = true;
        } else {
            table.style.display = "none";
        }
    }

    // Mostra il messaggio di errore se nessuna corrispondenza è stata trovata
    if (!found) {
        if (!errorMessage) {
            errorMessage = document.createElement("div");
            errorMessage.id = "errorMessage";
            errorMessage.textContent = "Non ho trovato il tuo nome tra gli invitati. Ti sei imbucato? Ho appena tracciato il tuo IP, adesso avviserò le autorità competenti!";
            errorMessage.style.color = "red";
            document.body.appendChild(errorMessage);
        } else {
            errorMessage.style.display = "";
        }
    }
}

// Funzione per avviare il countdown
function startCountdown() {
    var countdownDate = new Date("Jun 16, 2024 10:55:00").getTime(); // Imposta la data corretta

    countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = "Countdown: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "L'EVENTO È INIZIATO";
            hideTables(false); // Mostra i tavoli una volta scaduto il countdown
        }
    }, 1000);
}

// Funzione per nascondere o mostrare i tavoli
function hideTables(hide) {
    var tables = document.getElementsByClassName("table");
    for (var i = 0; i < tables.length; i++) {
        tables[i].style.display = hide ? "none" : "";
    }

    // Definisci le caratteristiche della console
    var consoleStyle = "color: blue; font-size: 16px;";

    // Utilizza la console per visualizzare i messaggi di debug
    console.log("%cQuesto è un messaggio di debug", consoleStyle);
}
