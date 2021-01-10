class Birds{

    constructor(x,y,width,height){
        var options={
    
            restitution:0.5
          }
        
          this.body=Bodies.rectangle(x,y,width,height,options);
          World.add(myworld,this.body);
          this.width=width;
          this.height=height;
    
    
    }
    
    display()
    {
        push()
        this.body.position.x=mouseX
        this.body.position.y=mouseY
       fill("red")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)  
        rect(0,0,this.width,this.height)
        pop()
      
        
    }
    
    
    }