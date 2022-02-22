export const getRandomNumbers = () => {
    let numbers = [];
    while (numbers.length < 9) {
        let r = Math.floor(Math.random() * 9) + 1;
        if (numbers.indexOf(r) === -1) numbers.push(r);
    }

    return numbers
}