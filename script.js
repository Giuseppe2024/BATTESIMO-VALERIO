var countdownDate = new Date("Jun 16, 2024 10:55:00").getTime(); // Imposta la data corretta

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
}
