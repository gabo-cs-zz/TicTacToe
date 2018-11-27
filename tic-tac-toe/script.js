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
  var rows_o = [], cols_o = [];
  var rows_x = [], cols_x = [];
  for(let j of i.cells){
    j.addEventListener("click", ()=> {
      if (sw) {
        changeValues(j, "O", "X");
        rows_o.push(i.rowIndex);
        cols_o.push(j.cellIndex);
      } else {
        changeValues(j, "X", "O");
        rows_x.push(i.rowIndex);
        cols_x.push(j.cellIndex);
      }
      if ( winSameLine(rows_o, cols_o) || winSameLine(cols_o, rows_o) ){
        win("O");
      } else if( winSameLine(rows_x, cols_x) || winSameLine(cols_x, rows_x) ){
        win("X");
      } else {
        if (cols_o.length == 5 || cols_x.length == 5) win('T');
      }
      sw = !sw;
      /*console.log(j.innerHTML +' '+i.rowIndex +' '+j.cellIndex );
      console.log(rows_o);
      console.log(cols_o);*/
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

function win(letter){
  if(letter != "X" && letter != "O"){
    setTimeout( ()=> alert("IT'S A TIE."), 150 );
  } else {
    setTimeout( ()=> alert(`${letter} WINS.`), 150 );
    tb.style.pointerEvents = "none";
  }
}

function winSameLine(arr, arr2){
  var cnt = 0, cnt2 = 0, cnt3 = 0;
  var sum = 0, sum2 = 0, sum3 = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 0:
        sum += arr2[i];
        cnt++;
        break;
      case 1:
        sum2 += arr2[i];
        cnt2++;
        break;
      case 2:
        sum3 += arr2[i];
        cnt3++;
        break;
    }
  }
  return ( (sum == 3 && cnt == 3) || (sum2 == 3 && cnt2 == 3)
    || (sum3 == 3 && cnt3 == 3)  );
}
