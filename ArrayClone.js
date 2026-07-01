const originalarray = [2, 4, 6, 7, 9];
const arraycopyusingspread = [...originalarray];
console.log(arraycopyusingspread);

arraycopyusingspread.pop();
console.log(arraycopyusingspread);
console.log(originalarray);

const copyusingslice = originalarray.slice();
console.log(copyusingslice);

const copyusingarrayfrom = Array.from(originalarray);
console.log(copyusingarrayfrom);

const copyusingarrayconcat = originalarray.concat();
console.log(copyusingarrayconcat);