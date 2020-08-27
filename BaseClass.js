class BaseClass{
    constructor(x,y,width,height,angle){

        this.body = Bodies.rectangle(x,y,width,height,angle)
        World.add(world,this.body);

        this.width = width;
        this.height = height;

    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}