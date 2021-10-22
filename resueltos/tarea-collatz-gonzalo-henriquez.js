function collatz(number) {
    let topNumbers = [];

    execute(topNumbers, number);

    return {
        number,
        topNumbers,
        length: topNumbers.length
    };
}

function execute(topNumbers, number) {
    if (isPar(number)) {
        number = reduceToImpar(number);
    }
    else {
        number = applyFormula(number);
    }

    addTopNumber(topNumbers, number);

    if (number > 1) {
        execute(topNumbers, number);
    }
}

function applyFormula(number) {
    return (3 * number) + 1;
}

function isPar(number) {
    return number % 2 === 0;
}

function reduceToImpar(value) {
    if (isPar(value)) {
        value = reduceToImpar(value);
    }
    return value;
}

function addTopNumber(topNumbers, value) {
    topNumbers.push(value);
}

// ***************************************************************

const quantity = 10;
let results = [];

for (let i = 0; i <= quantity; i++) {
    results.push(collatz(i));
}

const resultsOrdered = results.sort((a, b) => {
    return a.length > b.length ? 1 : a.length < b.length ? -1 : 0;
});

resultsOrdered.forEach((result) => {
    console.log(`[${result.number}][${result.length}] -> ${JSON.stringify(result.topNumbers)}`)
});