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

    // Mostra tutti i tavoli se la ricerca è vuota
    if (filter === "") {
        for (i = 0; i < tables.length; i++) {
            tables[i].style.display = "";
        }
        return;
    }

    var found = false;
    for (i = 0; i < tables.length; i++) {
        var table = tables[i];
        var tableHeaderText = table.querySelector("h3").textContent.toUpperCase();
        var tableRows = table.querySelectorAll("h3 ~ h3");
        // Controlla il testo nei nomi delle persone e nei nomi dei tavoli
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
