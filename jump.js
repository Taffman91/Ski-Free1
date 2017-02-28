var colorsR = [148, 75, 0, 0, 255, 255, 255];
var colorsG = [0, 0, 0, 255, 255, 127, 0];
var colorsB = [211, 130, 255, 0, 0, 0, 0];
var meter = 0;

var velocityY = 0;
var velocityX = 0;

var breakPower = 0.09;

function jump() {

    var speedPower = 0.02;
    var maxSpeed = 13;
    ///Alfred
    this.y = window.innerHeight + round(random(500, 5000));
    this.x = random(-500, window.innerWidth + 400);

    this.show = function() {
        for (var i = 0; i < 7; i++) {
            stroke(colorsR[i], colorsG[i], colorsB[i]);
            fill(colorsR[i], colorsG[i], colorsB[i]);
            rect(this.x, this.y + (i * 2), 40, 2);
        }

        if (this.y + 100 < 0) {
            this.y = window.innerHeight + round(random(500, 5000));
            this.x = random(-500, window.innerWidth + 400);
        }
    }

    this.getMeter = function() {
        return meter;
    }

    this.getVelocityY = function() {
        return velocityY;
    }

    this.getVelocityX = function() {
        return velocityX;
    }

    this.update = function(state) {
        if (state == 0) {
            if (velocityY < 0) {
                velocityY += breakPower;
            } else {
                velocityY = 0;
            }

            if (velocityX > 0) {
                velocityX -= breakPower;
            } else {
                velocityX = 0;
            }
        } else if (state == 1) {
            if (velocityY > -maxSpeed) {
                velocityY -= speedPower;
            }

            if (velocityX < maxSpeed) {
                velocityX += speedPower;
            }
        } else if (state == 2) {
            if (velocityY > -maxSpeed) {
                velocityY -= speedPower;
            }
            velocityX = 0;
        } else if (state == 3) {
            if (velocityY > -maxSpeed) {
                velocityY -= speedPower;
            }

            if (velocityX > -maxSpeed) {
                velocityX -= speedPower;
            }
        } else if (state == 4) {
            if (velocityY < 0) {
                velocityY += breakPower;
            } else {
                velocityY = 0;
            }

            if (velocityX < 0) {
                velocityX += breakPower;
            } else {
                velocityX = 0;
            }
        }

        this.x += velocityX;
        this.y += velocityY;
    }

    this.jumpOnce = function(state) {
        if (velocityY >= 0 && velocityX == 0) {
            if (state == 0) {
                velocityX += 8;
            } else if (state == 4) {
                velocityX -= 8;
            }
        }
    }
}
