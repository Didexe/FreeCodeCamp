'use strict';

function smallestCommons(arr) {
    
    arr.sort()
    let collection = [],
        lcm = arr[1] * 2;

    for (let i = arr[0]; i <= arr[1]; i += 1) {
        collection.push(i);
    }

    function isMultile(number) {
        if (lcm % number === 0) {
            return true;
        } 
        return false;
    }

    function checkLcm() {
        for (let num of collection) {
            if (isMultile(num)) {
                continue;
            } else {lcm += arr[1];
              return true;
            } 
        // return false;
        }
    }

    while (checkLcm()) {
        checkLcm()
    }

    console.log(lcm)
    }


smallestCommons([23,18]);