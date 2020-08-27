class Box{
    constructor(x, y, width, height){
        var options={
            isStatic:true
        }

        this.body =Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        fill("blue");
        image(this.image, 650, 610, 150, 150);
    }
}