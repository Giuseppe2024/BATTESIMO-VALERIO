function searchGuest() {
    console.log("searchGuest() function called"); // Aggiunta per il debug
    var input, filter, tables, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    tables = document.getElementsByClassName("table");
  
    for (i = 0; i < tables.length; i++) {
      table = tables[i];
      tr = table.getElementsByTagName("h3")[0];
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
