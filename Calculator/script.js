function setValue(value){
    let input = document.getElementById("input");
    if(input.innerHTML === "0"){
        input.innerHTML = value;
    }
    else{
        input.innerHTML += value;
    }
}
function calculate(){
    let input = document.getElementById("input");
    try{
        input.innerHTML = eval(input.innerHTML);
    } catch{
        input.innerHTML = "Error";
    }
}
document.getElementById("clear").addEventListener("click", ()=>{
    document.getElementById("input").innerHTML = "0";
});
