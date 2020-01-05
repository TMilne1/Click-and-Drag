const slider = document.querySelectorAll('.items')

function itemInfo(){
    console.log(this)
    console.log(this.getBoundingClientRect())
    console.log(event.clientX)
}

let isDown = false;
let startX;
let endX;
let scroll;

function mouseIsDown(){
    isDown = true
}
function mouseIsUp() {
    isDown =false
}
function mouseMovedOutOfArea() {
    if(isDown==true){

    }
}
function mouseIsMoving() {
    if(isDown == true){

    }
}


slider.addEventListener('mousedown',mouseIsDown);
slider.addEventListener('mousemove',mouseIsMoving);
slider.addEventListener('mouseup', mouseIsUp);
slider.addEventListener('mouseleave',mouseMovedOutOfArea);