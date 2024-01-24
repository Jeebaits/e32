// Create a Car object using ES5 with Prototype
function Car(carCost, topSpeed){
    this.carCost = carCost;
    this.topSpeed = topSpeed;
    this.kms = 0;
    this.drive = function(){
        console.log("Driving");
        this.kms += 8;
    }

    this.reverse = function(){
        console.log("Reversing");
        if(this.kms <= 0){
            console.log("The car can no longer reverse!");
        } else(this.kms -= 4);
    }
}

    Car.prototype.info = function(){
        console.log(`Price: ${this.carCost} Top Speed: ${this.topSpeed} Kilometer/s: ${this.kms}`);
}

// Create three instances of Car
const toyota = new Car(120000, 90 + `KPH`);
for (let index = 0; index < 4; index++) {
    toyota.drive();
}
toyota.reverse();
toyota.info();

const kia = new Car(75000, 60 + `KPH`);
for (let index = 0; index < 3; index++) {
    kia.drive();
}
for (let index = 0; index < 4; index++) {
    kia.reverse();
}
kia.info();

const honda = new Car(150000, 120 + `KPH`);
for (let index = 0; index < 3; index++) {
    honda.reverse();
}
honda.info();

