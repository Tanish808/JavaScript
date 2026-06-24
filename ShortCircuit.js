const   Firstname = "Tanish";
const Middlename = null;
const Lastname = "Chopra";

if (!(Firstname && Middlename && Lastname)) {
    console.log("It is a null value");
}  

const   Firstname1 = "Tanish";
const Middlename1 = null;
const Lastname1 = "Chopra";

 const Nameresult = Firstname1 || Middlename1 || Lastname1 ;
    console.log(Nameresult);
