/*
Given an array of integers, find two numbers such that they add
up to a specific target number.

The function twoSum should return indices of the two numbers such
that they add up to the target, where index1 must be less than index2.

You may assume that each input would have exactly one solution.
*/

function twoSums (arr, target) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      return [obj[arr[i]], i];
    } else {
      obj[target - arr[i]] = i;
    }
  }
  return [0, 1];
}

// console.log(twoSums([2, 7, 11, 15], 9)); // [0, 1])
// console.log(twoSums([3, 0, 2, 4], 5)); // [0, 2];
// console.log(twoSums([18, 20, 4, -5, 25], 20)); // [3, 4];
