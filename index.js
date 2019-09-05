// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(value){
        this.radius = (value /2)
    }

   get diameter(){
        return (this.radius * 2)
    }

    set circumference(value){
        this.radius = (value / 2) / Math.PI
    }

   get circumference(){
       return Math.PI * (this.radius * 2)
    }

    get area(){
      return  Math.PI * (this.radius ** 2)
    }


}