let visitorAge = 35;
let isStudent = true;

function printTicketPrice(visitorAge, isStudent){
if(visitorAge<6){
    console.log("Bezmaksas biļete!");
}
else{
    console.log("Maksas biļete!");
};

if(isStudent == true){
    console.log("Cena:5 EUR");
}
else{
    console.log("Cena:10 EUR");
}
}
printTicketPrice(12, true);
printTicketPrice(35, false);