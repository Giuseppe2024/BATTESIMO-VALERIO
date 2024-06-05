document.addEventListener('DOMContentLoaded', function() {
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

        // Filtra i tavoli in base alla ricerca
        var found = false;
        for (i = 0; i < tables.length; i++) {
            var table = tables[i];
            var tableHeaderText = table.querySelector("h3").textContent.toUpperCase();
            var tableText = table.innerText.toUpperCase(); // Ottieni tutto il testo della tabella
            if (tableText.indexOf(filter) > -1) {
                table.style.display = ""; // Mostra la tabella se trova una corrispondenza
                found = true;
            } else {
                table.style.display = "none"; // Nasconde la tabella se non trova corrispondenza
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

        var countdownInterval = setInterval(function() {
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
                var tables = document.getElementsByClassName("table");
                for (var i = 0; i < tables.length; i++) {
                    tables[i].style.display = ""; // Mostra i tavoli una volta scaduto il countdown
                }
            }
        }, 1000);
    }

    // Event listener per il pulsante di ricerca
    document.querySelector('.search-button').addEventListener('click', searchGuest);

    // Event listener per l'input di ricerca per avviare la ricerca quando si preme invio
    document.getElementById("searchInput").addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            searchGuest();
        }
    });

    // Avvia il countdown al caricamento della pagina
    startCountdown();
});
