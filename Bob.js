class Bob {
    constructor(x,y,rope){
        var options = {
            friction: 0.4,
            density: 3,
           restitution: 1.2,
           isStatic: false
        }

        this.x = x;
        this.y = y;
        this.rope = rope;

        this.body = Bodies.circle(this.x,this.y,this.rope/2,options)
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        push();
        translate(position.x,position.y);
        rotate(this.body.angle);
        fill("blue");

        ellipseMode(CENTER);
        ellipse(0,0,this.rope,this.rope);
        pop();
    }
}