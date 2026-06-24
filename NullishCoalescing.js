let onlinename = "Iron Man";
let realname = "Tanish";

let nametouse = null;
nametouse = onlinename ?? realname;
console.log(nametouse);

let x = null;
let y = 9;
x ??= y;
console.log(x);