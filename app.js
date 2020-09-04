//____________________________PROBLEM SOLVING PATTERNS____________________________

// Task 1: Return the number of each character in a string found

// function charCount(str) {
//     //make obj to return at end
//     let regex = /[a-z0-9]/gi;
//     let objCharCount = {}


//     let strSplit = str.split("")
// loop over each string
//     for (const char of strSplit) {
//         //if char is number/letter AND is not yet a key in obj - add to obj, add 1 to count
//         if (char.match(regex) && !objCharCount.hasOwnProperty(char)) {
//             objCharCount[char.toLowerCase()] = 1;
//         }
//         //if char is number/letter AND is a key in obj - add 1 to count
//         else if (char.match(regex) && objCharCount.hasOwnProperty(char)) {
//             objCharCount[char.toLowerCase()] += 1
//         } //if char is not number/letter - do nothing
//         else if (!char.match(regex)) {
//             console.log(`Only letters and numbers are counted. The following is not counted:${char}`);

//         }
//     }
//     console.log(objCharCount);

// }


// Refactor charCount function

// function charCount(str) {
//     //make obj to return at end
//     let regex = /[a-z0-9]/gi;
//     let objCharCount = {}

//     //loop over each string
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (char.match(regex)) {
//             objCharCount[char] = ++objCharCount[char] || 1;
//         }
//         if (!char.match(regex)) {
//             console.log(`Only letters and numbers are counted. The following is not counted: "${char}"`);
//         }
//     }

//     console.log(objCharCount);
// }

// charCount("Your name is _  111+:!!")




//____________________________________________________________________________________



// Task 2: Compare 2 arrays, return true 
// if every value in array has it's corresponding squared value in array 2

//Solution 1 (worse BigO)

// function compareTwoArrays(array1, array2) {
//     if (!array1.length === array2.length) {
//         return false;
//     }

//     for (let i = 0; i < array1.length; i++) {
//         let correctIndex = array2.indexOf(array1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         } else {
//             array2.splice(correctIndex, 1)
//         }
//         if (array2.length === 0) {
//             return true;
//         }
//     }

// }

// let a = compareTwoArrays([2, 1, 3, 3, 3], [1, 9, 4, 9, 9])
// console.log(a);

// Solution 2 (better BigO)

// function sameCompareTwoArrays(arr1, arr2) {
//     let countFrequency1 = {};
//     let countFrequency2 = {};

//     for (const num1 of arr1) {
//         countFrequency1[num1] = (countFrequency1[num1] || 0) + 1
//     }

//     for (const num2 of arr2) {
//         countFrequency2[num2] = (countFrequency2[num2] || 0) + 1
//     }
//     console.log(countFrequency1);
//     console.log(countFrequency2);

//     for (let key in countFrequency1) {
//         if (!(key ** 2 in countFrequency2)) {
//             return false;
//         }
//         if (countFrequency1[key] !== countFrequency2[key ** 2]) {
//             return false;
//         }
//     }
//     return true;

// }
// let solution = sameCompareTwoArrays([1, 2, 5, 4, 4, 4], [4, 1, 25, 16, 16, 16])
// console.log(solution);



//____________________________________________________________________________________



//Task 3: Give 2 strings, write a function which determinates 
//whether the 2nd string is an anagram of the 1st one

// function anagramChecker(arr1, arr2) {

//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     let countFrequency1 = {};
//     let countFrequency2 = {};

//     for (let char of arr1) {
//         countFrequency1[char] = (countFrequency1[char] || 0) + 1;
//     }

//     for (let char of arr2) {
//         countFrequency2[char] = (countFrequency2[char] || 0) + 1;
//     }

//     console.log(countFrequency1);
//     console.log(countFrequency2);

//     for (const key in countFrequency1) {

//         if (!(key in countFrequency2)) {
//             return false;
//         }

//         if (countFrequency1[key] !== countFrequency2[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// let solution = anagramChecker("aaddd&abbx", "aaab&bxddd")
// console.log(solution);


//____________________________________________________________________________________



// Task 4: Count unique values - accepts a sorted array and counts the unique values in the array

// function countUniqueValues(arr) {
//     // debugger;
//     let i = 0
//     let j = 1;
//     if (arr.length === 0) {
//         return 0;
//     }


//     while (j < arr.length) {
//         if (arr[i] === arr[j]) {
//             j++
//         } else if (arr[i] !== arr[j]) {
//             i++;
//             arr.splice(i, 1, arr[j]);
//             j++;
//         }
//     }

//     return [arr, i + 1];
// }

// let solution = countUniqueValues([1, 2, 3])
// console.log(solution);



//____________________________________________________________________________________



// Task 5: Given 2 positive integers, find out if the 2 numbers have
// the same frequency of digits

// function sameFrequency(num1, num2) {
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     num1 = Array.from(num1.toString()).map((number) => {
//         return Number(number)
//     });
//     num2 = Array.from(num2.toString()).map(Number)

//     console.log(num1);
//     console.log(num2);

//     for (const char of num1) {
//         frequencyCounter1[char] ? ++frequencyCounter1[char] : frequencyCounter1[char] = 1;
//     }

//     for (const char of num2) {
//         frequencyCounter2[char] ? ++frequencyCounter2[char] : frequencyCounter2[char] = 1;
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);

//     for (let key in frequencyCounter1) {
//         if (!frequencyCounter2[key]) {
//             return false;
//         }

//         if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// let solution = sameFrequency(12351141, 32411511)
// console.log(solution);




//____________________________________________________________________________________



//Task 6: Are there any duplicates in the arguments passed in

// function areThereDuplicates(...args) {
//     let counter = {};
//     for (const char of args) {
//         if (!counter[char]) {
//             counter[char] = 1;
//         } else if (counter[char]) {
//             return true;
//         }
//     }
//     return false;

// }

// let solution = areThereDuplicates(1, 23, 2, "A", 4, 5, "A");
// console.log(solution);



//____________________________________________________________________________________



//Task 7 :Given a sorted array and a target average, determine if there is a pair in the array
//where the average of the pair the target average


// function averagePair(array, target) {
//     //check if array empty
//     if (array.length === 0) {
//         return false;
//     }

//     // target * 2 = (array[i] + array[j]) / 2 
//     // pointer i starts from the beginning, pointer j starts from the end
//     let i = 0
//     let j = array.length - 1

//     while (i < j) {
//         // if average found return true
//         if (array[i] + array[j] === target * 2) {
//             return true;
//         }
//         // if i+j > target * 2 -> j--
//         if (array[i] + array[j] > target * 2) {
//             j--;
//         }
//         // if i+j < target * 2 -> i++
//         else {
//             i++
//         }
//     }
//     return false;
// }

// let solution = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
// console.log(solution);



//____________________________________________________________________________________



//Task 8: Takes in 2 strings, if the characters in the first string appear somewhere
//in the second string, without their order changing, return true

// function isSubsequence(str1, str2) {
//     if (!str1) return true;
//     let i = 0;
//     let j = 0

//     while (j < str2.length) {
//         if (str1[i] === str2[j]) {
//             i++
//             j++
//         } else {
//             j++
//         }
//         if (i === str1.length) {
//             return true;
//         }
//     }
//     return false;

// }

// let solution = isSubsequence("sing", "stghing")
// console.log(solution);



//____________________________________________________________________________________



//Task 9:Given an array, find the maximum sum of a subarray with the length of the number
// passed to the function

// function maxSubarraySum(arr, num) {

//     if(arr.length < num){
//         return null;
//     }

//     let maxSum = 0;
//     let temp = 0;

//     //sum of numbers for target amount 
//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }

//     temp = maxSum;

//     //substract the first element
//     //add the next element
//     for (let i = num; i < arr.length; i++) {
//         temp = temp - arr[i - num] + arr[i]
//         temp > maxSum ? maxSum = temp : "";
//     }


//     return maxSum
// }

// let solution = maxSubarraySum([100, 200, 300, 400], 2)
// console.log(solution);



//____________________________________________________________________________________




//Task 10: Create a function which accepts an array and a positive integer
//return the minimal length if a subarray of which the sum is greater or equal to the integer passed to the fn.

// function minSubArrayLen(nums, sum) {
//     let total = 0;
//     let temp = 0;
//     let end = -1;
//     let start = -1;
//     let tempLens1;
//     let tempLens2;
//     let tempLensInCurrentRound;
//     let smallestLens = Infinity;
//     debugger;
//     // add up the numbers till total > sum, store the length of the array
//     while (end < nums.length - 1) {
//         while (total <= sum && end < nums.length - 1) {
//             end++
//             total += nums[end];
//         }

//         if (start === 0) {
//             tempLens1 = end - start;
//         } else {
//             tempLens1 = end - start + 1;
//         }


//         // substract the first element, check if total > sum still applicable, if so store the length of arr

//         temp = total
//         while (temp >= sum) {
//             start++
//             temp -= nums[start];

//         }

//         tempLens2 = end - start + 1;

//         tempLensInCurrentRound = Math.min(tempLens1, tempLens2);

//         smallestLens = Math.min(tempLensInCurrentRound, smallestLens)

//         total = temp;

//         if (total < sum && smallestLens === nums.length + 1) {
//             smallestLens = 0;
//         }
//     }
//     return smallestLens;

//     // substract till total < sum, then add the next element in the nums array

//     //check if total > sum, if so store the length

//     //subtract and add the elements until end

// }
// let solution = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);
// console.log(solution);






//____________________________________RECURSION______________________________________






//TASK 1: Factorial 
// let sum = 1

// function factorial(num) {

//     if (num === 0) {
//         return 1;
//     }
//     if (num === 1) {
//         return 1;
//     }

//     return num * factorial(num - 1)
// };

// let a = factorial(10)
// console.log(a);



//____________________________________________________________________________________



//Task 2: Math.pow clone

// function power(num, n) {
//     if (n === 0) {
//         return 1;
//     }
//     if (n === 1) {
//         return num;
//     }

//     return num * power(num, n - 1);
// }

// console.log(power(2, 0));



//____________________________________________________________________________________



//Task 3: Write a function which gives back the sum of the array

// let total = 1;

// function productOfArray(arr) {

//     if (arr.length === 0) {
//         return;
//     }
//     total *= arr[0]
//     productOfArray(arr.slice(1))
//     return total;
// }

// console.log(productOfArray([-6, 0]));



//____________________________________________________________________________________



//Task 4: Fibonacci generator give the n-th element

// function fib(n) {

//     if (n === 0) {
//         return 0
//     }
//     if (n === 1) {
//         return 1
//     }


//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(4));




//____________________________________________________________________________________


//__________________________________SEARCH ALGORITHMS__________________________________

// Task 2: Binary Search

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let middle = Math.ceil((right - left) / 2);

//     while (left <= right) {
//         if (target === arr[middle]) {
//             return middle;
//         }
//         if (arr[middle] < target) {
//             left = middle + 1;
//             middle = Math.ceil((right + left) / 2);
//         } else if (arr[middle] > target) {
//             right = middle - 1;
//             middle = Math.ceil((right + left) / 2);
//         }
//     }
//     return -1;
// }
// let solution = binarySearch([1, 2, 3, 4, 5, 10, 34, 36, 77, 111, 112, 113, 114, 5555, 6666], 10);
// console.log(solution);

//________________________________________________________________________________________



//Task 3: Selection Sort

// function selectionSort(arr) {
//     let currentSmallest;
//     let currentSmallestIndex = 0;


//     for (let i = 0; i < arr.length; i++) {
//         currentSmallest = arr[i];
//         currentSmallestIndex = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (currentSmallest > arr[j]) {
//                 currentSmallest = arr[j];
//                 currentSmallestIndex = j;
//             }
//         }
//         if (currentSmallestIndex !== i) {
//             let temp;
//             temp = arr[i];
//             arr[i] = arr[currentSmallestIndex];
//             arr[currentSmallestIndex] = temp;
//         }

//     }
//     return arr;
// }
// let solution = selectionSort([3, 1, 7, 5, 25, 28, 11, 44, -2, 0]);

// console.log(solution);



//________________________________________________________________________________________



//Taks 4: Insertion Sort

// function insertionSort(arr) {
//     let currentSmallest;
//     debugger;
//     for (let i = 1; i < arr.length; i++) {
//         currentSmallest = arr[i];
//         for (let j = i - 1; j >= 0 && arr[j] > currentSmallest; j--) {
//             arr[j + 1] = arr[j];
//             arr[j] = currentSmallest;
//         }
//     }
//     return arr;

// }

// let solution = insertionSort([3, 51, 3, 5, -1, 111, 12, 1, 0])
// console.log(solution);


//________________________________________________________________________________________



// Task 5: Merge Sort

// function merging(arr1, arr2) {

//     let newArray = [];
//     let i = 0;
//     let j = 0;
//     debugger;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             newArray.push(arr1[i]);
//             i++;
//         } else {
//             newArray.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         newArray.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         newArray.push(arr2[j]);
//         j++;
//     }

//     return newArray;
// }



// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2)
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merging(left, right);
// }

// let solution = mergeSort([3, 4, 10, 1, 5, 11, 30]);
// console.log(solution);


//________________________________________________________________________________________



//Task 6: Quick Sort

// function pivot(arr, start = 0, end = arr.length - 1) {
//     function swap(array, i, j) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     let pivot = arr[start];
//     let swapIndex = start;

//     for (let i = start + 1; i <= end; i++) {
//         if (pivot > arr[i]) {
//             swapIndex++;
//             swap(arr, swapIndex, i);
//         }
//     }

//     swap(arr, start, swapIndex)
//     console.log(arr);
//     return swapIndex;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         let pivotIndex = pivot(arr, left, right)
//         //left side
//         quickSort(arr, left, pivotIndex - 1);
//         //right side
//         quickSort(arr, pivotIndex + 1, right);
//     }
//     return arr;
// }
// let solution = quickSort([4, 8, 2, 51, 23, 5, 6, 7, -1, 3])
// console.log(solution);


//________________________________________________________________________________________


//Task 7: Radix Sort

// function getDigit(num, i) {
//     num = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
//     return num;
// }

// function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(arr) {

//     let maxDigits = 0;

//     for (const num of arr) {
//         let currentDigitCount = digitCount(num);
//         maxDigits = Math.max(maxDigits, currentDigitCount);
//     }
//     return maxDigits;
// }


// function radixSort(arr) {
//     let maxDigitCount = mostDigits(arr);
//     debugger;

//     for (let i = 0; i < maxDigitCount; i++) {

//         let digitBuckets = Array.from({
//             length: 10
//         }, () => [])

//         for (let j = 0; j < arr.length; j++) {
//             let lastDigit = getDigit(arr[j], i);
//             digitBuckets[lastDigit].push(arr[j]);
//         }
//         arr = [].concat(...digitBuckets);

//     }

// }

// console.log(radixSort([12, 344, 551130, 213, 32]));