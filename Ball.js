class Ball  {
    constructor(x, y, width, height){
     var options={
       frictionAir:0.01,
       density:1
     }
     this.body= Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill("pink");
      stroke("black");
      ellipse(0,0,this.width, this.height);
      pop();
    }
  
  };