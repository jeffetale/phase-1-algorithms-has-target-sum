function hasTargetSum(array, target) {
  const numSet = new Set();

  for (let num of array) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

module.exports = hasTargetSum;


/* 
  Write the Big O time complexity of your function here
  Time complexity of this function is O(n) because it iterates through the input array once.
*
*/

/* 
  Add your pseudocode here
  - Create an empty set called numSet.
  - Iterate through each number (num) in the input array.
  - Calculate the complement by subtracting the current number from the target.
  - If the complement exists in numSet, return true .
  - Add the current number to numSet.
  - If no pair is found, return false.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}


