function logIn() {
  console.log("my fuction");
  let area = document.getElementById("area");
  let name = prompt("What is your name?");

  if (name == "" || name == null) {
    alert("retype your name");
    area.innerHTML = "welcome";
  } else {
    area.innerHTML = "welcome " + name;
  }
}
