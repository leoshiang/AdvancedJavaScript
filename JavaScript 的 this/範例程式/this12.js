function run() {
    console.log(this);
}

var car = {
    maker: 'nissan',
    model: 'tiida'
}

var carRun = run.bind(car);

carRun();