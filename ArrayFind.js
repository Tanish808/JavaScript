const numbers =  [10 , 13 , 16, 19];
let result;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 15) 
    {
        result = numbers[i];
        break
    }
}
console.log(result);

function chechnumber(num){
   if(num > 15)
   {
    return true;
   }
   return false;
}
console.log(numbers.find(chechnumber));

function chechnumberminified(num) {
    return num > 15
}
console.log(numbers.find(chechnumberminified));

console.log(numbers.find(num => num > 15));

const fruits = ["Apple","Banana","Grapes"];
console.log(fruits.find(fruits => fruits.startsWith("Ba")));