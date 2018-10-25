function SpecialArray() {
    var instance = new Array();
    instance.push.apply(instance, arguments);
    instance.toPipedString = function() {
        return this.join("|");
    };
    return instance;
}
var colors = new SpecialArray("red", "blue", "green");
console.log(colors.toPipedString());