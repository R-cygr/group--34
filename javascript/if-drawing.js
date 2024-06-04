let lastMouseX= 0;
let lastMouseY= 0;
let mouseIsActive= false;
let redValue= 255;
let blueValue= 255;
let greenValue= 255;
let weightValue= 1;

function keyPressed(){
    if(keyIsDown(189)){
        if (weightValue>1){
            weightValue=weightValue-1;
            }
    }   
    if(keyIsDown(187)){
        weightValue=weightValue+1;
    }
    if (keyIsDown(48)){
        redValue= 255;
        blueValue= 255;
        greenValue= 255;
    }
    if (keyIsDown(82)) {  /*red*/

        if(redValue==255) {
            redValue=Math.random() *254+1; } 
        else if(redValue>0 && redValue<255){
            redValue=0;
        } 
    else{
        redValue=255;
        }
    }

    if (keyIsDown(71)) {/*green*/
        if(greenValue==255) {
            greenValue=Math.random() *254+1; } 
        else if(greenValue>0 && greenValue<255){
            greenValue=0;
        } 
        else{
            greenValue=255;
        }
    }
    if (keyIsDown(66)) {/*blue*/
        if(blueValue==255) {
            blueValue=Math.random() *254+1; } 
        else if(blueValue>0 && blueValue<255){
            blueValue=0;
        } 
        else{
        blueValue=255;
        }
    }
}

function draw() {
    stroke(redValue,greenValue,blueValue);
    strokeWeight(weightValue);
  if(mouseIsPressed){
    if(mouseIsActive){
    line(mouseX, mouseY, lastMouseX, lastMouseY);
    }
    lastMouseX= mouseX;
    lastMouseY= mouseY;
    mouseIsActive= true;
 } else{
    mouseIsActive= false;
 }
}