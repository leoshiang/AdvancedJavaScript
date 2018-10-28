function callFunction(someFunction, someArgument) {
    return someFunction(someArgument);
}

function add10(num) {
    return num + 10;
}

var result = callFunction(add10, 10);
console.log(result);

function greeting(name) {
    return "Hello, " + name;    
}

var message = callFunction(greeting, "Leo Shiang");
console.log(message);