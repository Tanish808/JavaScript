const numbers = ["2","3","4","5","6"];
console.log(numbers.filter(num => num % 2 === 0).map(num => num * 2).reduce((accumulator, currentvalue) =>  {return accumulator + currentvalue}, 0));

const words = ["you", "favorite", "are", "knowledge", "the", "best"];
console.log(words.filter(word => word.length <5).map(word => word.toUpperCase()).reduce((accumulator, currentvalue) => {return accumulator + " " + currentvalue} ));