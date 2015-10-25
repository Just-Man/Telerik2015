/**
 * Created by just on 09.06.15.
 */

function Person(fName, lName, age, gender) {
    if (!gender) {gender = 'Male'; } else {gender = 'Female'; }
    var persons = {
        firstName: fName,
        lastName: lName,
        /*fullName: function personFullName() {
            return 'Full name is ' + this.firstName + ' ' + this.lastName;
        },*/
        gender: gender,
        age: age
    };
    return persons;
}

/*function prototypeFind() {
    if (!Array.prototype.find) {
        Array.prototype.find = function (callback) {
            var i, len = this.length;
            for (i = 0; i < len; i += 1) {
                if (callback(this[i], i, this)) {
                    return this[i];
                }
            }
        };
    }
}*/

function createPerson() {
    var all = [],
        allPlus18,
        allUnderAged,
        allWomenAge,
        groupPeoples,
        youngestMale,
        //test,
        peoples = [
            new Person('Ivan', 'Ivanov', parseInt(Math.random() * 50, 10)),
            new Person('Mariika', 'Mariikova', parseInt(Math.random() * 50, 10), 1),
            new Person('Petar', 'Petrov', parseInt(Math.random() * 50, 10)),
            new Person('Dragan', 'Draganov', parseInt(Math.random() * 50, 10)),
            new Person('Vesela', 'Veselieva', parseInt(Math.random() * 50, 10), 1),
            new Person('Ivan', 'Testov', parseInt(Math.random() * 50, 10)),
            new Person('Kalinka', 'Kalinkova', parseInt(Math.random() * 50, 10), 1),
            new Person('Cvetan', 'Testov', parseInt(Math.random() * 50, 10)),
            new Person('Pesho', 'Testov', parseInt(Math.random() * 50, 10)),
            new Person('Malinka', 'Malinkova', parseInt(Math.random() * 50, 10), 1)];
    peoples.forEach(function (_, i) {
        all[i] = peoples[i];
    });
    /*test = JSON.stringify(all); // Convert array of objects to string
    console.log('This is result from test' + test);*/
    // <---  Begin code from Problem 2 --->
    allPlus18 = all.filter(function (age) { //Problem 2
        if (age.age > 18) {                 //Problem 2
            return true;                    //Problem 2
        }                                   //Problem 2
    });                                     //Problem 2
    // <---  End code from Problem 2 --->
    // <---  Begin code from Problem 3 --->
    allUnderAged = all.filter(function (age) {              //Problem 3
        if (age.age > 12 && age.age < 18) {                 //Problem 3
            return true;                                    //Problem 3
        }                                                   //Problem 3
    });                                                     //Problem 3
    // <---  End code from Problem 3 --->
    // <---  Begin code from Problem 4 --->
    allWomenAge = all.filter(function (person) {
        if (person.gender === "Female") {
            return true;
        }    //Problem 4
    }).reduce(function (sum, number, _, arr) {                                                      //Problem 4
        var count = arr.length;                                                                     //Problem 4
        return sum + number.age / count;                                                            //Problem 4
    }, 0);                                                                                          //Problem 4
    // <---  Begin code from Problem 5 --->
    prototypeFind();
    youngestMale = all.sort(function (a, b) {
        return a.age - b.age;
    }).find(function (_, item) {
        return !item.gender;
    });
    // <---  End code from Problem 5 --->
    // <---  Begin code from Problem 6 --->
    groupPeoples = all.reduce(function (obj, item) {
        if (obj[item.firstName[0]]) {
            obj[item.firstName[0]].push(item);
        } else {
            obj[item.firstName[0]] = [item];
        }
        return obj;
    }, {});
    // <---  End code from Problem 6 --->
    document.getElementById('result').innerHTML = 'Резултата се показва в конзолата';
    console.log("======================== Problem: 1.) All persons ===============================");
    console.log(all);
    console.log("==================== Problem: 2.) All persons over 18 ===========================");
    console.log(allPlus18);
    console.log("=================== Problem: 3.) All persons under 18 ===========================");
    console.log(allUnderAged);
    console.log("================== Problem: 4.) Average age of women's ==========================");
    console.log(allWomenAge);
    console.log("======================= Problem 5.) Youngest person =============================");
    console.log(youngestMale);
    console.log("======================== Problem 6.) Group peoples ==============================");
    console.log(groupPeoples);
}
/*Problem 2. People of age
Write a function that checks if an array of person contains only people of age (with age 18 or greater)
Use only array methods and no regular loops (for, while)*/

function problem2() {
    document.getElementById('result').innerHTML = 'Погледнете решението на задача 1';
}

/*  Problem 3. Underage people
    Write a function that prints all underaged persons of an array of person
    Use Array#filter and Array#forEach
    Use only array methods and no regular loops (for, while)    */

function problem3() {
    document.getElementById('result').innerHTML = 'Погледнете решението на задача 1';
}

/*  Problem 4. Average age of females
    Write a function that calculates the average age of all females, extracted from an array of persons
    Use Array#filter
    Use only array methods and no regular loops (for, while)    */

function problem4() {
    document.getElementById('result').innerHTML = 'Погледнете решението на задача 1';
}

/*Problem 5. Youngest person
Write a function that finds the youngest male person in a given array of people and prints his full name
Use only array methods and no regular loops (for, while)
Use Array#find*/

function problem5() {
    document.getElementById('result').innerHTML = 'Погледнете решението на задача 1';
}

/*Problem 6. Group people

Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
Use Array#reduce
Use only array methods and no regular loops (for, while)
Example:

    result = {
        'a': [{
            firstname: 'Asen',
            // *...........*
        }, {
            firstname: 'Anakonda',
            // *.... *
        }],
        'j': [{
            firstname: 'John',
            // * ... *
        }]
    };
*/

function problem6() {
    document.getElementById('result').innerHTML = 'Погледнете решението на задача 1';
}