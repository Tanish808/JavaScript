let a;
console.log(a);

function sumwithoutreturn(x,y) {
    const result = x + y;
}
const sumwithoutreturnresult = sumwithoutreturn(7,6);
console.log(sumwithoutreturnresult);

const person = { firstname: 'Tanish', lastname: 'Chopra' };
console.log(person.age);

const myfriends = ["Ramesh", "Suresh", "Rajesh"] ;
console.log(myfriends[0]);
console.log(myfriends[3]);

console.log("typeof undefined", typeof undefined);

if(person.age === undefined)
{
    console.log('person.age does not exist', person.age);
}else{
    console.log('person.age exists', person.age);
}

if(person.age !== undefined)
{
    console.log('person.age exists', person.age);
}

if(person.age)
{
    console.log('person.age exists', person.age);
}