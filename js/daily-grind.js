/*
    These are the items we believe we need to produce for each day's coffee.

    pic - img src 
    alt - the alt tag for the image 
    color - color to match the image 
    desc - description of coffee/bubble tea 
    name - name of the coffee 
    day - the day of the week 

*/

function coffeeTemplate(){
return `<p>
        <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
      </p>
`;
    
    } 

let myDate = new Date(); 

let today = myDate.getDay(); 

let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }
 
today = parseInt(today);

 console.log(today)

switch(today){

    case 1: 
        today="Monday";
        coffee = {
            name:"Bubble Tea",
            color: "brown",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of bubble tea",
            day: "Wednesday",
            desc: `I like me some bubble tea!`
        };
    break;
    
    case 2: 
         today="Tuesday";
         coffee = {
            name:"Drip",
            color: "black",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee",
            day: "Tuesday",
            desc: `Give it to us straight`
        };

    break;

    case 3: 
         today="Wednesday";
         coffee = {
            name:"Mocha",
            color: "white",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha coffee",
            day: "Wednesday",
            desc: `It's Mocha Wednesday!`
        };

    break;

    case 4: 
    today="Thursday";
    coffee = {
       name:"Frappaccino",
       color: "pink",
       pic: "images/frappaccino.jpg",
       alt: "A picture of a frappaccino",
       day: "Thursday",
       desc: `A sweet drink to start of your day`
   };

    break;

    case 5: 
    today="Friday";
    coffee = {
    name:"cold-brew",
    color: "blue",
    pic: "images/cold-brew.jpg",
    alt: "A picture of a cold-brew coffee",
    day: "Friday",
    desc: `Brew it up`
    };

    break;

    case 6: 
    today="Saturday";
    coffee = {
    name:"caramel-latte",
    color: "tan",
    pic: "images/cold-brew.jpg",
    alt: "A picture of caramel latte",
    day: "Saturday",
    desc: `I love me some caramel`
    };

    break;

    case 7: 
    today="Sunday";
    coffee = {
    name:"  Chai Latte",
    color: "orange",
    pic: "images/chai.jpg",
    alt: "A picture of a Chai Latte",
    day: "Sunday",
    desc: `Every season is Chai Latte season`
    };

    break;

 
    default:
         today = "I don't know what day it is!";
}


document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//alert(today);
console.log(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

