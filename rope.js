class rope {
    constructor (bodyA, pointB) {
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 10, 
            stiffness: 0.004
        }
        this.pointB=pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    fly(){
        this.rope.bodyA=null;
    }
    attach(body){
        this.rope.bodyA=body;
    }

    display() {
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.pointB
     
            strokeWeight(2);
     
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
}