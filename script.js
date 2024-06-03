document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
});
<script>
    function searchGuest() {
        var input, filter, tables, table, guests, i, txtValue;
        input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        tables = document.querySelectorAll('.table');
        
        for (i = 0; i < tables.length; i++) {
            table = tables[i];
            guests = table.querySelector('h3');
            txtValue = guests.textContent || guests.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                table.style.display = "";
            } else {
                table.style.display = "none";
            }
        }
    }
</script>

