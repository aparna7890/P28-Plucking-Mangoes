class Stone{
    constructor(x, y, r){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.radius=r;

        this.body = Bodies.circle(this.x, this.y, this.radius, options)
        this.image = loadImage("images/stone.png");
        World.add(world, this.body)
    }

    display(){
        imageMode(CENTER)        
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}
