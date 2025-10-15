
// problem_10

// 🧩 Problem 10: Find Total Word Length
// Write a function to find the total number of characters from all words.
// Sample Input: ["Hi", "JS", "World"]
// Sample Output: 7


// slove

function findTotalWordLength (arr){

    let total = 0;

    for(let i = 0; i < arr.length; i++){
        total += arr[i].length;
    }
    return total;
}
const words = ["Hi", "JS", "World"];
console.log(findTotalWordLength(words));