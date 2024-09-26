var button = document.getElementById("button");
var bodyWrapper = document.getElementById("wrapper");

var colors = ["black","white","red","orange","yellow","green","aqua","blue","purple"]
let target = 1;


function changeBackground() { 
    //This runs throught the colors array
    /*if(target===colors.length-1){
        target=0;
    }
    else{
        target++;
    }
    document.body.style.backgroundColor=colors[target];*/

    //this chooses a random color
    document.body.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
}


