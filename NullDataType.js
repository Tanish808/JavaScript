let a = null;
console.log(a);

function sum(a, b) {
    if(a < 0)
    {
        return null;
    }

    return a + b;
}

console.log(sum(2, 3));
console.log(sum(-2, 3));

let b = null;
let result = null;
if(b === null) {
    result = 'Value is null';
}else{ 
    result = b;
}
console.log(result);

let result1 = b ?? 'Value is null';
console.log(result1);

//let person = { firstname:"Tanish", lastname:"Chopra"};
let person = null;
console.log(person?.firstname);

let classmates = ["Tanish", "Ramesh", "Suresh"];
console.log(classmates);
classmates = null;