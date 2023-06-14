/*
    These are the items we believe we need to produce for each day's coffee.


    pic - img src
    alt - the alt tag for the image
    color - color to match the image
    desc - description of coffee/bubble tea
    name - name of the coffee
    day - the day of the week


*/
/* Created a coffe function to insert format of items we have in our switch */
function coffeeTemplate(){
    return `<p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}: </strong> The Hero of The Day is <strong class="feature">${coffee.name}</strong>,
             </p>
                <p>
                ${coffee.desc}
                </p>


               
          <h3><b> Rating and why you should watch: </b><h3>


            <p>
            <i>${coffee.rate} </i> -
            </p>


            <p>
            ${coffee.why}
            </p>
    `;
       
        }


   
    let myDate = new Date();
   
    let today = myDate.getDay();
   
    let coffee = "";


    let aboutMe = "";
   
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
                name:"Edward Elric",
                color: "firebrick",
                pic: "images/edward.jpg",
                alt: "A picture of Edward Elric",
                day: "Full Metal Alchemist",
                rate: "10",
                why: "My favorite anime of all time! The concepts of the villians were well thought out. Everyone has their own motives and for the most part, they're all really interesting. It starts off slow, but just puts the foot on the gas once the actions picks up. Espicially if you're new to anime, this is a great start.",
                desc: `"You can't gain anything without losing something first. Although, if you can endure that pain and walk away from it, you'll find that you now have a heart strong enough to overcome any obstacle. Yeah, a heart made fullmetal"`
            };
        break;
       
        case 2:
             today="Tuesday";
             coffee = {
                name:"Yusuke Urameshi",
                color: "springgreen ",
                pic: "images/yuskue.png",
                alt: "A picture of a Yusuke",
                day: "Yu Yu Hakusho",
                rate: "8.1",
                why: "Yusukue is one of those mc's where they're really cool and still goofy at the same time. Has a really good supporting cast where the interactions feel genuine and not forced. Plus, the Spirit Gun is pretty damn cool",
                desc: `"So maybe I can't defend against attacks from multiple angles, but sometimes a good defense is just kick ass!"`
            };
   
        break;
   
        case 3:
             today="Wednesday";
             coffee = {
                name:"Son Goku",
                color: "dodgerblue",
                pic: "images/goku2.jpg",
                alt: "A picture of a Son Goku",
                day: "Dragon Ball Z",
                rate: "6.0",
                why: "Pains me to give the series such a low score, but it is slower paced. Nostalgia has to be one of the biggest reason why I still watch it today. However, anyone who knows about Dragon Ball Z, has at one point in their life tried to do a Kamehameha and I think that alone is a good reason to watch.",
                desc: `""...And this is to go... EVEN FURTHER BEYOND!" *Cue Three Minute Transformation`
            };
   
        break;
   
        case 4:
        today="Thursday";
        coffee = {
           name:"Ichigo Kurosaki",
           color: "black",
           pic: "images/Bleach.jpg",
           alt: "A picture of a Madara",
           day: "Bleach",
           rate: "8.5",
           why: "The drippiest cast of all time ever. Kubo really popped off on all the character designs and transformations. Ichigo's main theme always gets me hyped and I know something epic is about to happen when it comes on. This is one of those animes where you want to flesh out everybody's abilities and how they work.",
           desc: `"Zangetsu, I won't ask you to 'lend me your power' any more. And I won't tell you 'don't get in my way'. I won't even say 'let us fight together'. I'll fight for myself. Thank you, Zangetsu. You are me"`
       };
   
        break;
   
        case 5:
        today="Friday";
        coffee = {
        name:"Kento Nanami",
        color: "linen",
        pic: "images/nanmi.jpg",
        alt: "A picture of a Nanami",
        day: "Jujutsu Kaisen",
        rate: "9.3",
        why: "If you like watching villians get jumped, this is the anime for you. One of the best new gen animes to come out and keeps you hooked after the first season. I won't spoil anything, but Gege(author) decided to give nonstop action once Shibuya hits. Plus there are barely any training arcs!",
        desc: `"Being a child is by no means a crime"`
        };
   
        break;
   
        case 6:
        today="Saturday";
        coffee = {
        name:"Hinata Shoyo",
        color: "darkorange",
        pic: "images/shoyo.jpg",
        alt: "A picture of Hinata",
        day: "Haikyuu",
        rate: "8.7",
        why: "It feels like you're just watching a bunch of high schoolers grow and you root for every character you encounter... at least for me. Every character is unique and has their own little quirks. Hinata is also a really great character to encourage people to strive for a dream if you believe in it and give it >100%.",
        desc: `"I'm Hinata Shoyo, from the concrete"'`
        };
   
        break;
   
        case 7:
        today="Sunday";
        coffee = {
        name:" Simon The Digger",
        color: "mediumturquoise ",
        pic: "images/that mf.jpg",
        alt: "A picture of Simon The Digger",
        day: "Gurren Lagaan",
        rate: "9.0",
        why: "HYPE HYPE HYPE. Just who the hell do you think I am? If you're the type of person who gets off their chair when something gets them hyped, this is the anime for you!",
        desc: `"And that's Tengen Toppa! That's Gurren Lagann!! My drill is the drill... that creates the heavens!!!"`
        };
   
        break;
   
     
        default:
             today = "I don't know what day it is!";
    }
   


    document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
    document.getElementsByClassName("about-me").innerHTML
    //alert(today);
    console.log(coffee);
    document.querySelector("html").style.backgroundColor = coffee.color;
