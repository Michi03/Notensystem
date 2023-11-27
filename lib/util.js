function printGrade(grade) {
    wholePart = Math.floor(grade);
    decimalPart = Math.ceil((grade - wholePart) * 10);
    console.log(wholePart, decimalPart);
    if (decimalPart < 3)
        return wholePart;
    if (decimalPart < 7)
        return String(wholePart) + '-';
    else
        return String(wholePart + 1) + '+';
}

module.exports = { printGrade };