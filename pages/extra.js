/** EXTRAUPPGIFTER **/

// Du får en array som parameter
// Din uppgift blir att vända på arrayen och returnera den
//[1, 2, 3] ska bli [3, 2, 1]
// ["hej", 2, "då"] ska bli ["då", 2, "hej"]
function test_extra_1(arr) {
	
	// Din kod här
	
}

// Du får en textsträng som parameter som innehåller tre ord med mellanslag mellan
// returnera det mittersta av dessa ord
function test_extra_2(words) {
	
	// Din kod här
}



// Skriv klart funktionen drawTable som ritar ut en tabell i sidan
// Man kan skriva ut text till html-koden genom att använda document.write 
// funktionen anropas tre gånger från HTML-sidan extra.html
// variablen rows innehåller antalet rader tabellen ska ha
// variablen cols innehåller antalet kolumner tabellen ska ha
// För att lösa denna uppgift kan du behöva nästla två for-loopar dvs. lägga en for-loop i en annan
function drawTable(rows, cols) {
	document.write("<table border='1'>");
	
	// Din kod här
	
	document.write("</table>");
}





















/**
Kod för testning. Koden här under får du INTE röra!!
*/

// attach the .compare method to Array's prototype to call it on any array
Array.prototype.compare = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].compare(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
if( test_extra_1(new Array(1, 2, 3)).compare(new Array(3, 2, 1))
&& test_extra_1(new Array("hej", 256, "då", 3)).compare(new Array(3, "då", 256, "hej"))

) {doIt("test_1")}

if( test_extra_2("hej på dig") === "på" && test_extra_2("Bra jobbat nu") === "jobbat") {doIt("test_2")}
function doIt(element_name) {
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}

