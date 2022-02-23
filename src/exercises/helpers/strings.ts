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

export const getRandomShapes = () => {
    let shapes = ['triangle','square','rectangle','circle','rhomb','parallelogram','trapeze'];
    var j, x, i;
    for (i = shapes.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = shapes[i];
        shapes[i] = shapes[j];
        shapes[j] = x;
    }
    return shapes;
}