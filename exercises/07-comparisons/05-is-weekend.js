let day = "Saturday";

/**
 * Create a variable called "isWeekend". (Do not use var.)
 * If "day" is Saturday or Sunday, "isWeekend" should be true.
 * Otherwise "isWeekend" should be false.
 * You must use either the logical and (&&) or the logical or (||) to solve this problem.
 * Your answer should still work when "day" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let isWeekend;

if (day == "Saturday" || day == "Sunday") {
    isWeekend = true; 
    console.log("Congratulations, You've made it to the weekend!")
} else if (day !== "Saturday" || day !== "Sunday") {
    isWeekend = false;
    console.log("not d weekn.")
}