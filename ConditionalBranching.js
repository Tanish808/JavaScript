const age = 17;
if(age < 18){
    console.log("You are a minor");
}else {
    console.log("You are an adult");
}

const trafficlight = "red";
if(trafficlight === "green"){
    console.log("Drive ahead, light is green");
}else if(trafficlight === "red") {
    console.log("Stop the car");
}else if(trafficlight === "yellow") {
    console.log("Bare carefull, light is changing");
}else {
    console.log("Invalid light");
}

age < 18 ? console.log("You are a minor") : console.log("You are an adult");