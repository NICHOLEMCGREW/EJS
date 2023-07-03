// // while and do loops

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result)

// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while(!yourName);
// console.log(yourName);

// for (let current = 20; ; current = current + 1) {
//     if (current % 7 == 0) {
//         console.log(current);
//         break;
//     }
// }

// switch (prompt("What is the weather like?")) {
//     case "rainy":
//         console.log("Remember to bring an unbrella.");
//         break;
//     case "sunny":
//         console.log("Dress lightly.");
//     case "cloudy":
//         console.log("Go outside.");
//     default:
//         console.log("Unknown weather type!");
//         break;
// }

// Looping a triangle

for (let i = '#'; i.length <= 7; i = i+ '#') {
    console.log(i)
}

// FizzBuzz

// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }

// Chessboard

// set variables
// let size = 8;
// let board = "";

// // y represents the vertical axis/rows, and creates the loops for the rows.

// for (let y = 0; y < size; y++) {

//     // x represents the horizontal axis/columns, and creates the loop for the columns. 

//     // when we set x + y, every second number will be divisible by 2,
//     // every second character will execute teh " " space character, 
//     // each new line will alternate between an even/odd number
//     for (let x = 0; x < size; x++) {

//         if ((x + y) % 2 == 0) {
//             board += " ";

//     // for every other number not divisible by 2, "#" will be executed

//         } else {
//             board += "#"
//         }
//     }
//     // create new line
//     board += "\n";
// }
// // console.log(board)

// let size2 = 8;
// let board2 = "";

// for (let y = 0; y < size2; y++) {
//     for (let x = 0; x < size2; x++) {
//         if ((x + y) % 2 == 0) {
//             board2 += " ";
//         } else {
//             board2 += "#"
//         }
//     }
//     board2 += "\n";
// }
// // console.log(board2)

// let size3 = 8;
// let board3 = "";

// for (let y = 0; y < size3; y++) {
//     for (let x = 0; x < size3; x++) {
//         if ((x + y) % 2 == 0) {
//             board3 += " ";
//         } else {
//             board3 += "#";
//         }
//     }
//     board3 += "\n"
// }
// console.log(board3)

// let size4 = 8;
// let board4 = "";

// for (let y = 0; y < size4; y++) {
//     for (let x = 0; x < size4; x++) {
//         if ((x + y) % 2 == 0) {
//             board4 += " "
//         } else {
//             board4 += "#"
//         }
//     }
//     board4 += "\n"
// }
// // console.log(board4)

// let size5 = 8;
// let board5 = "";

// for (let y = 0; y < size5; y++) {
//     for (let x = 0; x < size5; x++) {
//         if ((x + y) % 2 == 0) {
//             board5 += " ";
//         } else {
//             board5 += "#";
//         } 
//     }
//     board5 += "\n"
// }
// console.log(board5)


let size = 8; 
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " "
        } else {
            board += "#";
        }
    }
    board += "\n"
}
console.log(board)


let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#"
        }
    }
    board += "\n"
}
console.log(board)

Chapter 3
Functions

const square = function(x) {
    return x * x;
};
console.log(square(12));

