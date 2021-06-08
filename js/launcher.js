class Launcher{
    constructor(body1,point1){
        var options = {
            bodyA:body1,
            pointB:point1,
            length:10,
            stiffness:0.05
        
        }
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA=null;
    }
    attach(body){
        this.launcher.bodyA = body
    }
    display(){
        if(this.launcher.bodyA){
    line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.launcher.pointB.x,this.launcher.pointB.y)
        }
    }
}