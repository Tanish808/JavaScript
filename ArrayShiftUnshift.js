const classmates = ["Tanish","Ram","Sham"];
console.log(classmates);

const removedclassmate = classmates.shift();
console.log(classmates);
console.log(removedclassmate)

const emptyarray = [""];
if(emptyarray.length > 0){
    console.log(emptyarray)
}

const newclassmate = classmates.unshift("sam");
console.log(classmates);