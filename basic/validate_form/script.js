function validate() {
    let number = document.getElementById("number");
    let name = document.getElementById("name");

    if (validadeName(name) && validadeNumber(number)) {
        alert("success!");
        return true;
    }
    return false;

}


function validadeName(name) {
    if (name.value.length > 6) {

        return true;
    }
    
    alert("name invalid");
    document.form.name.focus();
    return false;
}

function validadeNumber(number) {
    if (number.value.length < 2) {
        return true;
    }
    alert("number invalid")
    document.form.name.focus();
    return false;

}