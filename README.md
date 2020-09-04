# JS Algorithms

I did an udemy course on JavaScript Algorithms and Data Structures. There were several practice tasks, which are included in this README file.

# Task 1: Return the number of each character in a string found

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

  