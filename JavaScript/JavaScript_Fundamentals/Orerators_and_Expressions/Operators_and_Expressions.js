/**
 * Created by just on 26.05.15.
 */

/*Problem 1. Odd or Even
Write an expression that checks if given integer is odd or even.*/

function odd() {
    var number = parseInt(prompt('Въведете число', '0'), 10);
    if (number % 2) {
        if (number === 0) {
            alert('Въведеното число: ' + number + ' е нечетно');
        } else {
            document.getElementById('result').innerHTML = 'Въведеното число: ' + number + '  нечетно';
        }
    } else {document.getElementById('result').innerHTML = 'Въведеното число: ' + number + ' е четно'; }
}

/*Problem 2. Divisible by 7 and 5
Write a boolean expression that checks for given integer if
it can be divided (without remainder) by 7 and 5 in the same time.*/

function devided() {
    var number = prompt('Въведете число', '0');
    number = +number;
    /*Новобранец
    if ((number % 7 === 0) && (number % 5 === 0)) {
        alert('Въведеното число: ' + number + '  е кратно на 5 и на 7');
    } else {alert('Въведеното число: ' + number + ' не е кратно на 5 и на 7');
    }*/
    /*Както трябва*/
    if (number % 35) {
        document.getElementById('result').innerHTML = 'Въведеното число: ' + number + ' не е кратно на 5 и на 7';
    } else {
        document.getElementById('result').innerHTML = 'Въведеното число: ' + number + ' е кратно на 5 и на 7';
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
        if (number3[number3.length - 3] === 7) {
            console.log('Третата цифра (от дясно на ляво) от въведената стойност: ' + number1 + ' е 7');
            //alert('Третата цифра (от дясно на ляво) от въведената стойност: ' + number1 + ' е 7');
        } else {
            console.log('Третата цифра (от дясно на ляво) от въведената стойност: ' + number1 + ' не е 7');
            //alert('Третата цифра (от дясно на ляво) от въведената стойност: ' + number1 + ' не е 7');
        }
    }
}
/*var start = new Date().getTime() / 1000;
check('1732');
check('3214');
var end = new Date().getTime() / 1000,
    time = end - start;
console.log(time);*/



/*Problem 5. Third bit
Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
The bits are counted from right to left, starting from bit #0.
The result of the expression should be either 1 or 0.
*/

function bitcheck() {
    var number = prompt('Моля въведете стойност', '0'),
        numbers = +number,
        bits = numbers.toString(2),
        bit3 = bits[bits.length - 3];
    if (bit3) {
        alert('Третият бит е: ' + bit3 + ' Числото в битове е: ' + bits);
    } else {
        alert('Третият бит е: ' + bit3 + ' Числото в битове е: ' + bits);
    }
}

/*Problem 6. Point in Circle
Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5).
{0,0} is the centre and 5 is the radius*/

function dot() {
    var
        radius = prompt('Въведете радиус на окръжността', '0'),
        start = 5,
        center = ((+radius) + start),
        dotX = prompt('Въведете координати на точката по Х', '0'),
        dotY = prompt('Въведете координати на точката по У', '0'),
        displayDotX = (((+radius) + start) + (+dotX)),
        displayDotY = (((+radius) + start) + (+dotY)),
        can = window.dodocument.getElementById("myCanvas"),
        ctx = can.getContext("2d");
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fillRect(displayDotX, displayDotY, 2, 2);

    if ((Math.pow(((+dotX) + start), 2)) +
            (Math.pow(((+dotY) + start), 2)) <=
            Math.pow(center, 2)) {
        alert('Точката е в окръжноста');
    } else {
        alert('Точката е извън окръжноста');
    }
}

/*Problem 7. Is prime
Write an expression that checks if given positive integer number n (n ≤ 20000) is prime.*/

function number() {
    var numbers = prompt('Въведете крайно число', '0'),
        prime = [],
        i;
    if (numbers <= 20000) {
        for (i = 2; i <= numbers; i += 1) {
            if (!(numbers % i)) {
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

/*Problem 8. Trapezoid area
Write an expression that calculates trapezoid's area by given sides a and b and height h.*/

function trapez() {
    var a = (+prompt('Въведете дължина за страната a', '0')),
        b = (+prompt('Въведете дължина за страната b', '0')),
        h = (+prompt('Въведете дължина за страната h', '0')),
        S = ((a + b) * h) / 2;
    alert('Лицето на трапеца е ' + S);
}

/*Problem 9. Point in Circle and outside Rectangle
Write an expression that checks for given point P(x, y)
if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).*/

function dot2() {
    var radius = prompt('Въведете радиус на окръжността', '0'),
        rectX = prompt('Въведете дължина на правоъгълника', '0'),
        rectY = prompt('Въведете широчина', '0'),
        dotX = prompt('Въведете координати на точката по Х', '0'),
        dotY = prompt('Въведете координати на точката по У', '0'),
        start = 5,
        center = ((+radius) + start),
        startX = center - (rectX / 2),
        endX = center + (rectX / 2),
        startY = center - (rectY / 2),
        endY = center + (rectY / 2),
        displayDotX = (((+radius) + start) + (+dotX)),
        displayDotY = (((+radius) + start) + (+dotY)),
        can = document.getElementById("myCanvas"),
        ctx = can.getContext("2d"),
        result;
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fillRect((center - (rectX / 2)), (center - (rectY / 2)), rectX, rectY);
    ctx.fillStyle = "red";
    ctx.fillRect(displayDotX, displayDotY, 2, 2);
    if ((Math.pow(((+dotX) + start), 2)) +
            (Math.pow(((+dotY) + start), 2)) <=
            Math.pow(center, 2)) {
        if (displayDotX <= startX || displayDotY >= endY || displayDotY <= startY || displayDotX >= endX) {
            result = "Точката е в окръжноста и извън правоъгълника";
        } else {
            result = "Точката е в окръжноста, но в правоъгълника";
        }
    } else {
        result = "Точката е извън окръжноста";
    }
    document.getElementById('result').innerHTML = result;
}