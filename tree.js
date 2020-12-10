class tree {
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options);
       this.image=loadImage("Plucking mangoes/tree.png");
       World.add(world, this.body); 
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER); 
      image(this.image, 0, 0, this.r*2, this.r*2);
      pop();
    }
}