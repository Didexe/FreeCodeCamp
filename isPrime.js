'use strict';

function sumPrimes(num) {
    let sum = 2,
        maxDiv = Math.floor(Math.sqrt(num));

    function isPrime(number) {
        for (let div = 3; div < number; div += 2) {
            if (div <= maxDiv) {
                if (number % div === 0) {
                    return false;
                }
            } 
        } return true;
    }

for (let i = 3; i <= num; i += 2) {
    if (isPrime(i)) {
        sum += i;
    }
}
console.log(sum)
}

sumPrimes(977);