background(255,255,255);
//face
noStroke();
fill(225,225,55);
ellipse(200,200,300);

//eyes
fill(0);
//left eye
ellipse(150,160,60);

//right eye
noStroke();
arc(250,160,60,60,0,PI);
fill(225,225,55);
ellipse(254,160,48);



//mouth
stroke(0);
strokeWeight(3);
noFill();
arc(200,240,85,30,1.98*PI,0.9*PI);

// winky star
fill(225,225,55);
line(280,140,290,145);
line(290,140,280,145);
line(285,135,285,150);
