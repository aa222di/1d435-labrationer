"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {
	
	//Här skapar jag en variabel
	var tal = 10;
	
	//Här returnerar jag värdet på den
	return tal;
	
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {
	
	//Här skapar jag två variablar
	var nummer1 = 2.5;
	var nummer2 = 8;
	//Här skapar jag en variabel för att kunna multiplicera dem
	var resultat = nummer1 * nummer2;
	return resultat;
	
}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna beräkning
function test3(tal1, tal2) {
	
	// Här subraherar jag en variabel från en annan
	var resultat = tal1 - tal2;
	return resultat;
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {
	
	//Här avrundar jag variabeln tal
	tal = Math.round(tal);
	return tal;
}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter. Variablen är av datatypen string
function test5(text) {
	
	//Här tar jag reda på hur många tecken det finns i text-"stringen"
	var length_of_string = text.length;
	return length_of_string;
	
}


/*
* TEST 6
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i parametern text
function test6(text) {
	
	//Här skapar jag en variabel för det näst sista tecknet
	var selected_char = text.charAt(text.length -2);
	return selected_char;
	
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {
	
	//Här slår jag ihop två olika textsträngar
	var fullname = surname + ", " + firstname;
	return fullname;
	
}


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {
	
	
	//Oj den här var svår. Vi börjar med att hitta var andra ordet börjar
	var first_space = words.indexOf(' ');
	// Sedan var andra ordet slutar, i detta fall har vi ju fått veta att hela strängen enbart innhåller två ord. Hade den innehållit fler hade deta blivit betydligt mycket svårare
	var last_char = words.length
	//Nu använder vi substr för att isolera det sista ordet. Dock får vi lägg till ett tecken på first_space för att ordet ska börja på en bokstav och inte ett mellanslag. Detta hade man givetvis kunnat fixa till redan vid deklarationen, men pga av namnvalet på variabeln tyckte jag det var tydligare att göra såhär :)
	var second_word = words.substring(first_space+1,last_char);
	//Sedan kollar vi hur vi ligger till (hittar inte min console.log så jag får jobba med alert)
   // alert(second_word);
    //Det såg ju bra ut :) Vi provar att returnera 
    return second_word;
    
	
}

/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras


function test9(number) {
	//skapar en if-sats som kolla om number är större eller lika med 100
	if (number>=100) {
	return true;

	}
	//skapar en else sats för att tala om vad som ska hända annars
    else {
    return false;
    }
}


/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan funktionen indexOf användas 
//(se länktips i handledningen)


function test10(epost, namn) {
	
	//Om epost inte innehåller något eller namn inte innehåller något 
	
	if (epost === "" || namn === "") {
	return "Du har glömt att ange namn eller e-post";
	}
	
	//Om indexOf @ är lika med -1 innebär det att det inte existerar
	
	if (epost.indexOf('@') === -1) {
    return "Ange en e-postadress";	  
	}
	
	//Annars är det bara att skicka meddelandet
	return "Ditt meddelande skickas";
}

/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {
    //dela längden med två
	var mitt = arr.length / 2;
	//Runda av om subtrahera med 1 för att räkningen ska fungera eftersom den börjar på 0
	mitt = Math.round(mitt) - 1;
	
	//eturnerar
	return arr[mitt];
	
}


/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {
    
    //här sötte jag på mycket problem eftersom jag först inte insåg viktien av att banta ner innehåller i loopen. Hade bl a lagt in variabeldeklarationer i loopen
    //vilket skapade mycket problem för mig innan jag insåg avd jag höll på med.
    //Här har vi alltså alla varibler som skja deklareras
    var arr_length = arr.length;
    var summan = 0;
    var medel = 0;
    //Här initierar vi loopen
    for (var i = 0; i < arr_length; i++){
       //Summan ska öka med de utvelda arrayvärdet varje gång
        summan += arr[i];
       
       }
       
       //Medelvärdet är summan delat på antalet "boxar" i arrayen
     medel = summan / arr.length;
    //alert(summan);
    //alert(medel);
    return medel;
    
}






















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}

