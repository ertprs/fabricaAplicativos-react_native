let array = [];

function trainArrayAdd(){
    let element = prompt("add an element to the array");
    array.push(element);
    console.log(array)

    let arrayView =document.getElementById("MyArray");
    arrayView.innerHTML = array;
}

function trainArrayRemove(){
    let element =prompt("enter the name of the feature you want to remove");
    let index = array.indexOf(element);
    console.log("index:" +index + typeof index);

    if(index !== -1){
        alert("succes!");
        let arrayView = document.getElementById("MyArray");
        delete array[index];
    
        arrayView.innerHTML = array;
    }else{
        alert("failed!");
    }
}



function removeEmpty(arrayP){
    
}