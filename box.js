class box{
constructor(x,y,width,height){
    var options = {
      isStatic:false,
      'restitution':1,
      'friction':1.0,
      'density':1.0
    }
  //  this.body = Constraint.create(options);
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push ();
  fill ("blue")
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  pop ();
  }
}