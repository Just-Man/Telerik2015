/**
 * Created by just on 10.06.15.
 */

/*//task 1


function solve1(param) {
    var
        i,
        j,
        k,
        count = 0,
        s = +param[0];
    console.log(s);
    for (i = 0; i <= s / 10; i += 1) {
        for (j = 0; j <= s / 4; j += 1) {
            for (k = 0; k <= s / 3; k += 1) {
                if ((i * 10 + j * 4 + k * 3) === s) {
                    count += 1;
                }
            }
        }
    }
    //console.log(count);
    return count;
}
/!*var test1 = [['7'], ['10'], ['10'], ['410'], ['1410']],
    start1 = new Date().getTime() / 1000;
test1.forEach(function (test) {console.log(test);
    console.log(solve1(test)); });
var end1 = new Date().getTime() / 1000,
    time1 = end1 - start1;
console.log(time1);*!/

function solve1dot1(param) {
    var i,
        j,
        k,
        price,
        answer = 0,
        s = +param[0],
        c1 = +param[1],
        c2 = +param[2],
        c3 = +param[3];
    for (i = 0; i <= s / c1; i += 1) {
        for (j = 0; j <= s / c2; j += 1) {
            for (k = 0; k <= s / c3; k += 1) {
                price = (i * c1 + j * c2 + k * c3);
                if (price <= s) {
                    answer = Math.max(answer, price);
                }
            }
        }
    }
    //console.log(count);
    return answer;
}
/!*var test1dot1 = [['110', '13', '15', '17'], ['20', '11', '200', '300'], ['110', '19', '29', '39']],
    start1dot1 = new Date().getTime() / 1000;
test1dot1.forEach(function (test) {console.log('================================');
    console.log(solve1dot1(test)); });
var end1dot1 = new Date().getTime() / 1000,
    time1dot1 = end1dot1 - start1dot1;
console.log(time1dot1);*!/

//Task 2

function solve2(param) {
    var rowsCols = param[0].split(' '),
        matrix = param.slice(1)
                        .map(function (line) {
                return line.split(' ');
            }),
        row = 0,
        col = 0,
        sum = 0,
        dir,
        goto = {
            u: -1,
            d: +1,
            r: +1,
            l: -1
        },
        upDown,
        leftRight,
        used = {},
        key;

    while (true) {
        if (!matrix[row]  || !matrix[row][col]) {return 'Successed with score: ' + sum; }
        key = row + ';' + col;
        if (used[key]) {
            return 'Failed at (' + row + ', ' + col + ')';
        }
        used[key] = true;
        sum += (1 << row) + col;
        dir = matrix[row][col];
        upDown = dir[0];
        leftRight = dir[1];
        row += goto[upDown];
        col += goto[leftRight];
    }
    return matrix;
}

/!*var test2 = [
        [
            '3 5',
            'dr dl dr ur ul',
            'dr dr ul ur ur',
            'dl dr ur dl ur'
        ],
        [
            '3 5',
            'dr dl dl ur ul',
            'dr dr ul ul ur',
            'dl dr ur dl ur'
        ]
    ],
    start2 = new Date().getTime() / 1000;
test2.forEach(function (test) {
    console.log(solve2(test));
});
var end2 = new Date().getTime() / 1000,
    time2 = end2 - start2;
console.log(time2);*!/

//Task 2dot2*/

function solve2dot2(input) {
    var sizes = input[0].split(' '),
        matrix = input.slice(1),
        row = +input[0][0] - 1,
        col = +input[0][2] - 1,
        next = matrix[row][col],
        sum = 0,
        goto = {
            1: [-2, 1],
            2: [-1, 2],
            3: [1, 2],
            4: [2, 1],
            5: [2, -1],
            6: [1, -2],
            7: [-1, -2],
            8: [-2, -1]
        },
        used = {},
        key = 0,
        moves = 0;
    console.log(matrix);
    while (true) {
        if (row < +sizes[0]  || row > +sizes[0] || col < +sizes[1] || col > +sizes[1]) {
            return 'Go go Horsy! Collected: ' + sum + ' weed';
        }
        key = false;
        if (used[key]) {
            return 'Failed at (' + moves + ')';
        }
        moves += 1;
        used[key] = true;
        sum += (Math.pow(2, row) - col);
        row += goto[next[0]];
        col += goto[next[1]];
    }
    return matrix;
}

var test2dot2 = [
        [
            '3 5',
            '54361',
            '43326',
            '52188'
        ],
        [
            '3 5',
            '54561',
            '43328',
            '52388'
        ]
    ],
    start2dot2 = new Date().getTime() / 1000;
test2dot2.forEach(function (test) {
    console.log(solve2dot2(test));
});
var end2dot2 = new Date().getTime() / 1000,
    time2dot2 = end2dot2 - start2dot2;
console.log(time2dot2);
