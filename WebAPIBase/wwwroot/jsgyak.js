
var fakt = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

window.onload = () => {
    console.log("betöltődött")
    


    var pascalFv = (sor, oszlop) => {
        return fakt(sor) / (fakt(oszlop) * fakt(sor - oszlop))
    }

    for (var sor = 0; sor < 10; sor++) {
        //új div létrehozása az új sornak
        var újDivSor = document.createElement("div");
        //új div osztálylistájához add hozzá a "sor"-t
        újDivSor.classList.add("sor");
        //új div-et add hozzá a "pascal" gyermekeihez
        var pascaldiv = document.getElementById("pascal");
        pascaldiv.appendChild(újDivSor);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            újDivElem = document.createElement("div");
            //új elem div osztálylistájához add hozzá az "elem"-et
            újDivElem.classList.add("elem");
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            újDivElem.innerText = pascalFv(sor, oszlop);
            //legyen az innerHTML a megfelelő szám
            //új elem div-et vedd fel a sor elemei közé
            újDivSor.appendChild(újDivElem);
        }
    }
}





