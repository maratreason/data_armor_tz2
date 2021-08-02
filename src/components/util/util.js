export function getRandomColor(inputColors) {
    const randomIndex = Math.floor(Math.random() * inputColors.length);
    return inputColors[randomIndex];
}

export function getSortedColor(inputColors, index) {
    return inputColors[index];
}

export function splitRgb(rgb) {
    return ((rgb.split("(")[1]).split(")")[0]).split(", ")[0];
}