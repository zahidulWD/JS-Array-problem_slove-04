
// problem_13

// 🧩 Problem 13: Sort Array in Ascending Order
// Write a function to sort an array in ascending order.
// Sample Input: [3, 1, 4, 2]
// Sample Output: [1, 2, 3, 4]

// slove

function sortAscending (arr){
    return arr.sort((a,b) =>  a- b)
}
const numbers =  [3, 1, 4, 2];
console.log(sortAscending(numbers));