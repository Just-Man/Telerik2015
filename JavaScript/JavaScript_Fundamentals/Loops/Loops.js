/**
 * Created by just on 29.05.15.
 */

/*Problem 1. Numbers
Write a script that prints all the numbers from 1 to N.*/

function print() {
    var n = prompt('Въведете крайно число', '0'),
        i = 0;
    for (i; i <= n; i += 1) {
        console.log(i);
    }
}

/*Problem 2. Numbers not divisible
Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time*/

function divisibleOn3And7() {
    var n = prompt('Въведете крайно число', '0'),
        i = 0;
    for (i; i <= n; i += 1) {
        if (i % 21) { console.log(i);
            }
    }
}

/*Problem 3. Min/Max of sequence
Write a script that finds the max and min number from a sequence of numbers.*/

function minmax() {
    var n = [],
        N = prompt('Въведете брой числа за проверка', '0'),
        i = 0,
        min = 0,
        max = 0;
    for (i; i <= N; i += 1) {
        n[i] = prompt('Въведете желаните стокности', '0');
        if (min > n[i]) { min = n[i]; }
        if (max < n[i]) { max = n[i]; }
    }
    document.getElementById('result').innerHTML =
        'Минималната стойност е: ' + min + ' Максималната стойност е: ' + max;
}

/*Problem 4. Lexicographically smallest
Write a script that finds the lexicographically smallest
and largest property in document, window and navigator objects.*/

function prop() {
    var doc = [],
        win = [],
        nav = [],
        props;
    for (props in document) {
        doc.push(props);
        doc.sort();
        console.log(doc);
    }
    for (props in navigator) {
        nav.push(props);
        nav.sort();
    }
    for (props in window) {
        win.push(props);
        win.sort();
    }
    document.getElementById('result').innerHTML =
        '<br><strong>За обекта document</strong><br><br> Най-малкия елемент е: ' + doc[0] +
        '<br> Най-големия е: ' + doc[doc.length - 1] +
        '<br><br> <strong>За обекта navigator</strong><br><br> Най-малкия елемент е: ' + nav[0] +
        "<br> Най-големия е: " + nav[nav.length - 1] +
        '<br><br> <strong>За обекта window</strong><br><br> Най-малкия елемент е: ' + win[0] +
        "<br> Най-големия е: " + win[win.length - 1];

}