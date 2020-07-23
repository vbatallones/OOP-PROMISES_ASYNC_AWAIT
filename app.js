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
const shoes = {
    name: "jordan 1",
    fake: false,
    artist: 'Travis Scott'
}

const shoesTwo = {
    name: 'Adidas',
}

shoesTwo.__proto__ = shoes;
console.log(shoesTwo)

console.log(shoesTwo.fake)


shoesTwo.fake = true;
console.log(shoesTwo.fake)