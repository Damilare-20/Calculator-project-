let display = document.getElementById("calcScreen");

function insertInput(num) {
  display.value += num;
}

function calculate() {
  display.value = eval(display.value);
}

function clear_calcScreen() {
  display.value = "";
}


  function sliceInput() {
    display.value = display.value.slice(0, -1);
  }
