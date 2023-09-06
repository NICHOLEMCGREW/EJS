// // // while and do loops

// // let result = 1;
// // let counter = 0;
// // while (counter < 10) {
// //     result = result * 2;
// //     counter = counter + 1;
// // }
// // console.log(result)

// // let yourName;
// // do {
// //     yourName = prompt("Who are you?");
// // } while(!yourName);
// // console.log(yourName);

// // for (let current = 20; ; current = current + 1) {
// //     if (current % 7 == 0) {
// //         console.log(current);
// //         break;
// //     }
// // }

// // switch (prompt("What is the weather like?")) {
// //     case "rainy":
// //         console.log("Remember to bring an unbrella.");
// //         break;
// //     case "sunny":
// //         console.log("Dress lightly.");
// //     case "cloudy":
// //         console.log("Go outside.");
// //     default:
// //         console.log("Unknown weather type!");
// //         break;
// // }

// // Looping a triangle

// for (let i = '#'; i.length <= 7; i = i+ '#') {
//     console.log(i)
// }

// // FizzBuzz

// // for (let i = 1; i <= 100; i++) {
// //     if (i % 15 === 0) {
// //         console.log('FizzBuzz');
// //     } else if (i % 3 === 0) {
// //         console.log('Fizz');
// //     } else if (i % 5 === 0) {
// //         console.log('Buzz')
// //     } else {
// //         console.log(i)
// //     }
// // }

// // Chessboard

// // set variables
// // let size = 8;
// // let board = "";

// // // y represents the vertical axis/rows, and creates the loops for the rows.

// // for (let y = 0; y < size; y++) {

// //     // x represents the horizontal axis/columns, and creates the loop for the columns. 

// //     // when we set x + y, every second number will be divisible by 2,
// //     // every second character will execute teh " " space character, 
// //     // each new line will alternate between an even/odd number
// //     for (let x = 0; x < size; x++) {

// //         if ((x + y) % 2 == 0) {
// //             board += " ";

// //     // for every other number not divisible by 2, "#" will be executed

// //         } else {
// //             board += "#"
// //         }
// //     }
// //     // create new line
// //     board += "\n";
// // }
// // // console.log(board)

// // let size2 = 8;
// // let board2 = "";

// // for (let y = 0; y < size2; y++) {
// //     for (let x = 0; x < size2; x++) {
// //         if ((x + y) % 2 == 0) {
// //             board2 += " ";
// //         } else {
// //             board2 += "#"
// //         }
// //     }
// //     board2 += "\n";
// // }
// // // console.log(board2)

// // let size3 = 8;
// // let board3 = "";

// // for (let y = 0; y < size3; y++) {
// //     for (let x = 0; x < size3; x++) {
// //         if ((x + y) % 2 == 0) {
// //             board3 += " ";
// //         } else {
// //             board3 += "#";
// //         }
// //     }
// //     board3 += "\n"
// // }
// // console.log(board3)

// // let size4 = 8;
// // let board4 = "";

// // for (let y = 0; y < size4; y++) {
// //     for (let x = 0; x < size4; x++) {
// //         if ((x + y) % 2 == 0) {
// //             board4 += " "
// //         } else {
// //             board4 += "#"
// //         }
// //     }
// //     board4 += "\n"
// // }
// // // console.log(board4)

// // let size5 = 8;
// // let board5 = "";

// // for (let y = 0; y < size5; y++) {
// //     for (let x = 0; x < size5; x++) {
// //         if ((x + y) % 2 == 0) {
// //             board5 += " ";
// //         } else {
// //             board5 += "#";
// //         } 
// //     }
// //     board5 += "\n"
// // }
// // console.log(board5)


// let size = 8; 
// let board = "";

// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0) {
//             board += " "
//         } else {
//             board += "#";
//         }
//     }
//     board += "\n"
// }
// console.log(board)


// let size = 8;
// let board = "";

// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0) {
//             board += " ";
//         } else {
//             board += "#"
//         }
//     }
//     board += "\n"
// }
// console.log(board)

// Chapter 3
// Functions

// const square = function(x) {
//     return x * x;
// };
// console.log(square(12));

// const makeNoise = function() {
//     console.log("Pling!");
// };

// makeNoise();

// const power = function(base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// }
// console.log(power(2, 4));

// let x = 10;
// if (true) {
//     let y = 20;
//     var z = 30;
//     console.log(x + y + z);
// }
// console.log(x + z);

// const halve = function(n) {
//     return n / 2;
// };

// let n = 10;
// console.log(halve(100));
// console.log(n);

// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//         let ingreientAmount = amount * factor;
//         if (ingreientAmount > 1) {
//             unit += "s";
//         }
//         console.log(`${ingreientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
// }
// hummus(3)

// console.log("The future says:", future());

// function future() {
//     return "You'll never have flying cars";
// }

// const power2 = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// }
// console.log(power2(2, 2))

// const square2 = x => x * x;

// const horn = () => {
//     console.log("Toot");
// };
// horn();

// function greet(who) {
//     console.log('hello ' + who);
// }
// greet('Harry');
// console.log("Bye");

// function minus(a, b) {
//     if (b === undefined) {
//         return -a;
//     } else {
//         return a - b;
//     }
// }
// console.log(minus(10));
// console.log(minus(10, 5))

// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor) {
//     return number => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(5))

// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > history) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) || 
//             find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }
// console.log(findSolution(24))


// function printFarmInventory(cows, chickens, pigs) {
//     let cowString = String(cows);
//     while (cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} Cows`);
//     let chickenString = String(chickens);
//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
//     let pigString = String(pigs);
//     while (pigString.length < 3) {
//         pigString = "0" + pigString;
//     }
//     console.log(`${pigString} Pigs`);
// }
// printFarmInventory(7, 11, 12);

// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
// }
// printFarmInventory(7, 11, 3)

// The lycanthrope’s log

let journal = [];

function addEntry(events, squirrel) {
    journal.push([events, squirrel]);
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);


    function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
    }
    
    // console.log(tableFor("pizza", journal));

    // Array loops

    // for (let entry of journal) {
    //     console.log(`${entry.events.length} events.`);
    //   }

      function journalEvents(journal) {
        let events = [];
        for (let entry of journal) {
            for (let event of entry.events) {
                if (!events.includes(event)) {
                    events.push(event);
                }
            }
        }
        return events;
      }

    //   console.log(journalEvents(journal))

    let todoList = [];
    function remember(task) {
        todoList.push(task);
    }
    function getTask() {
        return todoList.shift();
    }
    function rememberUrgently(task) {
        todoList.unshift(task);
    }

    function remove(array, index) {
        return array.slice(0, index)
        .concat(array.slice(index + 1));
    }

    let sentance = "Secretarybirds specialize in stomping";
    let words = sentance.split(" ");
    // console.log(words);
    // console.log(words.join(". "))

    // Rest parameters

    function max(...numbers) {
        let result = -Infinity;
        for (let number of numbers) {
            if (number > result) result = number;
        }
        return result
    }

    let nums = [4, 5, 7];
    // console.log(max(...nums))

let wordsss = ["never", "fully"]; 
// console.log(["will", ...wordsss, "understand"])

function randomPoint(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
// console.log(randomPoint(2));

// Destructuring

// JSON

let string = JSON.stringify({squirrel: false,
    events: ["weekend"]});


//     Separating interface from implementation is a great idea. It is usually called encapsulation.

// Methods

let rabbit = {};
rabbit.speak = function(line) {
    // console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");

function speak(line) {
    // console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + 
                   "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.")

speak.call(hungryRabbit, "Burp!")

function normalize() {
    // console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5})

let protoRabbit = {
    speak(line) {
        // console.log(`The ${this.type} rabbit says "${line}"`);
    }
}
let killerRabit = Object.create(protoRabbit);
killerRabit.type = "killer";
killerRabit.speak("SKREEE!")

// Classes

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    // console.log(`The ${this.type} rabbit says '${line};`);
};

let weirdRabbit = new Rabbit('weird');

// Class notation

class Rabbit2 {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit2 says '${line}'`)
    }
}

let killerRabbit = new Rabbit('killer');
let blackRabbit = new Rabbit('black');

killerRabbit.speak('hi')


let object = new class { getWord() { return "hello"; } };
// console.log(object.getWord());

// Overriding derived properties

Rabbit.prototype.teeth = 'small';
// console.log(killerRabbit.teeth)
killerRabbit.teeth = 'long, sharp, and bloody';
// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);
// console.log(Rabbit.prototype.teeth);

// Maps

// let ages = {
//   Boris: 39,
//   Liang: 22,
//   Júlia: 62
// };

// console.log(`Júlia is ${ages["Júlia"]}`);
// console.log("Is Jack's age known?", "Jack" in ages);
// console.log("Is toString's age known?", "toString" in ages);

let ages = new Map();
ages.set('Boris', 39);
ages.set('Liang', 22);
ages.set('Júlia', 62);

// console.log(`Júlia is ${ages.get("Júlia")}`);
// console.log("Is Jack's age known?", ages.has("Jack"));
// console.log(ages.has("toString"));

// Polymorphism

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
}

// console.log(String(blackRabbit))

// Symbols

let sym = Symbol('name');
// console.log(sym == Symbol('name'))

Rabbit.prototype[sym] = 55;
// console.log(blackRabbit[sym])

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

// console.log([1, 2].toString());
// console.log([1, 2][toStringSymbol]());

let stringObject = {
    [toStringSymbol]() { return 'a jute rope'; }
};

// console.log(stringObject[toStringSymbol]());

// The iterator interface


let okIterator = 'OK'[Symbol.iterator]();
// console.log(okIterator.next());
// console.log(okIterator.next());
// console.log(okIterator.next());

 class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
 }

 class MatrixInterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true};

        let value = {x: this.x, 
                      y: this.y,
                    value: this.matrix.get(this.x, this.y)};
        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}
Matrix.prototype[Symbol.iterator] = function() {
   return new MatrixInterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, value} of matrix) {
//    console.log(x, y, value);
}


// Getters, setters, and statics

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};

// console.log(varyingSize.size)
// console.log(varyingSize.size)

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) /1.8;
    }
    
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
// console.log(temp.fahrenheit);
temp.fahrenheit = 86;
// console.log(temp.celsius);

// Inheritance
// The new class inherits properties and behavior from the old class.

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
// console.log(matrix.get(2, 3));

// The instanceof operator
// console.log(
    // new SymmetricMatrix(2) instanceof SymmetricMatrix);
  // → true
//   console.log(new SymmetricMatrix(2) instanceof Matrix);
  // → true
//   console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
  // → false
//   console.log([1] instanceof Array);
  // → true

  