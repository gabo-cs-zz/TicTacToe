// Coding the JS
var sw;
var plyr = document.getElementById("playerNumber");
var btnO = document.getElementById("O");
var btnX = document.getElementById("X");
var tb = document.getElementById("board");
const ROWS = tb.rows;
btnX.addEventListener("click", ()=> actionate(false, "X"));
btnO.addEventListener("click", ()=> actionate(true, "O"));

function actionate(val, letter){
  btnO.disabled = true;
  btnO.classList.remove("fx");
  btnX.disabled = true;
  btnX.classList.remove("fx");
}
