function searchGuest() {
    console.log("searchGuest() function called"); // Aggiunta per il debug
    var input, filter, tables, i, j, txtValue;
    input = document.getElementById("searchInput");
    console.log("Input value:", input.value); // Aggiunta per il debug
    filter = input.value.toUpperCase();
    tables = document.getElementsByClassName("table");
    console.log("Number of tables:", tables.length); // Aggiunta per il debug

    for (i = 0; i < tables.length; i++) {
        var table = tables[i];
        var tableHeaderText = table.querySelector("h3").textContent.toUpperCase();
        var tableRows = table.querySelectorAll("h3 ~ h3");
        var found = false;
        for (j = 0; j < tableRows.length; j++) {
            txtValue = tableRows[j].textContent || tableRows[j].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }
        if (found || tableHeaderText.indexOf(filter) > -1) {
            table.style.display = "";
        } else {
            table.style.display = "none";
        }
    }
}
