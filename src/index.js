module.exports = function toReadable(number) {
    const numberStr = number.toString();

    const ones = [
        " ",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    // zero
    if (number === 0) {
        return "zero";
    }

    // 1-19
    if (number < 20) {
        return ones[number];
    }

    // 20-99
    if (numberStr.length === 2) {
        if (numberStr[1] === "0") {
            return tens[numberStr[0]];
        } else {
            return tens[numberStr[0]] + " " + ones[numberStr[1]];
        }
    }

    // 100 - 999
    if (numberStr.length === 3) {
        if (numberStr[1] === "0" && numberStr[2] === "0") {
            return ones[numberStr[0]] + " hundred";
        } else {
            return (
                ones[numberStr[0]] +
                " hundred " +
                toReadable(Number(numberStr[1] + numberStr[2]))
            );
        }
    }
};
