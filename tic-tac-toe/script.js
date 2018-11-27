// Coding the JS
var sw; // sw = O, !sw = X.
var plyr = document.getElementById("playerNumber");
var btnO = document.getElementById("O");
var btnX = document.getElementById("X");
var tb = document.getElementById("board");
const ROWS = tb.rows;
btnX.addEventListener("click", ()=> actionate(false, "X"));
btnO.addEventListener("click", ()=> actionate(true, "O"));

for(let i of ROWS){
  for(let j of i.cells){
    j.addEventListener("click", ()=> {
      if (sw) {
        changeValues(j, "O", "X");
      } else {
        changeValues(j, "X", "O");
      }
      sw = !sw;
    });
  }
}

function actionate(val, letter){
  btnO.disabled = true;
  btnO.classList.remove("fx");
  btnX.disabled = true;
  btnX.classList.remove("fx");
  sw = val;
  plyr.innerHTML = letter;
  tb.style.pointerEvents = "auto";
}

function changeValues(elem, str1, str2){
  elem.innerHTML = str1;
  elem.style.pointerEvents = "none";
  plyr.innerHTML = str2;
}
