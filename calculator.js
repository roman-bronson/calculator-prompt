document.write(`
        <div class="calc_body">
        <table id="computational-table">
            <thead>
                <th>x</th>
                <th>op</th>
                <th>y</th>
                <th>Result</th>
            </thead>
            <tbody>
            </tbody>
        </table>
        <table id="summary-table">
            <thead>
                <th>Min</th>
                <th>Max</th>
                <th>Average</th>
                <th>Total</th>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>`)

while (true) {
    let x = prompt("First Number (Ex. 1 or 2)");
    if (x === null) break;

    var operations = ["+", "-", "/", "*", "%"];
    let op = prompt("Arithmetic Operator (Ex. + or - or /)");
    if (op === null) break;

    let y = prompt("Second Number (Ex. 1 or 2)");
    if (y === null) break;

    let results;
    if (isNaN(x) || isNaN(y) || x === "" || y === "") results = "wrong input number";
    else if (!operations.includes(op)) results = "computational error";
    else {
        if (op === "+") results = Number(x) + Number(y);
        else if (op === "-") results = Number(x) - Number(y);
        else if (op === "/") {
            if (Number(y) === 0) results = "can't divide by 0";
            else {
                results = Number(x) % Number(y);
                results = parseFloat(results).toFixed(2);
            }
        }
        else if (op === "*") results = Number(x) * Number(y);
        else results = Number(x) % Number(y)
    }

    console.log(results)
    let tbody = document.querySelector("#computational-table tbody");
    tbody.innerHTML += `<tr><td>${x}</td><td>${op}</td><td>${y}</td><td>${results}</td></tr>`;
}

let cells = document.querySelectorAll("#computational-table tbody tr td:nth-child(4)");
let nums = Array.from(cells).map(cell => Number(cell.textContent)).filter(val => !isNaN(val));
let max = Math.max(...nums);
let min = Math.min(...nums);
let sumOfNums = nums.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
let avg = parseFloat(sumOfNums/nums.length).toFixed(2);

let tbody = document.querySelector("#summary-table tbody")
tbody.innerHTML += `<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${sumOfNums}</td></tr>`