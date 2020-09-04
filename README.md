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