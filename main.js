function preload(){
}

function setup(){
    canvas  = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);

    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(150, 90, 375, 25);
    rect(150,350, 375, 25);
    rect(150, 90, 25, 275);
    rect(500, 90, 25, 275);

    stroke(168, 10, 10);
    fill(168, 10, 10);
    
    circle(170,102,50);
    circle(510,102,50);
    circle(170,360,50);
    circle(510,360,50);
}

function take_snapshot(){
    save('Neil.png');
}