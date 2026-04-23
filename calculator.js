let display = document.getElementById('output');

function addInput(num){
    display.value += num;
}

function calculate(){
    display.value = eval(display.value);
}

function clear_output(){
    display.value = ""
}