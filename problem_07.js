
// problem_07

// 🧩 Problem 7: Double Each Number
// Write a function that returns a new array where each number is doubled.
// Sample Input: [2, 3, 4]
// Sample Output: [4, 6, 8]


// slove

function doubleNumber (arr){

    let result = [];

    for (let i = 0; i < arr.length; i++){
        result.push(arr[i] * 2)
    }
    return result;
}
const numbers = [2, 3, 4];
console.log(doubleNumber(numbers));