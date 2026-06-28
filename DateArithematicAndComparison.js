const date = new Date();
console.log(date);

date.setDate(date.getDate() + 5);
console.log(date);

date.setMonth(date.getMonth() + 1);
console.log(date);

date.setMonth(date.getMonth() - 2);
console.log(date);

const firstdate = new Date("2022-01-02");
const seconddate = new Date("2023-01-01");

console.log(firstdate.getTime() == seconddate.getTime());
console.log(firstdate.getTime())
console.log(+firstdate)
console.log(+firstdate == +seconddate);

if(firstdate > seconddate)
{
    console.log("first date is greater than second date");
}
else if(firstdate < seconddate)
{
    console.log("first date is less than second date");
}
else {
    console.log("first date is equal to second date")};