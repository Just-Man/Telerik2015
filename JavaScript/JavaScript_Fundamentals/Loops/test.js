/**
 * Created by just on 01.06.15.
 */
function test(count) {
    var i;
    for (i = 0; i < count; i++) {
        console.log(i);
    }
}
start = new Date().getTime() / 1000;
test(1000000);
end = new Date().getTime() / 1000;
time = end - start;

/*function test1(count) {
    var i;
    for (i = 0; i < count; i += 1) {
        console.log(i);
    }
}
var start1 = new Date().getTime() / 1000;
test1(1000000);
var end1 = new Date().getTime() / 1000,
    time1 = end1 - start1;*/
console.log(time);
//console.log(time1);