const array1 =  [1, 2, 3];
const array2 = [4, 5, 6,];
console.log(array1.concat(array2));

array2.push(...array1);
console.log(array2);

const combinedarray = [...array2, ...array1];
console.log(combinedarray);