var obj = {};

var someFunc = function () {
    console.log(this === obj);

    // IIFE 
    (function () {
        console.log("IIFE this");
        console.log(this); // Output: Window object
        console.log("IIFE");
    })()
};

obj.func = someFunc;

obj.func();