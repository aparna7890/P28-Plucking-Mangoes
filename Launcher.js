class Launcher{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            length : 10,
            stiffness : 0.004
        }
        
        this.pointB = pointB
        this.band = Constraint.create(options)
        World.add(world, this.band)
    }

    fly(){
        this.band.bodyA = null;
    }

    attach(body){
        this.band.bodyA = body
    }

    display(){
        if(this.band.bodyA){
            var pointA = this.band.bodyA.position
            var B = this.pointB

            strokeWeight(1)
            line(pointA.x, pointA.y, B.x, B.y)
        }
    }
}