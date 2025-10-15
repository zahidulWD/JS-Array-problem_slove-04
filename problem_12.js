
// problem_12

// 🧩 Problem 12: Remove Duplicate Values
// Write a function that removes duplicate values from an array.
// Sample Input: [1, 2, 2, 3, 3, 4]
// Sample Output: [1, 2, 3, 4]


// slove

function removeDuplicateValue (arr){

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 2, 3, 3, 4];
console.log(removeDuplicateValue(numbers));