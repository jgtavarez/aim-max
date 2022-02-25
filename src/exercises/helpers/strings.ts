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
    let shapes = ['triangle', 'square', 'rectangle', 'circle', 'rhomb', 'parallelogram', 'trapeze'];
    var j, x, i;
    for (i = shapes.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = shapes[i];
        shapes[i] = shapes[j];
        shapes[j] = x;
    }
    return shapes;
}

export const getSplitWords = () => {
    let lyric = 'Sometimes I lay under the moon and thank God I am breathing then I pray do not take me soon because I am here for a reason sometimes in my tears I drown but I never let it get me down so when negativity surrounds I know some day it will all turn around because. All my life I have been waiting for I have been praying for the people to say that we do not wanna fight no more there will be no more war and our children will play'

    return lyric.split(' ');
}