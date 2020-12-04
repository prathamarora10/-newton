class Point
{
    constructor(bodyA,pointB){

        var option = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 400
        }

        this.pointB = pointB
        this.point = Constraint.create(option)
        World.add(world,this.point)
    }

    display(){

        var pos1 = this.point.bodyA.position
        var pos2 = this.pointB

        strokeWeight(5)
        line(pos1.x,pos1.y,pos2.x,pos2.y)

    }
}