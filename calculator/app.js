
function press(value) {
  let display = document.getElementById("display");

  // last character check karo
  let lastChar = display.value.slice(-1);

  // agar dono operator hain, to replace karo (repeat na ho)
  if ("+-*/%".includes(lastChar) && "+-*/%".includes(value)) {
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value;
  }
}


function clrall (){
    document.getElementById("display").value ="";
}

function BS() {
    let disp = document.getElementById("display");
    display.value = display.value.slice(0,-1)
     
}

function calculate() {
  let display = document.getElementById("display").value;
  let result = eval(display);   
  document.getElementById("display").value = result;
}

function square (){
   let num =document.getElementById("display").value
   let resl = num * num;
   document.getElementById("display").value = resl;

}


