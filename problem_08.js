
// problem_08

// 🧩 Problem 8: Convert All Names to Uppercase
// Write a function that converts all names in an array to uppercase.
// Sample Input: ["sabbir", "rakib", "tamim"]
// Sample Output: ["SABBIR", "RAKIB", "TAMIM"]


// slove

function converToUppercase (arr){

    let result = [];

    for (let i = 0; i < arr.length; i++){
        result.push(arr[i].toUpperCase())
    }
    return result;
}

const names = ["sabbir", "rakib", "tamim"];
console.log(converToUppercase(names));