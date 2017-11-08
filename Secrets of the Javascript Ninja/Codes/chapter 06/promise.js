// const ninjaPromise = new Promise((resolve, reject) => {
//     //resolve("leo");
//     //reject("an error");
// })

// ninjaPromise.then(ninja => {
//     console.log(ninja);
// }, err => { console.log("error") })

console.log("at code start");

var ninjaDelayedPromise = new Promise((resolve, reject) => {
    console.log("executor");

    setTimeout(() => {
        console.log("Resolving......");
        resolve("leo pink")
    }, 1000);
});


ninjaDelayedPromise.then(ninja => {
    console.log("value is " + ninja);
});

ninjaDelayedPromise.then(ninja => {
    console.log("value2 is " + ninja);
})


const ImmediatePromise = new Promise((resolve, reject) => {
    console.log("Immediate executor");
    resolve("steve vai");
});

ImmediatePromise.then(ninja => {
    console.log("Immediate value " + ninja);
});