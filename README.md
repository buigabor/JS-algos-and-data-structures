# JS Algorithms

I did an udemy course on JavaScript Algorithms and Data Structures. There were several practice tasks, which are included in this README file.

### Task 1: Return the number of each character in a string found

Steps: 
1. Make regex for charaters
2. Split the array, loop over each char(string)
3. If char is number/letter AND is not yet a key in obj - add to obj, add 1 to count
if char is number/letter AND is a key in obj - add 1 to count
if char is not number/letter - do nothing

function charCount(str) {
    //make obj to return at end
    let regex = /[a-z0-9]/gi;
    let objCharCount = {}

 ### Task 2: Compare 2 arrays, return true if every value in array has it's corresponding squared value in array 2

 Steps: 
 1. Edge case: empty arrays
 2. Use indexOf, to find array1[i] squared value in array2
 3. If found remove that element in array2 (splice)

 ### Task 3: Given 2 strings, write a function which determinates whether the 2nd string is an anagram of the 1st one or not

 Steps:
 1. Check edge case, when there are no strings passed in
 2. Use Frequency Count Method. 
 3. Collect chars in 2 objects, then compare them.

 ### Task 4: Count unique values - accepts a sorted array and counts the unique values in the array