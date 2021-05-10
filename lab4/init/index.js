const {ipcRenderer} = require('electron');
const mssql = require('mssql');
let readedDiscounts;
const CONFIG = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            domain: 'DESKTOP-VK2FKM1',
            userName: 'user1',
            password: '123456789'
        }
    },
    options: {
        database: 'plane',
        domain: 'DESKTOP-VK2FKM1',
        encrypt: false,
        trustServerCertificate: false,
        rowCollectionOnDone: true
    }
}

function LoadDataFromDb() {
    mssql.connect(CONFIG, function () {
        let appendToTable = document.getElementById("bodyTable");
        appendToTable.innerHTML = "";
        let requset = new mssql.Request();
        requset.query("select * from plane.dbo.Discount", function (err, recodrsSet) {
            console.log(err);
            var res = JSON.stringify(recodrsSet);
            readedDiscounts = recodrsSet.recordset;
            recodrsSet.recordset.forEach((val) => {
                let tr = document.createElement("tr");
                this.setElem = val;
                tr.addEventListener('click', onClickTD.bind(null, val));

                for (const [key, value] of Object.entries(val)) {

                    let td = document.createElement("td");
                    td.innerText = value;
                    tr.appendChild(td);
                }
                appendToTable.appendChild(tr);
            });

        });
    });
}

function onClickTD(val, evt) {
    console.log(val);
    var elem = document.getElementById('UpdateBut');
    elem.replaceWith(elem.cloneNode(true));
    var elem = document.getElementById('DelButton');
    elem.replaceWith(elem.cloneNode(true));
    document.getElementById("UpdateBut").addEventListener('click', onClickUpdate.bind(null, val));
    document.getElementById("DelButton").addEventListener('click', OnClickDelete.bind(null, val));

    document.getElementById('DiscNameVal').value = val.DiscountName;
    document.getElementById('DiscVal').value = val.Discount;
    document.getElementById('IDVal').value = val.ID;
}

function OnClickDelete(val, evt) {
    var elem = document.getElementById('IDVal');
    const f = () => {
        mssql.connect(CONFIG, function () {
            let requset = new mssql.Request();

            console.log("DELETE plane.dbo.Discount Where ID =" + elem.value.toString());

            requset.query("DELETE plane.dbo.Discount Where ID =" + elem.value.toString(), function (err) {
                console.log(err);

            });
        });
    }
    f();

}


function onClickUpdate(val, evt) {
    var elem = document.getElementById('IDVal');
    console.log(elem.value.toString());
    if (readedDiscounts.find(value => {
        return parseInt(value.ID) === parseInt(elem.value);
    })) {
        console.log("finded");
        const f = () => {
            mssql.connect(CONFIG, function () {
                let requset = new mssql.Request();


                requset.query("UPDATE plane.dbo.Discount " +
                    "SET DiscountName=\'" + document.getElementById('DiscNameVal').value.toString() + "\' ,Discount=\'" + document.getElementById('DiscVal').value.toString() +
                    "\' Where ID =" + elem.value.toString(), function (err) {
                    console.log(err);

                });
            });
        }
        f();


    } else {
        const ff = () => {
            mssql.connect(CONFIG, function () {
                let requset = new mssql.Request();
                requset.query("INSERT INTO plane.dbo.Discount (DiscountName,Discount) VALUES (\'" +
                    document.getElementById('DiscNameVal').value.toString() + "\',\'" +
                    document.getElementById('DiscVal').value.toString() + "\') "
                    , function (err) {
                        console.log(err);

                    });
            });
        }
        ff();
    }
    LoadDataFromDb();
}


window.onload = function () {
    document.getElementById('BODYMain').addEventListener('load', LoadDataFromDb);

}

