
// probhlem_04

// 🧩 Problem 4: Count Even Numbers
// Write a function that counts how many even numbers are in an array.
// Sample Input: [1, 2, 3, 4, 6]
// Sample Output: 3


// slove

function countEvenNumber (arr) {

    let count = 0;

    for (i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count++;
        }
    }
    return count;
}

const numbers =[1, 2, 3, 4, 6];
console.log(countEvenNumber(numbers));