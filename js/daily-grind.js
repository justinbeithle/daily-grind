/*
    These are the items we believe we need to produce for each day's coffee.

    pic - img src 
    alt - the alt tag for the image 
    color - color to match the image 
    desc - description of coffee/bubble tea 
    name - name of the coffee 
    day - the day of the week 

*/

let myDate = new Date(); 

let today = myDate.getDay(); 

switch(today){
    case 2: 
         today="Tuesday";
    break;

    case 3: 
         today="Wednesday";
    break;

    default:
         today = "I don't know what day it is!";
}

coffee = {
    name:"Bubble Tea",
    color: "brown",
    pic: "images/bubble-tea.jpg",
    alt: "A picture of bubble tea",
    day: "Wednesday",
    desc: `I like me some bubble tea!`

}


//alert(today);
console.log(coffee);
