class wall extends BaseClass{

    constructor(x,y,width,height){
        fill("crimson");
        
        super(x,y,width,height);

        Matter.Body.setStatic(this.body,true);
    }
}