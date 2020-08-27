class rope {
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var option ={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX ,y: this.offsetY},
            
            
        }

        this.chain = Constraint.create(option);
        World.add(world,this.chain);
    }

    display(){

      var pointA = this.chain.bodyA.position;
      var pointB = this.chain.bodyB.position;

      var anchorAx = pointA.x;
      var anchorAy = pointA.y;

      var anchorBx = pointB.x + this.offsetX;
      var anchorBy = pointB.x + this.offsetY;

        strokeWeight(2);

      line(anchorAx,anchorAy,anchorBx,anchorBy);
    }
}