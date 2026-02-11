function wait(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Message afer " + ms+ "ms");
            resolve();
        }, ms)
    })
}


wait(2000)