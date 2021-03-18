// Only change code below this line
function myBouncer(arr) {
var noviArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == false) {
        noviArr.push(arr[i]);
    }
}
    return noviArr;
}
// Only change code above this line

console.log(myBouncer([444, "", 0, false, null, 8, undefined, "", true, 0, false])); // Change this line
module.exports = myBouncer;
