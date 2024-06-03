function searchGuest() {
    console.log("searchGuest() function called"); // Aggiunta per il debug
    var input, filter, tables, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    console.log("Input value:", input.value); // Aggiunta per il debug
    filter = input.value.toUpperCase();
    tables = document.getElementsByClassName("table");
    console.log("Number of tables:", tables.length); // Aggiunta per il debug

    for (i = 0; i < tables.length; i++) {
      table = tables[i];
      tr = table.getElementsByTagName("h3")[0];
      console.log("Table header text:", tr.textContent); // Aggiunta per il debug
      if (tr) {
        txtValue = tr.textContent || tr.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          table.style.display = "";
        } else {
          table.style.display = "none";
        }
      }       
    }
}
