let num = 8; // e.g.

/**
 * Create a variable called "isEven". (Do not use var.)
 * If "num" is even, "isEven" should be true.
 * Otherwise, "isEven" should be false.
 * Your answer should still work when "num" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let remainder = (num % 2)

isEven = true;
isOdd = true;

if (remainder == 0 ) {
    isEven = true;
    console.log(`${num} is even.`)
} else (remainder !== 0) { 
    isOdd = true;
    console.log(`${num} is odd.`)
}