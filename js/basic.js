//Väljer ut tabell

var table = document.querySelector("table");
table.classList.add("hide");

//Tabellgömmarfunktion
var hide = function(){
    table.classList.toggle("hide");
};

//Tabell-gömmar-knapp
var resultsbutton = document.querySelector("#menylabb li:last-child a");
resultsbutton.onclick = hide;




