//Object Oriented Programming

//Prototypal Inheritance
// const dog = {
//     name: "Michael",
//     goodBoy: true,
//     gender: "girl"
// }; 

// const dogTwo = {};

// dogTwo.__proto__ = dog;

// console.log(dogTwo);
// console.log(dog);

// // console.log(dogTwo.goodBoy);
// console.log(dogTwo.name)
//------------------------------------


// const dog = {
//     name: "Michael",
//     goodBoy: true,
//     gender: "girl"
// }; 

// const dogTwo = {
//     name: "Rocco"
//     color: "Brown" //the object brown in DOGTWO will not inherit by the DOG.
// };                 

// dogTwo.__proto__ = dog; //unless we reverse this like dog.__proto__ = dogTwo

// console.log(dogTwo);
// console.log(dog);

// // console.log(dogTwo.goodBoy);
// console.log(dogTwo.name)

//----------------------------------------
//my own class
// const shoes = {
//     name: "jordan 1",
//     fake: false,
//     artist: 'Travis Scott'
// }

// const shoesTwo = {
//     name: 'Adidas',
// }

// shoesTwo.__proto__ = shoes;
// console.log(shoesTwo)

// console.log(shoesTwo.fake)


// shoesTwo.fake = true;
// console.log(shoesTwo.fake)

//---------------------------------------------

//CONSTRUCTOR FUNCTION

//WHENEVER YOU USE CONSTRUCTION FUNCTION THE FIRST
//CHAR NEEDS TO BE CAPITALIZE
//this. is referring to the user
//everytime we have a function we have to return something
function User(name) {
    //
    this.name = name;

    //return this
}

let adam = new User('Adam');

// console.log(adam.name)

function NBAPlayer(name, team, threePointShooter) {
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;

    //no need to return because it is already return the object by the syntax
    // this.
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true)

// console.log(steph)
// console.log(steph.name)

//-----------------------------------------

function Cars (name, brand, allWheelDrive) {
    this.name = name;
    this.brand = brand;
    this.allWheelDrive = allWheelDrive
    this.intro = function() {
        console.log("This car is " + this.name)
    }
}

let toyota = new Cars("FRZ-86", "Toyota", false)
let subaru = new Cars("WRX", "Subaru", true)
// console.log(toyota)
// console.log(toyota.brand)
// console.log(toyota.allWheelDrive)
// console.log(subaru);
// console.log(subaru.brand);
// // console.log(subaru.allWheelDrive);
// toyota.intro()
// subaru.intro()


//---------------------------------------------

//CLASS

//keyword is "class"
//everything you have to invoke should be inside of the "class"
// class Car {
//     constructor(year, make, model, color) {
//         this.year = year;
//         this.make = make;
//         this.model = model;
//         this.color = color;
//     }

//     drive() {
//         console.log('Vroom');
//     } //dont forget to always use the "this" if you want to call it.
//     intro() {
//         console.log('This car is a '+ this.make + " " + this.model + "!")
//     }
// }

// let tesla = new Car(2020, 'Tesla', 'Model S', 'red');
// console.log(tesla)

// tesla.drive()
// tesla.intro()

// class GitHubProfile {
//     constructor(username, name, url) {
//         this.username = username;
//         this.name = name;
//         this.url = url;
//     }
//     intro() {
//         console.log(`My name is ${this.name} and my username is @${this.username}`)
//     }
// }

// fetch('https://api.github.com/users/vbatallones')

// .then(response => {
//     return response.json();
// })
// .then(data => {
//     let gitHubUrl = data.url;
//     let gitHubName = data.name;
//     let gitHubUserName = data.login

//     let levin = new GitHubProfile(gitHubUserName, gitHubName, gitHubUrl);
//     console.log(levin)

//     levin.intro()
// })


//--------------------------------------------

//PROMISE

// ES5: Part 1

// let isMomHappy = false;

// // Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             let reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );

//console.log(willIGetNewPhone)
//the you are going to wait by ".then" and see for the result
// willIGetNewPhone.then(result => {
//     console.log(result)
// })

// let goToBed = true;
// //this is already a function so we dont need to do the function
// let willIGotoBed = new Promise((resolve, reject) => {
//     if(goToBed) {
//         let bed = {
//             pillow: 'hug',
//             blanket: 'wrap'
//         };
//         resolve(bed);
//     } else {
//         reject('GO STUDY')
//     }
// });

// willIGotoBed.then(result => {
//     console.log(result)
// });


//----------------------------------------

//ASYNC

//keyword is "async" without the quotes.

// // the fat-arrow will automatically return the response.json(). same as below.
//     fetch(endpoint).then(response => response.json()); 
//  //they are the same from above.
//     fetch(endpoint)
//     .then(response => {
//         return response.json();
//     })

//removing the 'await' will give you the Promise object data
//with the await it will give you the actual data
//you cant just use the await anywhere. it should be always inside the "async function!"
async function printUsers() {
    const endpoint = 'https://api.github.com/users/vbatallones';
    let users = await fetch(endpoint).then(response => response.json());
    console.log(users)
    
}
printUsers();


async function printFacebook () {
    let facebookEndPoint = 'https://api.github.com/users/facebook';
    let levin = await fetch(facebookEndPoint).then(response => response.json());
  
    console.log(levin.login)
}
printFacebook();