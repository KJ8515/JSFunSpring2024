let age = 20; // e.g.

/**
 * Create a variable called "isTeenager". (Do not use var.)
 * If "age" is greater than 12, but less than 20, "isTeenager" should be true.
 * Otherwise, "isTeenager" should be false.
 * You must use either the logical and (&&) or the logical or (||) to solve this problem.
 * Your answer should still work when "age" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let isTeenager;

if (age > 12 && age < 20) {
    isTeenager = true;
    console.log("you are a teen");
} if (age <=12 || age >=20) { 
    isTeenager = false;
    console.log("you are not a teen.");
}