
// problem_02

// 🧩 Problem 2: Find the Largest Number
// Write a function to find the largest number in an array.
// Sample Input: [10, 50, 20]
// Sample Output: 50


// slove

function largestNumber (arr){

    let largest = arr[0];

    for(let i = 1; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

const numbers = [10,50,20];
console.log(largestNumber(numbers));