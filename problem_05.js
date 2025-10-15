// problem_05


// 🧩 Problem 5: Count Odd Numbers
// Write a function that counts how many odd numbers are in an array.
// Sample Input: [1, 2, 3, 4, 6]
// Sample Output: 2



// slove

function countOddNumber (arr){

    let count = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 1){
            count++;
        }
    }
    return count;
}
const numbers = [1,2,3,4,6];
console.log(countOddNumber(numbers));
