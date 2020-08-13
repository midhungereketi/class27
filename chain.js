class Chain{
    constructor(bodyA,bodyB){
        var option ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        var PA = this.chain.bodyA.position;
        var PB = this.chain.bodyB.position;
        strokeWeight(4);
        line(PA.x,PA.y,PB.x,PB.y);
    }
}