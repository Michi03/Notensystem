function printGrade(grade) {
    let wholePart = Math.floor(grade);
    let decimalPart = Math.ceil((grade - wholePart) * 10);
    if (decimalPart < 3)
        return wholePart;
    if (decimalPart < 7)
        return String(wholePart) + '-';
    else
        return String(wholePart + 1) + '+';
}

function computeAverageGrade(grades) {
    let gradeSum = 0;
    for (let i = 0; i < grades.length; i++)
        gradeSum += grades[i]['grade'];
    return gradeSum / grades.length;
}


module.exports = {
    printGrade,
    computeAverageGrade
};