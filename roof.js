class roof
{

constructor(x,y,w,h,)

{

var options = 
{
    isStatic:true
}
this.x =x;
this.y = y;
this.h = h
this.w = w
this.body=Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);
}
display()
{
var groundPos=this.body.position
push()
transalate(groundPos.x,groundPos.y);
rectMode(CENTER)
fill(128,128,128)
rect(0,0,this.w,this.h);
pop()

}

}