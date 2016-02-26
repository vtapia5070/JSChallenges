/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 
as one sorted array.

Note:
You may assume that nums1 has enough space 
(size that is greater or equal to m + n) to hold additional elements from nums2.
The number of elements initialized in nums1 and nums2 are m and n respectively.

https://leetcode.com/problems/merge-sorted-array/
*/

function merge (a, b) {
  var sorted = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      sorted.push(a.shift());
    } else {
      sorted.push(b.shift());
    }
  }
  while (a.length) {
    sorted.push(a.shift());
  }
  while (b.length) {
    sorted.push(b.shift());
  }
  return sorted;
}

// console.log(merge([0, 2, 3, 4], [5]));

function mergeSort (arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var mid = Math.floor(len/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5,2,8,1,4,0]));


