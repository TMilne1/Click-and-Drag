/*pagex vs clientx vs screenx
https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y
*/

const slider = document.querySelector('.items')

let isDown = false;
let startX;
let scrollLeft;

function mouseIsDown(){
    isDown = true
    this.classList.add('active')
    startX = event.clientX - this.offsetLeft   
    scrollLeft = slider.scrollLeft; // The actual position of the scrollbar on mpousedown saved to a global variable
    console.log({startX, scrollLeft})
}

function mouseIsMoving() {
    if (isDown == true) {
        event.preventDefault();
        
        let x = event.clientX - this.offsetLeft; //log of the x coordinate is as mouse is moving
        let change = x - startX; // log of how far you are deviating from the intitial x position on mouse down
        console.log({x, change});
        slider.scrollLeft = scrollLeft + change;
        //did not do slider,scrollLeft + change because it would recalculate itself at it into the variable and cause extremely fast scrolling   
    }
}

function mouseIsUp() {
    isDown =false
    this.classList.remove('active') 
}

/*function mouseMovedOutOfArea() {
    if(isDown==true){
        this.classList.remove('active')

    }
}
*/


slider.addEventListener('mousedown',mouseIsDown);
slider.addEventListener('mousemove',mouseIsMoving);
slider.addEventListener('mouseup', mouseIsUp);
slider.addEventListener('mouseleave',mouseIsUp);


