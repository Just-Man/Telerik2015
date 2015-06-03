/**
 * Created by just on 02.06.15.
 */

/*Problem 1. Increase array members
 Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
 Print the obtained array on the console.*/

function index5() {
    var arr = [],
        i,
        n = 20;
    for (i = 0; i < n; i += 1) {
        arr[i] = i * 5;
    }
    document.getElementById('result').innerHTML = ' ' + arr;
}

/*Problem 2. Lexicographically comparison
Write a script that compares two char arrays lexicographically (letter by letter).*/

function compareArr() {
    var arr1 = prompt('Въведете желаните стойности за сравнение', '0'),
        arr2 = prompt('Въведете желаните стойности за сравнение', '0'),
        i,
        len1 = arr1.length,
        len2 = arr2.length,
        n;
    if (len1 < len2) {
        n = len1;
    } else {
        n = len2;
    }
    for (i = 0; i < n; i += 1) {
        if (arr1[i] < arr2[i]) {
            document.getElementById('result').innerHTML = 'Първия списък: ' + arr1 + ' е преди втория ' + arr2;
        } else {
            document.getElementById('result').innerHTML = 'Втория списък: ' + arr2 + ' е преди първия ' + arr1;
            break;
        }
    }
}

/*Problem 3. Maximal sequence
Write a script that finds the maximal sequence of equal elements in an array.
    Example:
        input                   result
2, 1, 1, 2, 3, 3, 2, 2, 2, 1    2, 2, 2     */

function repeatNumber() {
    var end = prompt('Въведете броя елементи'),
        numbers = [],
        filtered = [],
        final = [],
        i;
    for (i = 0; i < end; i += 1) {
        numbers[i] = prompt('Въведете елемент номер: ' + (+i + 1), '0');
        numbers[i] = +numbers[i];
        if (numbers[i - 1] === numbers[i]) {
            filtered.push(numbers[i]);
        } else {
            filtered = [];
        }
        if (final.length < filtered.length) {
            final = filtered;
        }
    }
    if (final.length === filtered.length) {
        filtered.push(filtered[0]);
        final.push(final[0]);
        document.getElementById('result').innerHTML = 'Ново получените масиви от повтарящи се елементи са два:' +
            '<br>1.) [' + filtered + '] с общ брой на елементите в него: ' + filtered.length +
            '<br>2.) [' + final + '] с общ брой на елементите в него: ' + final.length;
    } else {
        final.push(+final[0]);
        document.getElementById('result').innerHTML = 'Ново полученият масив от повтарящи се елементи е: [' + final
            + '] с общ брой на елементите в него: ' + final.length;
    }
}

/*Problem 4. Maximal increasing sequence
 Write a script that finds the maximal increasing sequence in an array.
 Example:
        input           result
 3, 2, 3, 4, 2, 2, 4    2, 3, 4     */

function increasingNumber() {
    var end = prompt('Въведете броя елементи'),
        numbers = [],
        sorted = [],
        final = [],
        prev = 0,
        next = 0,
        i;
    for (i = 0; i < end; i += 1) {
        numbers[i] = prompt('Въведете елемент номер: ' + (+i + 1), '0');
        prev = +numbers[i - 1] + 1;
        next = +numbers[i];
        if (prev === next) {
            sorted.push(next);
        } else {
            sorted = [];
        }
        if (final.length < sorted.length) {
            final = sorted;
        }
    }
    if (final.length === sorted.length) {
        sorted.unshift(+sorted[0] - 1);
        final.unshift(+final[0] - 1);
        document.getElementById('result').innerHTML = 'Ново получените масиви от повтарящи се елементи са два:' +
            '<br>1.) [' + sorted + '] с общ брой на елементите в него: ' + sorted.length +
            '<br>2.) [' + final + '] с общ брой на елементите в него: ' + final.length;
    } else {
        final.unshift(parseInt(final[0] - 1, 10));
        document.getElementById('result').innerHTML = 'Ново полученият масив от последователни елементи е: [' + final + '] с общ брой на елементите в него: ' + final.length;
    }
}

/*Problem 5. Selection sort
 Sorting an array means to arrange its elements in increasing order.
 Write a script to sort an array.
 Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
 Hint: Use a second array*/

function sortArr() {
    var end = prompt('Въведете броя елементи'),
        numbers = [],
        i,
        mem,
        j;
    for (i = 0; i < end; i += 1) {
        numbers[i] = parseInt(prompt('Въведете елемент номер: ' + (+i + 1)), 10);
        for (j = 0; j < i; j += 1) {
            if (numbers[i] < numbers[j]) {
                mem = +numbers[j];
                numbers[j] = +numbers[i];
                numbers[i] = mem;
            }
        }
    }
    document.getElementById('result').innerHTML = ' ' + numbers;
}

/*Problem 6. Most frequent number
Write a script that finds the most frequent number in an array.
    Example:
            input                           result
4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3       4 (5 times)     */

function repeatNumbers() {
    var mem,
        j,
        i,
        end = prompt('Въведете броя желани елементи'),
        numbers = [],
        filtered = [],
        final = [];
    for (i = 0; i < end; i += 1) {
        numbers[i] = prompt('Въведете елемент номер: ' + (+i + 1), '0');
        for (j = 0; j < i; j += 1) {
            if (numbers[i] < numbers[j]) {
                mem = +numbers[j];
                numbers[j] = +numbers[i];
                numbers[i] = mem;
            }
        }
    }
    for (i = 0; i < end; i += 1) {

        if (numbers[i - 1] === numbers[i]) {
            filtered.push(+numbers[i]);
        } else {
            filtered = [];
        }
        if (final.length < filtered.length) {
            final = filtered;
        }
    }
    if (final.length === filtered.length) {
        filtered.push(+filtered[0]);
        final.push(+final[0]);
        document.getElementById('result').innerHTML = 'От въведената поредица числа' + numbers + 'Повтарящи се елементи са два:' +
            '<br>1.) ' + filtered[0] + ' с брой повторения: ' + filtered.length +
            '<br>2.) ' + final[0] + ' с брой повторения: ' + final.length;
    } else {
        final.push(+final[0]);
        document.getElementById('result').innerHTML = 'От въведената поредица числа' + numbers + 'Повтарящият се елемент е: ' + final[0] +
            ' с брой повторения: ' + final.length;
    }
}

/*Problem 7. Binary search
 Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.*/

function binary() {
    var elements,
        i,
        len,
        mem,
        middle,
        end = prompt('Въведете броя желани елементи'),
        number = prompt('Въведете число за проверка'),
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (i = 0; i < end; i += 1) {
        numbers[i] = prompt('Въведете елемент номер: ' + (+i + 1), '0');
    }
    numbers.sort(function (a, b) {return a - b; });
    mem = numbers.indexOf(+number);
    elements = numbers;
    for (len = elements.length; len > 1; len -= 1) {
        middle = Math.round(elements.length / 2);
        len = elements.length;
        if (number >= elements[middle]) {
            elements = elements.splice(middle, middle);
            console.log(elements);
        } else {
            elements = elements.splice(0, middle);
            console.log(elements);
        }
    }
    if (mem === -1) {
        document.getElementById('result').innerHTML = 'Числото: ' + number + ' не е намерено във въвединият масив';
        console.log('');
    } else {document.getElementById('result').innerHTML = 'Числото: ' + number + ' се намира на позиция <strong>' + (mem + 1)
        + '</strong><br> от въдеденият масив '
        + numbers.join(', ');
        console.log('');
        }
}
binary();