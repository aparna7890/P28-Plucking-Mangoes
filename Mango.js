class Mango {
    constructor(x, y, r){
        var options = {
            isStatic: true,
            restitution: options,
            friction: 1
        }

        this.x = x
        this.y = y
        this.radius = r

        this.body = Bodies.circle(this.x, this.y, this.radius, options)
        this.img = loadImage("images/mango.png")
        World.add(world, this.body)

    }
    display(){
        imageMode(CENTER)
        image(this.img, this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}