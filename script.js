//Self Invoked Function to create table using JS

(function () {
    var table = document.createElement('table');
    // table.border = "1";
    table.style.borderCollapse = "collapse";

    //creating Caption
    var caption = document.createElement('caption');
    var cap = document.createTextNode("Student Table");
    caption.appendChild(cap);
    table.appendChild(caption);

    // Inserting headings of the table

    const fields = ["Name", "Age", "DOB", "Email", "Compamy"];

    var thead = document.createElement("thead");
    for (let i = 0; i < 5; i++) {
        let th = document.createElement("th");
        let h = document.createTextNode(fields[i]);
        th.appendChild(h);
        th.style.border = "2px solid black";
        th.style.textAlign = "center";
        thead.append(th);
    }
    table.appendChild(thead)

    //Inserting Body of the Table
    //Creating Array of rows.
    const row1 = ["Prakhar Saraswat", 21, "24/07/2002", "iprakharsaraswat@gmail.com", "Gemini Solutions Pvt Ltd"];
    const row2 = ["Abhishek Bansal", 21, "13/12/2002", "abhishekbansal@gmail.com", "Gemini Solutions Pvt Ltd"];
    const row3 = ["Ananya Tripathi", 21, "01/12/2002", "ananyatripathi@gmail.com", "Gemini Solutions Pvt Ltd"];
   
    const rows = [row1, row2, row3];

    for (let j = 0; j < rows.length; j++) {
        var tbody = document.createElement("tbody");
        for (let i = 0; i < rows[0].length; i++) {
            let td = document.createElement("td");
            let d = document.createTextNode(rows[j][i]);
            td.style.border = "2px solid black"
            td.appendChild(d);
            td.style.padding = '10px';
            td.style.textAlign = "center";
            tbody.append(td);
        }
        table.appendChild(tbody);
    }

    document.body.appendChild(table);

})();