const nums = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 16];

const oddEven = nums.forEach(num => {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
});

