const fruits = ["Apple","Banana","Mango"];
function printFruit(fruit) {
    console.log(fruit);
}
fruits.forEach(printFruit);  

fruits.forEach((fruits) =>{
    console.log(fruits);
});

const marks = [75,77,78];
let sum = 0;
marks.forEach((mark) =>{
    sum += mark;
})
console.log(sum);

const numbers = [1,2,3];
numbers.forEach((number, index, originalArray) => {
    originalArray[index] = number*2
})
console.log(numbers);

const classmates = ["Tanish","Ram","Sham"];
const classmateswithuppercase = [];
classmates.forEach((classmates, index) => {
    classmateswithuppercase[index] = classmates.toUpperCase()
})
console.log(classmateswithuppercase);