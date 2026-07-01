const person = { firstname:"Akshay", lastname:"Kumar", age: 50, eyecolor: "brown" };
console.log(person);

person.firstname = "Salman"
person.lastname = "Khan";

console.log(person);
console.log(person.age);

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
}

const sumresult = calculator.add(2, 3);
console.log(sumresult);
console.log(calculator.subtract(10, 6));

const product = {
    name: 'Smartphone',
    brand: 'Xiaomi',
    price: 12500,
    displayInfo: function() {
        console.log(`The ${this.name} is of brand ${this.brand} and price is INR ${this.price}`);
    }
}

product.displayInfo();