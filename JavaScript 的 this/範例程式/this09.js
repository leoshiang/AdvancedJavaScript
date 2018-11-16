function run() {
    console.log(this.model);
}

var car = {
    model: 'nissan',
    run: run
}

car.run();