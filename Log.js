class Log{

    constructor(x,y,width,height,angle){
        var options={
    
            restitution:0.5,
            friction:1
          }
        
          this.body=Bodies.rectangle(x,y,width,height,options);
          World.add(myworld,this.body);
          Matter.Body.setAngle(this.body,angle)
          this.width=width;
          this.height=height;
    
    
    }
    
    display()
    {
        push()
       fill("blue")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)  
        rect(0,0,this.width,this.height)
        pop()
      
        
    }
    
    
    }