const mytext = "Virat Kohli is the best test match batsman is is ";
console.log(mytext.slice(4));
console.log(mytext.slice(-7));
console.log(mytext.slice(2,14));

console.log(mytext.replace("is", "was"));

const re = new RegExp("is","g");
console.log(mytext.replace(re, "was"));