
// problem_15

// 🧩 Problem 15: Find First Even Number
// Write a function that returns the first even number from an array.
// Sample Input: [1, 3, 7, 8, 10]
// Sample Output: 8



// slove

function findFirstEvenNumber (arr){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            return arr[i];
        }
    }
    return null;
}

const numbers = [1, 3, 7, 8, 10];
console.log(findFirstEvenNumber(numbers));