const age = [10, 12, 14, 16];
console.log(age);
let result = false;

for(let i = 0; i < age.length; i++)
{
    if(age[i] >= 18)
    {
        result = true;
        break;
    }
}
console.log(result);

function checkAdult(age) {
    if(age >= 18)
    {
        return true;
    }

    return false;
}
const ageresult = age.some(checkAdult);
console.log(ageresult);

function checkAdultminified(age){
    return age >= 18;
}
console.log(age.some(checkAdultminified));

console.log(age.some((age) => {return age >= 18;}));

const fruits = [ "Apple","Banana","Pineapple","Mango"];
console.log(fruits.some((fruits) => {return fruits.length > 6}));