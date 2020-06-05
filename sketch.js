var gamestate = 1;

function setup() {
    createCanvas(400, 400);
    p = createVector(width / 2, height / 2)
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    boostColor = color(0, 255, 0);
    playerColor = color(255);
    Score = 0;
    Health = 100;
    bb = [];
    bbVel = [];
    bbSize = 25;

    for (var i = 0; i < 5; i++) {
        bb.push(createVector(random(0, width), random(0, height)));
        bbVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    if(gamestate === 1){
        background("green");

        updatePlayer();
        updateBubbles();
        updateLasers();
    }

    if(Health<=0){
        gamestate = 2;
    }
    if(gamestate === 2){
        textSize(20);
        text("GAME OVER",100,100);
        text("No of bubbles shot: " + Score,130,300);
    }
}