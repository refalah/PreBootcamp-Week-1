function isPrime(num) {


    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }

    let root = Math.sqrt(num);

    for (i = 2; i <= root; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;

}

console.log(isPrime(12));