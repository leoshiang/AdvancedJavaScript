function sum(a, b) {
    return a + b;
}
console.log(sum(1,2));

var total = sum;
console.log(total(1,2));

sum = null;
console.log(total(1,2));