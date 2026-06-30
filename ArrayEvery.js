const ages = [34, 45, 56, 67, 78];
let result = true;
for(let i = 0; i < ages.length; i++) 
{
    if(ages[i] < 18) 
    {
        result = false;
        break;
    }
}
console.log(result);

function checkAdult(ages) 
{
    if(ages < 18)
    {
        return false;
    }
    return true;
}

const everyresult = ages.every(checkAdult);
console.log(everyresult);

function checkAdultminified(ages)
{
    return ages >= 18;
}
console.log(ages.every(checkAdultminified));

console.log(ages.every((ages => {return ages >= 18})));

const Numbers = [ 4,  6, 8];
console.log(Numbers.every((num) => {return num % 2 === 0}));
