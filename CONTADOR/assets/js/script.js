var currentNumberWrapper = document.getElementById("currentNumber");

var currentNumber = 0

var soma = document.getElementsByName("adicionar")[0];
soma.addEventListener("click", increment);

function increment(){

    if (currentNumber >= 10){
        document.getElementsByName("subtrair").disabled = true;
    }else{
        currentNumber = currentNumber + 1;
    }

    if (currentNumber >= 0) {
        var cor = document.getElementsByTagName("span")[0]
        cor.style.color="blue"
    }else{
        var cor = document.getElementsByTagName("span")[0]
        cor.style.color="red"
    }

    currentNumberWrapper.innerHTML = currentNumber;
}

var sub = document.getElementsByName("subtrair")[0];
sub.addEventListener("click", decrement);

    function decrement(){

    
    if (currentNumber <= -10){
        document.getElementsByName("subtrair").disabled = true;
    }else{
        currentNumber = currentNumber - 1;
    }

    if (currentNumber < 0) {
        var cor = document.getElementsByTagName("span")[0];
        cor.style.color="red";
    }else{
        var cor = document.getElementsByTagName("span")[0];
        cor.style.color="black";
    }
    
    currentNumberWrapper.innerHTML = currentNumber;
}