// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// }


// console.log('A jogadora ' + player.name + player.lastName + " tem " + player.age + " de idade");

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log(player['bestInTheWorld'].length);

// console.log(player.medals.golden + player.medals.silver)


// let names = {

//     person1: 'João',

//     person2: 'Maria',

//     person3: 'Jorge',

//   };

//   for(let name in names){
//         console.log(names[name]);
//   }



let car = {

    model: 'A3 Sedan',

    manufacturer: 'Audi',

    year: 2020

};


for (let cars in car) {
    console.log(cars, car[cars]);
}