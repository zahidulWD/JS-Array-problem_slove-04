
// problem_03

// 🧩 Problem 3: Find the Smallest Number
// Write a function to find the smallest number in an array.
// Sample Input: [10, 5, 20]
// Sample Output: 5


// slove

function smallestNumber (arr){

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

const numbers = [10,5,20];
console.log(smallestNumber(numbers));