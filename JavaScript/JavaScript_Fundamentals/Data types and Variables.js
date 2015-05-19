/**
 * Created by just on 19.05.15.
 */


//Problem 1. JavaScript literals
//Assign all the possible JavaScript literals to different variables.

function Literal () {
    var intNumber = 2015,
        floatNumber = 19.05,
        str = 'Homework 1',
        arr = ['course', 'JavaScript'],
        obj = {course: "JavaScript", part: "1" };
    document.getElementById('result').innerHTML =
        "<br><strong> Променлива от тип Integer e: " + intNumber +
        "<br>Променлива от тип Float e: " + floatNumber +
        "<br>Променлива от тип String e: " + str +
        "<br>Променлива от тип Array e: " + arr +
        "<br>Променлива от тип Object e: " + obj.course + ' ' +
        obj.part + ", където JavaScript е пропърти с име \"course\"" +
        ", а 1 е пропърти с името \"part\""

}

function test () {
    document.getElementById('result').innerHTML = ""
}