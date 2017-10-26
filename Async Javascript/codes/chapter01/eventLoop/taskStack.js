function func1() {
    console.log('func 1');
}


function func2() {
    console.log('func 2');
}

function func3() {
    console.log('func 3');
}

function func4() {
    console.log('func 4');
}

const func = function() {
    func1();

    setTimeout(function() {
        func2();
    }, 0);

    Promise.resolve().then(func3);
    func4();
}();

console.log("end1");
console.log("end2");



// for (var d1 = new Date(); new Date() - d1　 < 2000;) {

// }