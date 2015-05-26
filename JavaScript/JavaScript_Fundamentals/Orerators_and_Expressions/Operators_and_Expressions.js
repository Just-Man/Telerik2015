/**
 * Created by just on 26.05.15.
 */

/*Problem 1. Odd or Even
Write an expression that checks if given integer is odd or even.*/

function odd() {
    var number = parseInt(prompt('Въведете число', '0'), 10);
    if (number % 2 === 0) {
        if (number === 0){
            alert('Въведеното число: ' + number + ' е нечетно');
        } else {
        alert('Въведеното число: ' + number + '  е четно');}
    } else {alert('Въведеното число: ' + number + ' е нечетно');
    }
}

/*Problem 2. Divisible by 7 and 5
Write a boolean expression that checks for given integer if
it can be divided (without remainder) by 7 and 5 in the same time.*/

function devided() {
    var number = prompt('Въведете число', '0');
    if ((number % 7 === 0) && (number % 5 === 0)) {
        alert('Въведеното число: ' + number + '  е кратно на 5 и на 7');
    } else {alert('Въведеното число: ' + number + ' не е кратно на 5 и на 7');
    }
}

/*Problem 3. Rectangle area
Write an expression that calculates rectangle’s area by given width and height.*/

function area() {
    var a = prompt('Въведете широчина в метри', '0'),
        b = prompt('Въведете дължина в метри', '0'),
        p = a * b;
    alert('Площта е = ' + p + 'кв.м');
}

/*Problem 4. Third digit
Write an expression that checks for given integer if its third digit (right-to-left) is 7.*/

function check() {
    var number1 = prompt('Въведете число', '0'),
        number3 = number1.length;
    if (number3 < 3) {
        prompt('Моля въведете стойност с поне 3 символа');
    } else {
        number3 = number1;
        if (number3[number3.length - 3] === '7') {
            alert('Третата цифра (от дясно на ляво) от въведената стойност: ' + number1 + ' е 7');
        } else {
            alert('Третата цифра (от дясно на ляво) от въведената стойност: ' + number1 + ' не е 7');
        }
    }
}

/*Problem 5. Third bit
Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
The bits are counted from right to left, starting from bit #0.
The result of the expression should be either 1 or 0.
*/

function bitcheck() {
    var number = prompt('Моля въведете стойност', '0'),
        numbers = parseFloat(number),
        bits = numbers.toString(2),
        bit3 = bits[bits.length - 3];
    if (bit3 <= 1) {
        alert('Третият бит е: ' + bit3 + ' Числото в битове е: ' + bits);
    } else {
        alert('Третият бит е: ' + bit3 + ' Числото в битове е: ' + bits);
    }
}

function dot() {
    var
        radius = prompt('Въведете радиус на окръжността', '0'),
        start = 5,
        circlex = (parseFloat(radius) + start),
        dotx = prompt('Въведете координати на точката по Х', '0'),
        doty = prompt('Въведете координати на точката по У', '0'),
        rdotx = ((parseFloat(radius) + start) + parseFloat(dotx)),
        rdoty = ((parseFloat(radius) + start) + parseFloat(doty)),
        can = document.getElementById("myCanvas"),
        ctx = can.getContext("2d");
    ctx.arc(circlex, circlex, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fillRect(rdotx, rdoty, 2, 2);

    if (parseFloat(Math.pow((parseFloat(dotx) + start), 2)) +
        parseFloat(Math.pow((parseFloat(doty) + start), 2)) <=
        Math.pow(circlex, 2)) {
        alert('Точката е в окръжноста');
    } else {
        alert('Точката е извън окръжноста');
    }
}

function number() {
    var numbers = prompt('Въведете крайно число', '0'),
        prime = [],
        i;
    if (numbers <= 20000) {
        for (i = 2; i <= numbers; i++) {
            if (numbers % i === 0) {
                prime.push(' ' + i);
            }
            if (prime.length > 1) {
                document.getElementById('result').innerHTML = "Числото " + numbers + " не е просто, защото се дели на числата: <br>" + prime;
            } else {
                document.getElementById('result').innerHTML = "Числото " + numbers + " е просто, защото се дели само на 1 и на " + numbers;
            }
        }
    } else {
        alert('Въвели сте прекалено голяма стойност');
    }
}

function trapez() {
    var a = parseFloat(prompt('Въведете дължина за страната a', '0')),
        b = parseFloat(prompt('Въведете дължина за страната b', '0')),
        h = parseFloat(prompt('Въведете дължина за страната h', '0')),
        S = ((a + b) * h) / 2;
    alert('Лицето на трапеца е ' + S);
}

function dot2() {
    var
        test = 1,
        radius = prompt('Въведете радиус на окръжността', '0'),
        rectx = prompt('Въведете дължина на правоъгълника', '0'),
        recty = prompt('Въведете широчина', '0'),
        dotx = prompt('Въведете координати на точката по Х', '0'),
        doty = prompt('Въведете координати на точката по У', '0'),
        start = 5,
        circlex = (parseFloat(radius) + start),
        circley = circlex,
        startx = circlex - (rectx / 2),
        endx = circlex + (rectx / 2),
        starty = circlex - (recty / 2),
        endy = circlex + (recty / 2),
        rdotx = ((parseFloat(radius) + start) + parseFloat(dotx)),
        rdoty = ((parseFloat(radius) + start) + parseFloat(doty)),
        can = document.getElementById("myCanvas"),
        ctx = can.getContext("2d");
    ctx.arc(circlex, circley, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fillRect((circlex - (rectx / 2)), (circley - (recty / 2)), rectx, recty);
    ctx.fillStyle = "red";
    ctx.fillRect(rdotx, rdoty, 2, 2);

    if (parseFloat(Math.pow((parseFloat(dotx) + start), 2)) +
        parseFloat(Math.pow((parseFloat(doty) + start), 2)) <=
        Math.pow(circlex, 2)) {
        if (rdotx <= startx || rdotx >= endx) {
            test = 'x';
            console.log(test);
            if (rdoty <= starty || rdoty >= endy) { test += 'y';
                console.log(test);
                alert("Точката е в окръжноста и извън правоъгълника");
            }
        } else {
            alert("Точката е в окръжноста, но в правоъгълника");
        }
    } else {
        alert('Точката е извън окръжноста');
    }
}