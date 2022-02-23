export const getRandomColors = () => {
    let colors = ['black', 'blue', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];
    var j, x, i;
    for (i = colors.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = colors[i];
        colors[i] = colors[j];
        colors[j] = x;
    }
    return colors;
}