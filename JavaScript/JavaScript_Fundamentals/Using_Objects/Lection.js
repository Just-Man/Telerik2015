/**
 * Created by just on 09.06.15.
 */
function person(fName, lName, mark, hairColor, hairType) {
    var persons = {
        firstName: fName,
        lastName: lName,
        fullName: function personFullName() {
            return 'Name is ' + this.firstName + ' ' + this.lastName;
        },
        marks: mark,
        hair: {
            color: hairColor,
            type: hairType
        },
        finalScore: function getFinalScore() {
            var final,
                i,
                len,
                score = 0;
            for (i = 0, len = mark.length; i < len; i += 1) {
                score += this.marks[i];
                final = score / mark.length;
            }
            return final;
        }
    };
    return persons;
}

var  test = person('Test', 'Testov', [6, 3.45], 'green', 'line');
var  test1 = person('ivan', 'Testov', [3, 3.45], 'black', 'dot');

console.log(test.fullName());
console.log(test.finalScore());
console.log(test.hair.type);
console.log(test.hair.color);
console.log(test1.fullName());
console.log(test1.finalScore());
console.log(test1.hair.type);
console.log(test1.hair.color);

function countWords(text) {
    var i,
        count = {},
        word,
        words = text.toLowerCase().split(' ');
    for (i in words) {
        word = words[i];
        if (!count[word]) {
            count[word] = 0;
        }
        count[word] += 1;
    }
    return count;
}
var text = ' Lorem ipsum dolor sit amet consectetur adipisicing elit ' +
    'Ab ad consequuntur eaque eligendi esse eum facere inventore ipsa iure labore magnam maxime minima modi perferendis totam' +
    'veniam vitae Autem et excepturi explicabo maiores maxime minima obcaecati officiis quas quia sint ' +
    'Ab consectetur ea enim facere laudantium perferendis qui voluptatem Dolor eligendi maxime neque numquam ut veniam vero voluptate ' +
    'Ab accusantium dicta dolores laboriosam quasi quibusdam rerum suscipit voluptatibus' +
    ' Accusamus ad adipisci aperiam aut debitis dolorum enim est explicabo harum in ipsam ipsum iure minus nobis nostrum nulla officia ' +
    'omnis optio quae reprehenderit similique temporibus unde velit vitae voluptas voluptate voluptates voluptatibus A accusamus ' +
    'consequuntur deleniti deserunt dignissimos dolor dolorem ea eaque est eveniet hic modi mollitia nobis veniam voluptas voluptate ' +
    'voluptatibus? Aliquid autem consectetur corporis dolor enim eum exercitationem, facilis fuga harum in laboriosam magni mollitia  ';
var dumi = countWords(text),
    duma,
    result = [],
    sorted;
for (duma in dumi) {
    //console.log(duma + ' --> ' + dumi[duma]);
    result = duma + ' --> ' + dumi[duma];
}

