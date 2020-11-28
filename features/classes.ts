class Vehicle {
  //   color: string;

  //   constructor(color: string) {
  //     this.color = color;
  //   }
  // Shorthand notation for the above (public keyword!, can also be private or protected).
  constructor(public color: string) {}

  // this method can only be accessed within this class or subclasses
  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // this method can only be accessed within this class
  private drive(): void {
    console.log("Vroom");
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
