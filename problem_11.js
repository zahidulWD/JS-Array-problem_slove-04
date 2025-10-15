
// problem_11

// 🧩 Problem 11: Find Index of a Specific Element
// Write a function that returns the index of a given value in an array.
// Sample Input: [10, 20, 30, 40], value = 30
// Sample Output: 2

// slove

function findIndex (arr, value){

    for(let i = 0; i < arr.length; i++){
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

const numbers = [10, 20, 30, 40];
const value = 30;

console.log(findIndex(numbers,value));