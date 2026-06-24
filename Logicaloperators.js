const dishone = "Chole"; 
const dishtwo = "Bhature";

if (dishone == "Chole"  && dishtwo == "Bhature")
{
    console.log("I will eat food today");
} else {
    console.log("I will not eat food today");
}

const dishthree = "Rajma"; 
const dishfour = "Chawal";

if (dishthree == "Rajma"  ||  dishfour == "Bhature")
{
    console.log("I will eat food today");
} else  {
    console.log("I will not eat food today");
}

const dishfive = "Paneer"; 
const dishsix = "Roti";
let isPaneerNaan;

if (dishfive == "Paneer"  &&  dishsix == "Naan")
{
 isPaneerNaan = true;
} else  {
    isPaneerNaan = false;
}

if(!isPaneerNaan) {
    console.log("No it is not Paneer Naan");
}
