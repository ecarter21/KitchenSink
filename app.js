let name = "Emily Carter";
const states = 50;
let result = (5 + 4);
console.log(result);
// 9 is input into the console  

function sayHello() {
    alert('Hello World!');

}
// displays pop up window alert

sayHello()

function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ", you aren't old enough to view this page!");
    }
}
checkAge('Charles', 21)
checkAge('James', 18)
checkAge('Abby', 27)
checkAge('John', 17)

let favoriteVeggies = ['squash', 'brussel sprouts', 'corn', 'green beans', 'asparagus'];


for (let i = 0; i < favoriteVeggies.length; ++i) {
    console.log(favoriteVeggies)

}

let pet = {
    name: 'Ham',
    breed: 'Bully'
};
console.log(pet);
