class Polygon
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:1,
			density:1.0
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var polypos=this.body.position;		
			push()
			translate(polypos.x, polypos.y);
			// rectMode(CENTER)
			 rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
            image(this.image,polygon.body.x,polygon.body.y,40,40);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}