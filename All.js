function Add_on(){
    var uname = document.getElementById('username').value;
    var Phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var tempArr = [uname,Phone,email];
    const table1 = document.querySelector('table');
    const row = document.createElement("tr");
    table1.appendChild(row);
    for (let i = 0; i < 3; i++) {
        var col = document.createElement("td");
        row.appendChild(col);
        const texter = document.createTextNode(tempArr[i]);
        col.appendChild(texter);
    }
}

