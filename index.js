class Circle {

  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter(givenDiamter) {
    this.radius = givenDiamter / 2
  }

  get circumference() {
    return 2 * this.radius * Math.PI
  }

  get area() {
    return Math.PI * this.radius * this.radius
  }

  set area(givenArea) {
    this.radius = Math.sqrt(givenArea/Math.PI)
  }

  set circumference(circumference) {
      this.radius = circumference / (Math.PI * 2 )
  }


}

