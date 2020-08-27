class Paper {
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.0,
            friction:0.6
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 70, 70);
    }
}