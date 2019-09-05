let pi = Math.PI 
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get area(){
        return (this.radius ** 2) * pi;
    }
    set area(newArea){
        this.radius = (newArea / pi ** 0.5)
    }
    get diameter(){
        return (this.radius * 2);
    }
    set diameter(newDiameter){
        this.radius = newDiameter / 2
    }
    get circumference(){
        return pi * this.radius * 2;
    }
    set circumference(newCircumference){
        this.radius = newCircumference / (2*pi) 
    }
}