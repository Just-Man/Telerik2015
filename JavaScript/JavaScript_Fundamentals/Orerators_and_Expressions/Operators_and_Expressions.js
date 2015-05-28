/**
 * Created by just on 26.05.15.
 */

/*Problem 1. Odd or Even
Write an expression that checks if given integer is odd or even.*/

function odd() {
    var number = parseInt(prompt('Въведете число', '0'), 10);
    if (number % 2) {
        if (number === 0){
            alert('Въведеното число: ' + number + ' е нечетно');
        } else {
        document.getElementById('result').innerHTML = 'Въведеното число: ' + number + '  нечетно'}
    } else {document.getElementById('result').innerHTML = 'Въведеното число: ' + number + ' е четно'
    }
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
    if (number%35) {
        document.getElementById('result').innerHTML = 'Въведеното число: ' + number + ' не е кратно на 5 и на 7'
    } else {
        document.getElementById('result').innerHTML = 'Въведеното число: ' + number + ' е кратно на 5 и на 7'
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
        circlex = ((+radius) + start),
        dotx = prompt('Въведете координати на точката по Х', '0'),
        doty = prompt('Въведете координати на точката по У', '0'),
        rdotx = (((+radius) + start) + (+dotx)),
        rdoty = (((+radius) + start) + (+doty)),
        can = document.getElementById("myCanvas"),
        ctx = can.getContext("2d");
    ctx.arc(circlex, circlex, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fillRect(rdotx, rdoty, 2, 2);

    if ((Math.pow(((+dotx) + start), 2)) +
        (Math.pow(((+doty) + start), 2)) <=
        Math.pow(circlex, 2)) {
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
        for (i = 2; i <= numbers; i++) {
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
    var test = 1,
        radius = prompt('Въведете радиус на окръжността', '0'),
        rectx = prompt('Въведете дължина на правоъгълника', '0'),
        recty = prompt('Въведете широчина', '0'),
        dotx = prompt('Въведете координати на точката по Х', '0'),
        doty = prompt('Въведете координати на точката по У', '0'),
        start = 5,
        circlex = ((+radius) + start),
        circley = circlex,
        startx = circlex - (rectx / 2),
        endx = circlex + (rectx / 2),
        starty = circlex - (recty / 2),
        endy = circlex + (recty / 2),
        rdotx = (((+radius) + start) + (+dotx)),
        rdoty = (((+radius) + start) + (+doty)),
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
    if ((Math.pow(((dotx*1) + start), 2)) +
        (Math.pow(((doty*1) + start), 2)) <=
        Math.pow(circlex, 2)) {
        if (rdotx <= startx || rdoty >= endy || rdoty <= starty || rdotx >= endx) {
                console.log(test);
                document.getElementById('result').innerHTML = "Точката е в окръжноста и извън правоъгълника"
            } else {
            document.getElementById('result').innerHTML = "Точката е в окръжноста, но в правоъгълника"}
    } else {
        document.getElementById('result').innerHTML = "Точката е извън окръжноста"
    }
}