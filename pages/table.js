var flowertable = {
rows: prompt("Hur många blommor vill du ha?"),
cols: prompt("Förlåt vad sa du?"),

    createTd: function (){

    var td = document.createElement("td");
    var img = document.createElement("img");

    img.setAttribute("src", "../css/pics/flower.png");


    td.appendChild(img);

    return td;

    },

    createTable: function(){
    
    
    var table = document.createElement("table");
    
    for(var i = 0; i < flowertable.rows; i+=1){
       
       var tr= document.createElement("tr");
       
            for(var j = 0; j < flowertable.cols; j+=1 ){
                
                tr.appendChild(flowertable.createTd());
            }
     table.appendChild(tr);
     
    }
    document.getElementById("flowers").appendChild(table);

}


};

window.onload = flowertable.createTable;