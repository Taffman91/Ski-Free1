var Vplayer;
var VsnowMan;
var Vjumps = [];
var moveSpeedX = 0;
var moveSpeedY = 0;
var Vtree;
var characterImages = [];
var framerate = 0;

function preload() {
    for (var i = 0; i < 5; i++) {
        characterImages[i] = loadImage('images/character' + i + '.png');
    }
}

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 10);
    Vplayer = new character();
    VsnowMan = new snowMan();
    for (var i = 0; i < 10; i++) {
        Vjumps.push(new jump());
    }
    Vtree = new tree();
}

function draw() {
    background(255);
    if (frameCount % 10 == 0) {
        framerate = round(frameRate());
    }
    text(framerate, 10, 10);

    for (var i = 0; i < Vjumps.length; i++) {
        Vjumps[i].show();
    }
    Vtree.show();
    Vplayer.show(characterImages);
    VsnowMan.show();

    for (var i = 0; i < Vjumps.length; i++) {
        Vjumps[i].update(Vplayer.getState());
    }
}

function keyPressed() {
    if (key == 'A') {
        if (Vplayer.getState() == 0) {
            for (var i = 0; i < Vjumps.length; i++) {
                Vjumps[i].jumpOnce(Vplayer.getState());
            }
        }
        Vplayer.changeState(0);
    } else if (key == 'D') {
        if (Vplayer.getState() == 4) {
            for (var i = 0; i < Vjumps.length; i++) {
                Vjumps[i].jumpOnce(Vplayer.getState());
            }
        }
        console.log(Vplayer.getState());
        Vplayer.changeState(1);
    }
}
