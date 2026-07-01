const person = { name:"Akshay Kumar", age: 50, country:"India" };
const personcopy = person;
console.log(personcopy);

personcopy.name = "Salman";
console.log(personcopy);

const persondeepcopy = {...person};

console.log(person, persondeepcopy);

persondeepcopy.name = "Shahrukh";


console.log(persondeepcopy);

const x = 5;
let y = x;
console.log(x, y);
y = 6;
console.log(x, y);