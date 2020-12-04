

document.write("</br>Choose your order</br>");
document.write("</br>(zero) ice water</br>");
document.write("</br>(one) juice </br>");
document.write("</br>(two) breackfast</br>");
document.write("</br></br>")

function make() {
    let solicitation = prompt("enter")

    switch (solicitation) {

        case "0":
            alert("you asked for water! thanks");
            break;
        case "1":
            alert("you asked for juice! thanks");
            break; 
        case "2":
            alert("you asked for breakfast! thanks");
            break;
        default:
            alert("invalid request! sorry");
            break;

    }
}