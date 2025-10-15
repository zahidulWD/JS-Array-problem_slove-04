
// problem_09

// 🧩 Problem 9: Filter Only String Elements
// Write a function that filters and returns only string elements from an array.
// Sample Input: [1, "apple", true, "banana"]
// Sample Output: ["apple", "banana"]

// slove

function filterStringElements(arr){

    let result = [];

    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i]  === "string"){
            result.push(arr[i]);
        }
    }
    return result;
}

const names = [1, "apple", true, "banana"];

console.log(filterStringElements(names));