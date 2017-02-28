var state;

function character() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 4;
    state = 0;

    this.show = function(img) {
        image(img[state], this.x, this.y);
    }

    this.getState = function() {
        return state;
    }

    this.changeState = function(index) {
        if (index == 0) {
            if (state > 0) {
                state--;
            }
        } else if (index == 1) {
            if (state < 4) {
                state++;
            }
        }
    }
}
