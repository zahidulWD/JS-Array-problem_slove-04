
// problem_06
// 🧩 Problem 6: Find Numbers Greater Than 10
// Write a function that returns all numbers greater than 10.
// Sample Input: [5, 12, 18, 3]
// Sample Output: [12, 18]


// slove

function findNumber10 (arr){

    let result = [];

    for ( i = 0; i < arr.length; i++){
        if (arr[i] > 10){
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [5, 12, 18, 3];
console.log(findNumber10(numbers));