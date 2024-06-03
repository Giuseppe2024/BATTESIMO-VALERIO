function searchGuest() {
    // Otteniamo il valore inserito nell'input di ricerca
    var input = document.getElementById("searchInput").value.toUpperCase();

    // Otteniamo tutti gli elementi della classe "table"
    var tables = document.getElementsByClassName("table");

    // Iteriamo su ciascun elemento con classe "table"
    for (var i = 0; i < tables.length; i++) {
        // Otteniamo il testo all'interno del primo elemento <h3> in ogni tavolo
        var header = tables[i].getElementsByTagName("h3")[0];
        if (header) {
            var txtValue = header.textContent || header.innerText;
            // Confrontiamo il testo con il valore di ricerca
            if (txtValue.toUpperCase().indexOf(input) > -1) {
                // Se troviamo una corrispondenza, mostriamo il tavolo
                tables[i].style.display = "";
            } else {
                // Altrimenti nascondiamo il tavolo
                tables[i].style.display = "none";
            }
        }
    }
}
