// Números
const numbers = document.querySelectorAll(".number")
const symbols = document.querySelectorAll(".symbol")

const layout = document.querySelector(".layout p");


function addValue(value){
    let num = layout.innerHTML;
    layout.innerHTML = num + value
}

function Clean(){
    layout.innerHTML =""
}

function back(){
    let result = document.querySelector("#result").innerHTML;
    document.querySelector("#result").innerHTML = result.substring(0, result.length-1)
}

function calculate(){
    let result = document.querySelector("#result").innerHTML;

    if (result){
        layout.innerHTML = eval(result)
    }else{
        document.querySelector("#result").innerHTML = "NADA"
    }
}



