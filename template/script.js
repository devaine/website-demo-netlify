const body = document.body;

function changeBackround() {
  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;

  // body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  body.style.background = "rgb(255,0,255)";
}
