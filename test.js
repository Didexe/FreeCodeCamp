'use strict';
function updateInventory(arr1, arr2) {
    for (var arr of arr2) {
      arr1.push(arr);
    }
    var result = arr1.reduce(function(res, item) {
      if (res[item[1]]) {
        res[item[1]] += item[0];
      } else {res[item[1]] = item[0];}
      return res;
    }, {});
    console.log(Object.keys(result).map(key => [result[key], key]));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);