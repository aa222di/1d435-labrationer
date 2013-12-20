//Array till bilder

var stopp = document.querySelector("#stopp");

var next = document.querySelector("#next");

var prev = document.querySelector("#prev");

var kittenarr =["http://2.bp.blogspot.com/_oFDQgW3nuwI/TTdDnh2KbZI/AAAAAAAADD8/OzapVs-4iVU/s400/Wallpaper-of-Persian_Cat.jpg", "http://static1.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg", "http://www.catsofaustralia.com/images/persian-cat-pics.jpg"];

var catsimg = document.querySelector("#cats");

var interval = setInterval(changeImage, 1000);

var counter = 1;

//funktion som byter bild

function changeImage(){
    
    catsimg.setAttribute("src", kittenarr[counter]);
    counter += 1;
    
    if(counter > 2){
        counter = 0;
      }
      
     
}

// Funktion som specificerar vad som ska hända vid klick

function changeImageOnclick(button){   
    //Stoppa först intervallet så att inte bilder fortsätter bytas runt när vi vill växla manuellt
    clearInterval(interval);
    
    //Om man klickar på prev button så ska vi växla bak en bild och hamnar vi på noll ska vi gå till 2
    if(button.value === "prev"){
        if(counter === 0){
            counter = 2;
        }
        else{
            counter -= 1;
        }
    }
    
    //På next button ska vi plussa på counter med ett eller om vi hamnar på två börja om från nopll
    else{
        if(counter === 2)
        {
            counter = 0;
        }
        else{
            counter += 1;
        }
    }
    
    //och precis som i changeImage ska bilden bytas ut beroende på vad counter står på
    catsimg.setAttribute("src", kittenarr[counter]);

}

//Här lärde jag mig lite nytt om this, även om jag fortfarande känner att denna funktionen inte riktigt är lätt att förstå sig på
//Satte en klass på stopp för att kunna pausa och starta genom att "toggla"
stopp.onclick = function(){
    this.classList.toggle("paus");
    
    if(this.className === "paus"){
    clearInterval(interval);
    }
    else{
        interval = setInterval(changeImage, 1000);
    }
};

//när vi klickar på next ska den starta funktionen changeImageOnclick och skicka med att det gäller just denna knappen via this
next.onclick = function(){
  
  changeImageOnclick(this); 
    
};

//Likadant gäller för prev
prev.onclick = function(){
    changeImageOnclick(this);
};
    
    
    

