/**
 * Created by just on 28.05.15.
 */

/*Problem 1. Exchange if greater
 Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
 As a result print the values a and b, separated by a space.*/

function big() {
    var a1 = prompt('Въведете първата стойност', '0'),
        a2 = prompt('Въведете втората стойност', '0'),
        result;
    if (a1 > a2) {
        result = a2 + ', ' + a1;
    } else {
        result = a1 + ', ' + a2;
    }
    document.getElementById('result').innerHTML = result;
}


/*Problem 2. Multiplication Sign
 Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
 Use a sequence of if operators.*/

function sing() {
    var b1 = parseInt(prompt('Въведете първата стойност', '0'), 10),
        b2 = parseInt(prompt('Въведете втората стойност', '0'), 10),
        b3 = parseInt(prompt('Въведете третата стойност', '0'), 10),
        result,
        i = 0;
    if (b1 < 0) {i += 1; }
    if (b2 < 0) {i += 1; }
    if (b3 < 0) {i += 1; }
    if (i % 2) {
        result = 'Полученото число ще е със знак <strong>-</strong>';
    } else {
        result = 'Полученото число ще е със знак <strong>+</strong>';
    }
    document.getElementById('result').innerHTML = result;
}

/*Problem 3. The biggest of Three
 Write a script that finds the biggest of three numbers.
 Use nested if statements.*/

function biger() {
    var b1 = parseInt(prompt('Въведете първата стойност', '0'), 10),
        b2 = parseInt(prompt('Въведете втората стойност', '0'), 10),
        b3 = parseInt(prompt('Въведете третата стойност', '0'), 10),
        result;
    if (b1 < b2) {
        if (b2 < b3) {
            result = 'Въведените числа са: ' + b1 + ', ' + b2 + ', ' + b3 + ' като най-голямото сред тях е: ' + b3;
        } else {
            result = 'Въведените числа са: ' + b1 + ', ' + b2 + ', ' + b3 + ' като най-голямото сред тях е: ' + b2;
        }
    } else if (b1 < b3) {
        result = 'Въведените числа са: ' + b1 + ', ' + b2 + ', ' + b3 + ' като най-голямото сред тях е: ' + b3;
    } else {
        result = 'Въведените числа са: ' + b1 + ', ' + b2 + ', ' + b3 + ' като най-голямото сред тях е: ' + b1;
    }
    document.getElementById('result').innerHTML = result;
}

/*Problem 4. Sort 3 numbers
 Sort 3 real values in descending order.
 Use nested if statements.
 Note: Don’t use arrays and the built-in sorting functionality.*/

function sortbiger() {
    var b1 = parseInt(prompt('Въведете първата стойност', '0'), 10),
        b2 = parseInt(prompt('Въведете втората стойност', '0'), 10),
        b3 = parseInt(prompt('Въведете третата стойност', '0'), 10),
        result;
    if (b1 < b2) {
        if (b2 < b3) {
            result = 'Въведените числа са: ' + b3 + ', ' + b2 + ', ' + b1 + ' като най-голямото сред тях е: ' + b3;
        } else {
            result = 'Въведените числа са: ' + b2 + ', ' + b3 + ', ' + b1 + ' като най-голямото сред тях е: ' + b2;
        }
    } else {
        if (b1 < b3) {
            result = 'Въведените числа са: ' + b3 + ', ' + b1 + ', ' + b2 + ' като най-голямото сред тях е: ' + b3;
        } else {
            result = 'Въведените числа са: ' + b1 + ', ' + b2 + ', ' + b3 + ' като най-голямото сред тях е: ' + b1;
        }
        document.getElementById('result').innerHTML = result;
    }
}

/*Problem 5. Digit as word
 Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
 Print “not a digit” in case of invalid input.
 Use a switch statement.*/

function nameto9() {
    var number = parseInt(prompt('Въведетестойност', '0'), 10),
        name;
    switch (number) {
    case 1:
        name = 'one';
        break;
    case 2:
        name = 'two';
        break;
    case 3:
        name = 'three';
        break;
    case 4:
        name = 'four';
        break;
    case 5:
        name = 'five';
        break;
    case 6:
        name = 'six';
        break;
    case 7:
        name = 'seven';
        break;
    case 8:
        name = 'eight';
        break;
    case 9:
        name = 'nine';
        break;
    default:
        name = 'not a digit';
    }
    document.getElementById('result').innerHTML = 'Името на стойността е: ' + name;
}

/*Problem 6. Quadratic equation
 Write a script that reads the coefficients a, b and c of a quadratic equation
 ax2 + bx + c = 0 and solves it (prints its real roots).
 Calculates and prints its real roots.*/

function quadratic() {
    var a = parseInt(prompt('Въведетестойност', '0'), 10),
        b = parseInt(prompt('Въведетестойност', '0'), 10),
        c = parseInt(prompt('Въведетестойност', '0'), 10),
        D,
        xRoot0,
        xRoot1,
        xRoot2,
        result;
    D = b * b - 4 * a * c;
    xRoot0 = -b / (2 * a);
    xRoot1 = (-b - Math.sqrt(D)) / (2 * a);
    xRoot2 = (-b + Math.sqrt(D)) / (2 * a);
    if (D < 0) {
        result = a + "x^2 + " + b + "x + " + c + " Няма реални корени.";
    } else if (D) {
        result = a + "x^2 + " + b + "x + " + c + " has two real roots x1=" + xRoot1 + " and x2=" + xRoot2;
    } else {
        result = a + "x^2 + " + b + "x + " + c + " has one real root x=" + xRoot0;
    }
    document.getElementById('result').innerHTML = result;
}

/*Problem 7. The biggest of five numbers
 Write a script that finds the greatest of given 5 variables.
 Use nested if statements.*/

function biggestOf5() {
    var total = [],
        i,
        max = 0;
    for (i = 0; i < 5; i += 1) {
        total[i] = prompt('Въведете стойност', '0');
        if (max < total[i]) { max = total[i]; }
    }
    document.getElementById('result').innerHTML =
        'Въведените стойноти са: ' + total + '<br><strong>Най-голямата от тях е: ' + max + '</strong>';
}

/*Problem 8. Number as words
Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.*/

function names() {
    var number = prompt('Въведетестойност', '0'),
        value = +number,
        units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tenths = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        name,
        name1 = +number[number.length - 1],
        name10 = +number[number.length - 2],
        name100 = +number[number.length - 3];
    if (value <= 19) {
        name = 'Името на стойността е: <strong>' + units[value] + '</strong>';
    } else {
        if (value > 19 && value < 99) {
            if (name1 === 0) {
                name = 'Името на стойността е: <strong>' + tenths[name10] + '</strong>';
            } else { name = 'Името на стойността е: <strong>' + tenths[name10] + '-' + units[name1] + '</strong>'; }
        } else if (name10 === 0 && name1 === 0) {
            name = 'Името на стойността е: <strong>' + units[name100] + '</strong> hundred ';
        } else if (name10 && !name1) {
            name = 'Името на стойността е: <strong>' + units[name100] + ' hundred and ' + tenths[name10] + '</strong>';
        } else if (!name10 && name1) {
            name = 'Името на стойността е: <strong>' + units[name100] + ' hundred and ' + units[name1] + '</strong>';
        } else {name = 'Името на стойността е: <strong>' + units[name100] + ' hundred ' + tenths[name10] + '-' + units[name1] + '</strong>';
                }
    }
    document.getElementById('result').innerHTML = name;
    console.log(name);
}