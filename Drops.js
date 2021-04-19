class createDrop{
    constructor(x,y)
    {
        this.rain=Bodies.circle(x,y,5);
        this.radius = 5;
        World.add(world, this.rain);
    }

    display()
    {
        ellipseMode(CENTER);
        ellipse(this.rain.position.x ,this.rain.position.y , this.radius, this.radius);
    }
}