const text1 = "this a sentence";
const letter1 = "s"

function countText(a, b) {
    let count = 0;
    for (i = 0; i < a.length; i++) {
        if (a.charAt(i) === b) {
            count = count + 1;
        }

    }
    return count;

}

console.log(countText(text1, letter1));