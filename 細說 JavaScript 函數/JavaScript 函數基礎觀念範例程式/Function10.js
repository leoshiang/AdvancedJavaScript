function add(a ,b) {
    arguments[1] = 10;
    return arguments[0] + b;
}

console.log(add(1, 2));