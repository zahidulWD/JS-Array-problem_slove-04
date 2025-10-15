
// problem_01
// 🧩 Problem 1: Sum of All Numbers in an Array
// Write a function to find the sum of all numbers in an array.
// Sample Input: [1, 2, 3, 4]
// Sample Output: 10


// slove

function sumArry (arr) {

    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

const numbers = [1,2,3,4]
console.log(sumArry(numbers));