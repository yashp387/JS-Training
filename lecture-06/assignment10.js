function simulateTask(name, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${name} is finished.`);
            resolve(name)
        }, delay)
    })
}

// Part A - async/await
async function asyncTasks() {
    console.time("Async-Block");

    await simulateTask("Task 1", 1000)
    await simulateTask("Task 2", 1500)
    await simulateTask("Task 3", 2000)
    console.timeEnd("Async-Block");
}

// Part B - Promise.all()
async function promiseTasks() {
    console.time("Promise-Block");

    await Promise.all([
        simulateTask("Task 4", 1000),
        simulateTask("Task 5", 1500),
        simulateTask("Task 6", 2000)
    ])

    console.timeEnd("Promise-Block");
}
asyncTasks()
promiseTasks()