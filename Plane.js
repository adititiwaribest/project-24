class Plane {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      var options={
        'restitution':0.8,
        'friction':3,
        'density':30
      }
      rect(pos.x, pos.y, this.width, this.height);
    }
  };