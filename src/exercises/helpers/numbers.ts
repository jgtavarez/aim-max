export const getRandomNumbers = (amount: number, start: number, end: number) => {
    let numbers = [];
    while (numbers.length < amount) {
        let r = Math.floor(Math.random() * end) + start;
        if (numbers.indexOf(r) === -1) numbers.push(r);
    }

    return numbers
}