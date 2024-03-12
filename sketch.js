let bolinhaX, bolinhaY, bolinhaR;
let dx, dy;
let gravidade, rest;

function setup() {
    createCanvas(windowWidth, windowHeight - 4);

    ellipseMode(RADIUS);
    
    bolinhaX = width / 2;
    bolinhaY = 0;
    bolinhaR = 20;
    
    dx = random(-4, 4);
    dy = 0;

    gravidade = 1;
    rest = 0.9;
}

function draw() {
    background(0);
    fill("orchid");
    circle(bolinhaX, bolinhaY, bolinhaR);
    
    dy += gravidade;
    bolinhaY += dy;
    bolinhaX += dx;

    if (bolinhaY + bolinhaR > height) {
        bolinhaY = height - bolinhaR;
        dy *= -rest;
        dx *= rest;
    }

    if (
        bolinhaX - bolinhaR < 0 ||
        bolinhaX + bolinhaR > width
        ) {
        dx *= -1;
    }
}