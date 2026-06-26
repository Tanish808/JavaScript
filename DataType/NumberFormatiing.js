const Number = 45.2362;
let formatter = new Intl.NumberFormat("en-In" , {
    style:"currency",
    currency:"INR",
});
let formattednumber = formatter.format(Number);
console.log("Formatted number in INR", formattednumber);

formatter = new Intl.NumberFormat("en-US");
formattednumber = formatter.format(Number);
console.log("Formatted decimal number in USD", formattednumber);

formattednumber = Number.toLocaleString("da-DK");
console.log("Formatted decimal number for dk using tolocalestring",
    formattednumber
);

formattednumber = Number.toLocaleString("en-IN" , {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
});
console.log(
  "Formatted decimal number for IN using toLocaleString, maximumFractionDigits and minimumFractionDigits",
  formattednumber
);

