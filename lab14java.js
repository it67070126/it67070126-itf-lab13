let count = 0;
var phonenumber = [];

function editName() {
    document.getElementById("profile-name").innerHTML = document.getElementById("name").value
    document.getElementById("name").value = "";
};

function editImage() {
    document.getElementById('profile-img').src = document.getElementById('profile').value
    document.getElementById("profile").value = "";
};

function updateRow() {
    count += 1;
    const row = document.createElement("tr");
    const cellNo = document.createElement("td");
    const cellName = document.createElement("td");
    const cellTel = document.createElement("td");
    cellNo.textContent = count;
    cellName.textContent = document.getElementById("add-name").value;
    cellTel.textContent = document.getElementById("add-tel").value;
    row.appendChild(cellNo);
    row.appendChild(cellName);
    row.appendChild(cellTel);
    const table = document.getElementById("my-table");
    table.appendChild(row);

    let arr = [];
    arr.push(count);
    arr.push(document.getElementById("add-name").value);
    arr.push(document.getElementById("add-tel").value);
    phonenumber.push(arr);
    console.log(phonenumber);

    document.getElementById("add-name").value = "";
    document.getElementById("add-tel").value = "";
};

function saveCSV() {
    const csvContent = phonenumber.map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};