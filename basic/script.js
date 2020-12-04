function logIn() {
    let area = document.getElementById("area");
    let name = prompt("What is your name?");

    if (name == "" || name == null) {
        alert("retype your name");
        area.innerHTML = "welcome";
    } else {
        area.innerHTML = "welcome " + name;
    }
}

function logInTwo(name) {
    let area = document.getElementById("areaTwo");
    let text = prompt("What is your last name?");

    if(text == null || text == ""){
        alert("retype your name");
        area.innerHTML = "Welcome"
    }else{
        area.innerHTML = text + " " + name;
    }
   
}