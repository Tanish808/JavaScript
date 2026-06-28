const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());

console.log(date.toISOString());

var options = { weekday: 'long', year:'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleString("en-US"));
console.log(date.toLocaleString("hi-IN", options));