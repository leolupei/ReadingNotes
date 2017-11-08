const promise = new Promise((resolve, reject) => {
    undeclaredVariable++;

})

promise.then(() => console.log("success"), error => {
        console.log("fail1")
    })
    .catch(() =>
        console.log("fail2"));