const array = ["Tanish","Ram","Sham"];
console.log(array);
console.log(array[1]);
console.log(array.length);

const emptyarray = [];
emptyarray[0] = "Tanish";
emptyarray[1] = "Ram";
console.log(emptyarray);

const mixedarray = ["tanish", 123, true];
console.log(mixedarray);

const arraywithconstructor = new Array(1,2,3,4);
console.log(arraywithconstructor);

const arraywithconstructorwithspecifiedlength = new Array(5);
arraywithconstructorwithspecifiedlength[0] = "Tanish";
console.log(arraywithconstructorwithspecifiedlength);