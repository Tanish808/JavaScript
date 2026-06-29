const array = ["apple","banana","orange"];
console.log(array);
console.log(array[2]);
console.log(array.length);

array[1] = "mango";
console.log(array);

delete array[2];
console.log(array);

for(let i = 0; i < array.length; i++) {
console.log(array[i]);
}

array.forEach(function(element){console.log(element)});

for(const fruit of array) {
    console.log(fruit);
}
