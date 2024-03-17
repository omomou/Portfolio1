async function race() {
    let runner1 = false;
    let runner2 = false;
    let loser = '';

    const runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner1';
            resolve(true);
        }, 5000); 
    });

    const runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner2';
            resolve(true);
        }, 7000);
    });

    const results = await Promise.all([runner1Go, runner2Go]);
    return [results[0], results[1], loser];
}

race().then((result) => {
    const [runner1Result, runner2Result, loser] = result;
    console.log(`The loser is: ${loser}`);
});