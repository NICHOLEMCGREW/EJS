// Chapter 2

// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// // → 3
// Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


// Chapter 3

// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.


        function min(a, b) {
            return Math.min(a, b)
        }
        // console.log(min(20, 3))


// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

        function isEven(num) {
            if (num < 0) {
                return isEven(-num);
            } else if (Number(num % 2 == 0)) {
                return true
            } else {
                return false
            }
        }
    
// console.log(isEven(6))

// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

        function countBs(str) {
            let count = 0;
            for (let i = 0; i < str.length; i++)
            if (str.charAt(i) === "B") {
                count += 1;
            }
            return count
        }
        // console.log(countBs('helooooo there beautiful BBBB'))

        // Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

        function countChar(str2, letter) {
            let count = 0;
            for (let i = 0; i < str2.length; i++) {
                if (str2.charAt(i) === letter) {
                    count += 1;
                }
                return count;
            }
        }

        // console.log(countChar("kakkerlak", "k"));

// The sum of a range       

            // const range = (x,y,z) =>
            // x > y ? [] : [x, ...range(x + 1, y)];

            // console.log(range(1,4,-1)); 

// let arr = [1, 3, 5, 6];

// function sumArr() {
//     const sum = arr.reduce((acc, curr) => acc + curr, 0);
//     return sum;
// }
// console.log(sumArr(range(1, 10)))

function range(start, end, increment) {
    let result = [];
    if (increment == undefined) {
        increment = 1;
    }
    numLoops = Math.abs((end - start) / increment) + 1;
    for (let i = 0; i < numLoops; i++) {
        result.push(start);
        start += increment;
    }
    return result;
}

function sum(numArray) {
    let total = 0;
    numLoops = numArray.length;
    for (let i = 0; i < numLoops; i++) {
        total += numArray[i];
    }
    return total;
}

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55

// Reversing an array

function reverseArray() {
    const arr = ["A", "B", "C"];
    return arr.reverse();
}
// console.log(reverseArray())

function reverseArrayInPlace() {
    let newArr = [];
    let arrayValue = [1, 2, 3, 4, 5]; 
    while (arrayValue.length) {
        newArr.push(arrayValue.pop())
    }
    return newArr;
}
// console.log(reverseArrayInPlace())

function reverse(array) {
    let output = [];
    while (array.length) {
        output.push(array.pop());
    }
    return output;
}

// console.log(reverse([1,2,3,4,5,6,7]));

// A list

function arrayToList( array ) {
    var list = null;
  
    for( i = array.length-1; i >= 0; i-- )
      list = { value: array[i], rest: list };
  
    return list;
  }
  
  function listToArray( list ) {
    var array = [];
  
    for( var node = list; node; node = node.rest )
      array.push( node.value );
  
    return array;
  }
  
  function prepend( value, rest ) {
    return {value: value, rest: rest};
  }
  
  function nth( list, n ) {
    // Simpler solution
    //
    // return listToArray( list )[n];
    
    // Recursive solution
    if( n === 0 )
      return list.value;
    else
      return nth( list.rest, n - 1 );
  }
  

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

// Deep comparison

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    } else if (obj1 == null || typeof obj1 != 'object' || obj2 == null || typeof obj2 != 'object') {
        return false;
    }
    let propsObj1 = 0, propsObj2 = 0;
    for ( let prop in obj1)
    propsObj1++;

    for (let prop in obj2) {
        propsObj2++;

        if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
        return false;
    }
    return propsObj1 === propsObj2;
}

let obj = {here: {is: 'an'}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));