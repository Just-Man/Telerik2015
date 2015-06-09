/**
 * Created by just on 07.06.15.
 */

/*  Problem 1. English digit
    Write a function that returns the last digit of given integer as an English word.   */

function lastDigit() {
    var number = prompt('Въведетестойност', '0'),
        units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        name,
        name1 = +number[number.length - 1];
    name = 'Въведеното число е: <strong>' + number + '</strong><br> Името на последната цифра е: <strong>' + units[name1] + '</strong>';
    document.getElementById('result').innerHTML = name;
}

/*  Problem 2. Reverse number
    Write a function that reverses the digits of given decimal number.  */

function reverseNumber() {
    var number = prompt('Въведетестойност', '0'),
        reversed,
        result;
    if (+number < 0) {
        reversed = number.split('').reverse();
        reversed.pop();
        reversed.unshift('-');
        reversed = reversed.join('');
    } else {
        reversed = number.split('').reverse().join('');
    }
    result = 'Въведеното число е: <strong>' + number + '</strong><br> Обърнато е равно на: <strong>' + reversed + '</strong>';
    document.getElementById('result').innerHTML = result;
}


/*  Problem 3: Write a function that finds all the occurrences of word in a text.
    The search can case sensitive or case insensitive
    Use function overloading    */

function words() {
    var result,
        index = 0,
        count = 0,
        text = prompt('Въведете желаният текст'),
        word = prompt('Въведете желената дума'),
        inCaseSensitive = confirm('Желаете ли проверката да е CaseSensitive');

    if (!inCaseSensitive) {
        word = word.toLowerCase();
        text = text.toLowerCase();
    }

    while (index !== -1) {
        index = text.indexOf(word, index);

        if (index !== -1) {
            index += 1;
            count += 1;
        }
    }
    result = 'Търсената дума "' + word + '" се повтаря ' + count + '-пъти';
    document.getElementById('result').innerHTML = result;
}

/*Problem 4. Number of elements
Write a function to count the number of div elements on the web page*/

function countElements() {
    document.body.appendChild(document.createElement("div"));
    var     count = document.getElementsByTagName("div");
    document.getElementById('result').innerHTML = 'DIV елементите на страницата са: ' + count.length;
}

/*Problem 5. Appearance count
Write a function that counts how many times given number appears in given array.
Write a test function to check if the function is working correctly.*/

function appearsNumbers() {
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

/*  Problem 6. Larger than neighbours
    Write a function that checks if the element at given position in given array
    of integers is bigger than its two neighbours (when such exist).    */

function neighbours() {
    var end = prompt('Въведете големината на масива'),
        i,
        index,
        element,
        elements = [5, 3, 6, 2],
        len = +end,
        result;
    for (i = 0; i < len; i += 1) {
        elements[i] =  prompt('Въведете желаните елементи на масива');
    }
    for (i = 0; i < len; i += 1) {
        if (elements[i] > elements[i - 1] && elements[i] > elements[i + 1]) {
            element = elements[i];
            break;
        } else {
            element = 'Липсва елемент от масива които да е едновременно по-голям от предишният и следващият елемент';
        }
    }
    result = element;
    index = elements.indexOf(element);
    //console.log(index);
    document.getElementById('result').innerHTML = result;
    //console.log(result);
    return index;
}

/*  Problem 7. First larger than neighbours
    Write a function that returns the index of the first element in array that is larger than its neighbours
     or -1, if there’s no such element. */
function indexOf(index) {
    var test = +index,
        results;
    if (isNaN(test)) {
        results = -1;
    } else {
        results = test;
    }
    document.getElementById('result').innerHTML = results;
    //console.log(results);
}

