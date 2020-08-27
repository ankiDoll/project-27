class bob extends BaseClass{

    constructor(x,y,radius){

        super(x,y);
        
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;

        World.add(world,this.body);
    
    }
     
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        fill("red");
        

        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius+ 30,this.radius + 30);
    }

}