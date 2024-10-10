var button = document.getElementById("button");
var bodyWrapper = document.getElementById("wrapper");

//these variables are used for array method
//var colors = ["black","white","red","orange","yellow","green","aqua","blue","purple"]
//let target = 1;

document.body.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255
  },${Math.random() * 255})`;

function changeBackground() {
  //This runs throught the colors array
  //target===colors.length ? target=0 : target++;
  //document.body.style.backgroundColor=colors[target];

  //this chooses a random color
  document.body.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255
    },${Math.random() * 255})`;
}
