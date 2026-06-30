const numbers = [1, 2, 3, 4, 5];
console.log("numbers", numbers);

const result = [];
for(let i = 0; i < numbers.length; i++)
{
    result.push(numbers[i] * 2);
}

console.log(result);

const doubledValues = numbers.map(function(number) { return number * 2 });
console.log(doubledValues);

const doubledValuesCompacted = numbers.map(number => number * 2);
console.log(doubledValuesCompacted);

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.map(fruit => fruit.toUpperCase() ));