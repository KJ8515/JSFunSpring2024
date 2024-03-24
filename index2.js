const addingStrings = (a, b, callback) => {
    return a + b
};

const helloWorld = (a,b) => {
    return a + b
};

const print = addingStrings("hello,", " is this thing on?", helloWorld);
console.log(print);