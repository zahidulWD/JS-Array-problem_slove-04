
// problem_16

// 🧩 Problem 16: Find Index of First Number Greater Than 5
// Write a function that returns the index of the first number greater than 5.
// Sample Input: [1, 3, 7, 2]
// Sample Output: 2


// slove

function findIndexNumber (arr){

    for (i = 0; i < arr.length; i++){
        if (arr[i] > 5){
            return i;
        }
    }
    return -1;
}

const numbers = [1, 3, 7, 2];
console.log(findIndexNumber(numbers));
