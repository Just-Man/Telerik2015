/**
 * Created by just on 19.05.15.
 */


//Problem 1. JavaScript literals
//Assign all the possible JavaScript literals to different variables.

function literal() {
    var intNumber = 2015,
        floatNumber = 19.05,
        str = 'Homework 1',
        boolean = true,
        arr = ['course', 'JavaScript'],
        obj = {course: "JavaScript ", part: "1"},
        func = function plus() {intNumber += 1; };
    document.getElementById('result').innerHTML =
        "<br><strong> Променлива от тип Integer e: " + intNumber +
        "<br>Променлива от тип Float e: " + floatNumber +
        "<br>Променлива от тип String e: " + str +
        "<br>Променлива от тип Boolean e: " + boolean +
        "<br>Променлива от тип Array e: " + arr +
        "<br>Променлива от тип Object e: " + obj.course + ' ' +
        obj.part + ", където JavaScript е пропърти с име \"course\"" +
        ", а 1 е пропърти с името \"part\"" +
        "<br>Променлива от тип Function e: </strong>" + func;
}

//Problem 2. Quoted text
/*Create a string variable with quoted text in it.
For example: `'How you doin'?', Joey said'.*/
function quotedText() {
    var strV1 = "'How you doin'?', Joey said'.",
        strV2 = '\'How you doin\'?\', Joey said\'.';
    document.getElementById('result').innerHTML =
        "<br><strong> Вариянт 1: Използване на единични и двойни кавички </strong>" + strV1 +
        "<br><strong> Вариянт 2: Използване на наклонена черта</strong> " + strV2;
}

//Problem 3. Typeof variables
function typeOf() {
    var arr = [2, 2.5, 'str', true, [1], {a: 1, b: 2}, null, undefined],
        i,
        len = arr.length;
    for (i = 0; i < len; i += 1) {
        document.getElementById('result').innerHTML =
            "<br><strong> Типът на Integer е: </strong>" + typeof (arr[0]) +
            "<br><strong> Типът на Float е: </strong>" + typeof (arr[1]) +
            "<br><strong> Типът на String е: </strong>" + typeof (arr[2]) +
            "<br><strong> Типът на Boolean е: </strong>" + typeof (arr[3]) +
            "<br><strong> Типът на Array е: </strong>" + typeof (arr[4]) +
            "<br><strong> Типът на Object е: </strong>" + typeof (arr[5]) +
            "<br><strong> Типът на Null е: </strong>" + typeof (arr[6]) +
            "<br><strong> Типът на Undefined е: </strong>" + typeof (arr[7]);
    }
}