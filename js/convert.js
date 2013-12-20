//Valutakonverterare

var form = document.querySelector("#converter");

var button = form.querySelector("button");
var p = form.querySelector("p");
var euro = 10;
var dollar =7;

 
  
  

button.onclick = function () {
    var input = form.querySelector("input");
    var currency = form.querySelector("#currency");
    
    if (!isNaN(input.value) && currency.value === "euro" ){
    p.innerHTML +="Det blir " + (input.value/euro).toFixed(2) + " euro.<br>";
    }
    
    else if (!isNaN(input.value) && currency.value === "dollar" ){
    p.innerHTML +="Det blir " + (input.value/dollar).toFixed(2) + " dollar.<br>";
    }
    
    else  {
    p.innerHTML += "skriv in en siffra";   
    
    }
    
};


console.log(window);



/*//funktion för att skriva ut resultat
button.onclick = function () {
   
    input = input.value;
    
  if (isNaN(input) === true){
        console.log("notnumber");
    }
    
    else{
    
    
    }
};

*/