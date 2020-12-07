let imc;

function calculate() {
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");

    if (validade(weight.value, height.value)) {
        imc = caluculateImc(weight.value, height.value);
        alert(imc)
        let result = document.getElementById("result");
        result.innerHTML = "your IMC is "  + imc;
    } else {
        alert("is not validade");
        clearInput(weight, height);
    }
    return false;
}

function clearInput(weight, height){
  weight.value = '';
  height.value = '';
  document.getElementById("result").innerHTML = "";
}
let caluculateImc = (weight, height) => (weight / (height * height)).toFixed(2);
let validade = (weight, height) => (isNumber(weight) && isNumber(height));
let isNumber = (number) => !(isNaN(number) || isNotInitialized(number) || isNull(number));
let isNotInitialized = (number) => (typeof number == 'undefined'); 
let isNull = (number) => (number == null || number == "");


