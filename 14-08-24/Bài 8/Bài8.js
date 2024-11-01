var table = document.createElement("table");
table.style.borderCollapse = "collapse";

for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 3; j++) {
        var cell = document.createElement("td");

        cell.textContent = "Row " + (i + 1) + ", Column " + (j + 1);
        
        cell.style.border = "1px solid black";
        cell.style.padding = "8px";

        row.appendChild(cell);
    }

    table.appendChild(row);
}

var container = document.getElementById("table-container");
container.appendChild(table);