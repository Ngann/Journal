export function grid(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";
    var i = 0;
    var k = 0;
    for (i=0; i<9; i+=1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;

        for (k=0; k<9; k+=1) {
            var box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    el.appendChild(container);
}
