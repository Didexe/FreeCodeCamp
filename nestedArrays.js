'use strict'

// function steamrollArray(arr) {
    // for (let i = 0; i < arr.length; i += 1) {
    //   if (Array.isArray(arr[i])) {
    //     if (arr[i].length === 0) {
    //       // console.log(arr[i])
    //       arr.splice(i, 1);
    //       i -= 1;
    //       continue;
    //     } if (arr[i].length === 1) {
    //         if (typeof arr[i][0] === 'number') {
    //           arr.splice(i, 1, parseInt(arr[i][0]))
    //         } else {
    //           arr.splice(i, 1, arr[i][0].slice(0))
    //         }
          // if (arr[i].length > 1) {
          //   for (let j = 0; j < arr[i].length; j += 1) {

            // }
          // }
        // }
        // arr.splice(arr.indexOf(array), 1, array.splice(0, array.length-1))
      // }
    // }
function steamrollArray(arr) {
  for (let i in arr){
    if (Array.isArray(arr[i])) {
      arr.splice(arr[i], 1);
       i -= 1;
    }
  }
  let str = arr.join(',');
    arr = str.split(',');

    for (let i in arr) {
      if (!isNaN(arr[i])) {
        arr.splice(i, 1, Number(arr[i]));
      }
      if (arr[i] === '[object Object]') {
        arr.splice(i, 1, {});
      }
      }
     console.log(arr)
  // return arr;
}

steamrollArray([1, [], [3, [[4]]]]);