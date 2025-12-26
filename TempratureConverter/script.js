const input = document.getElementById("input");
const convertBtn = document.getElementById("button");
const result = document.getElementById("result");
let toCelsius = document.getElementById("toCelsius");
let toFahrenheit = document.getElementById("toFahrenheit");
let unit;

convertBtn.onclick =  function () {
     if (toCelsius.checked){
        unit = Number(input.value);
        result.innerHTML = ((unit * 9 / 5) + 32);
    }
    else if (toFahrenheit.checked){
        unit = Number(input.value);
        result.innerHTML = ((unit - 32) * 5 / 9);
     }
     else{
        result.innerHTML = "Please select a unit";
     }
     input.value = '';
     input.focus();
}
