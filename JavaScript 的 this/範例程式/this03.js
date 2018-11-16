function A() {
    function B() {
        console.log(this === window);
    }

    B();
}

A();