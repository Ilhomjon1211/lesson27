class Car {
    model;
    color;
    year;
    constructor (model, color, year){
        this.model = model;
        this.color = color;
        this.year = year;
   }
};

const car1 = new Car ("Mercedes-Benz", "black", 2020)
const car2 = new Car ("BMW X7", "white", 2021)
const car3 = new Car ("chevrolet Gentra", "blue", 2019)
console.log(car1);
console.log(car2);
console.log(car3);