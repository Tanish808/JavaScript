const numbers = [10, 11, 12, 13, 14];
let result = 0;
for(let i = 0; i < numbers.length; i++)
{
    result = result + numbers[i];
}
console.log(result);

const sumresult = numbers.reduce(function(endresult, currentvalue, currentindex, originalarray) {
    return endresult + currentvalue;
}, 0);
console.log(sumresult);

console.log(numbers.reduce(function(accumulator, currentvalue) {
    if (accumulator < currentvalue)
    {
        return currentvalue;
    }
    return accumulator;
} , 0));

const words = ["Tanish"," ","Chopra","!"];
const sentence = words.reduce((accumulator, currentvalue) => accumulator + currentvalue);
console.log(sentence);

const color = ["Red","Blue","Red","Green","Red","Blue"];
const colorcount = color.reduce(function(accumulator, currentvalue) {
    if(!accumulator[currentvalue])
    {
        accumulator[currentvalue] = 0;
  }
  accumulator[currentvalue] = accumulator[currentvalue] + 1;
  return accumulator;
}, {});
console.log(colorcount);