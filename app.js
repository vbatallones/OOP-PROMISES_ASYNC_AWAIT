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

console.log(adam.name)

function NBAPlayer(name, team, threePointShooter) {
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;

    //no need to return because it is already return the object by the syntax
    // this.
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true)

console.log(steph)
console.log(steph.name)

//-----------------------------------------

function Cars (name, brand, allWheelDrive) {
    this.name = name;
    this.brand = brand;
    this.allWheelDrive = allWheelDrive
}

let toyota = new Cars("FRZ-86", "Toyota", false)

console.log(toyota)
console.log(toyota.brand)
console.log(toyota.allWheelDrive)