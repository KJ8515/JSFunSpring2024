/**
 * Create a function called "countNumberOfDigits".
 * Given an integer, it should return the number of digits in an integer.
 *
 * @param {int} num
 * @returns {int} the number of digits
 *
 * @example countNumberOfDigits(5000); // 4
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const countNumberOfDigits = (num) => { 
    let str = `${num}`;
    str = str.replace(".","");
    return str.length;
};

console.log(countNumberOfDigits("5638576567677776895677657868965785467854678546786546773487"));
