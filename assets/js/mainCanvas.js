let NORTH = 0;
let NORTHEAST = 1;
let EAST = 2;
let SOUTHEAST = 3;
let SOUTH = 4;
let SOUTHWEST = 5;
let WEST = 6;
let NORTHWEST = 7;
let direction;

let stepSize = 20;
let diameter = 10;

let posX;
let posY;

let count = 0;
let num = 5000;
let speed = 1;

// Old color palette
// let c1 = '#ff5f5f'
// let c2 = '#ffd04d'
// let c3 = '#00916b'
// let c4 = '#0068af'

// New color palette
let c1 = '#015c5d'  // deep teal
let c2 = '#f8d459'  // muted gold
let c3 = '#f3eace'  // light cream
let c4 = '#a18950'  // warm tan-gold


function setup() {
    createCanvas(parseInt(windowWidth/stepSize)*stepSize, 600);
    noStroke();
    rectMode(CENTER)

    posX = parseInt(width/2/stepSize)*stepSize
    posY = parseInt(height/2/stepSize)*stepSize

    // noLoop();

    $('.logo-bg').append( $('.p5Canvas') )
}

function draw() {
    go(c1)
    go(c2)
    go(c3)
    go(c4)
    if(count>num) noLoop();
}

function go(_c){
    for (let i = 0; i <= speed; i++) {
        direction = int(random(0, 8));

        if (direction == NORTH) {
        posY -= stepSize;
        } else if (direction == NORTHEAST) {
        posX += stepSize;
        posY -= stepSize;
        } else if (direction == EAST) {
        posX += stepSize;
        } else if (direction == SOUTHEAST) {
        posX += stepSize;
        posY += stepSize;
        } else if (direction == SOUTH) {
        posY += stepSize;
        } else if (direction == SOUTHWEST) {
        posX -= stepSize;
        posY += stepSize;
        } else if (direction == WEST) {
        posX -= stepSize;
        } else if (direction == NORTHWEST) {
        posX -= stepSize;
        posY -= stepSize;
        }

        if (posX > width) posX = 0;
        if (posX < 0) posX = width;
        if (posY < 0) posY = height;
        if (posY > height) posY = 0;

        fill(_c)
        rect(posX + stepSize / 2, posY + stepSize / 2, diameter, diameter)
        count++
    }
}