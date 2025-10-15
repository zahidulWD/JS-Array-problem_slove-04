
// problem_14

// 🧩 Problem 14: Reverse an Array
// Write a function that reverses the elements of an array.
// Sample Input: [1, 2, 3, 4]
// Sample Output: [4, 3, 2, 1]


// slove

function reverseArray (arr){

    let result = [];

    for (let i =  arr.length -1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}


const numbers = [1, 2, 3, 4];

console.log(reverseArray(numbers));
