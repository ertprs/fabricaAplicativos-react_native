function onKeyDown(event) {
    console.log("tight keyboard! " + event.keyCode);

    if (event.keyCode == 13) {
        console.log("you hit enter");
    }

    if (event.shiftKey) {
        console.log("shiftkey is on");
    } else {
        console.log("shuftkey is disabled");
    }
}

function onKeyUp(event){

    console.log("drop keyboard");

}

function onKeyPress(event){
    console.log("pressing a key");

}