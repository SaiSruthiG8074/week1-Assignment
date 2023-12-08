/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Check if the array is not empty
    if (numbers.length === 0) {
        console.log("Array is empty");
        return undefined;
    }

    let maxEle = numbers[0];
    numbers.forEach(element => {
        if (maxEle < element) {
            maxEle = element;
        }
    });

    return maxEle;
}
module.exports = findLargestElement;