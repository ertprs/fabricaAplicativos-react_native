let imc;

function calculate() {
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");

    if (validade(weight.value, height.value)) {
        imc = caluculateImc(weight.value, height.value);
        alert(imc)
        let result = document.getElementById("result");
        result.innerHTML = "<br>your IMC is " + imc.toFixed(2) + ", " + statusImc(imc)+"!";
    } else {
        alert("is not validade");
        clearInput(weight, height);
    }

    return false;
}

function clearInput(weight, height) {
    weight.value = '';
    height.value = '';
    document.getElementById("result").innerHTML = "";
}

function statusImc(imc) {
    if(imc < 17){
        return "not too underweight";
    }else if(imc >=17 && imc <=18.49){
        return "under weight";
    }else if(imc>=18.5 && imc <=24.99){
        return "normal weight";
    }else if(imc <= 25 && imc <= 29.99){
        return "overweight";
    }
}

let caluculateImc = (weight, height) => (weight / (height * height));
let validade = (weight, height) => (isNumber(weight) && isNumber(height));
let isNumber = (number) => !(isNaN(number) || isNotInitialized(number) || isNull(number));
let isNotInitialized = (number) => (typeof number == 'undefined');
let isNull = (number) => (number == null || number == "");


