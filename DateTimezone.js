const time = new Date();
console.log(time);
console.log(time.toLocaleString('da-DK',  { timeZone: 'Europe/Copenhagen'}));
console.log(time.toLocaleString('en-US',  { timeZone: 'America/New_York'}));

console.log(time.toLocaleString('hi-IN',  { timeZone: 'Asia/Calcutta'}));

const date = new Date("2023-02-16T13:20:12.450Z");
console.log(date);
console.log(date.toLocaleString('hi-IN',  { timeZone: 'Asia/Calcutta'}));