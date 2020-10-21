class Dog {
    constructor(x, y) {

        var opt = {
            isStatic: true
        }


        this.body = Bodies.rectangle(x, y, 5, 5, opt);
        this.image = loadImage("dogImg.png");
        this.image2 = loadImage("dogImg1.png")
        World.add(world, this.body);
    }
    display() {
        var state = "on";

        var pos = this.body.position;
        // rectMode(CENTER);
        imageMode(CENTER);

        if (state != "off" && foodx > 0) {
            image(this.image, pos.x, pos.y, 200, 200);

        }

        if (foodx <= 0) {
            image(this.image2, pos.x, pos.y, 200, 200);
            state = "off";
        }
    }
    keyPressed() {
        var pos = this.body.position;

        if (keyDown(UP_ARROW)) {
            move(0, -10);
        }

        if (keyDown(DOWN_ARROW)) {
            move(0, 10);
        }

        if (keyDown(LEFT_ARROW)) {
            move(-10, 0);
        }

        if (keyDown(RIGHT_ARROW)) {
            move(10, 0);

        }

        if (keyDown("space")) {
            writeData(food);

        }

    }
}
