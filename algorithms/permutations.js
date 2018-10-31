/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = (nums, chosen, permutations) => {
    chosen = chosen || [];
    permutations = permutations || [];
    // console.log('permutations:', permutations);
    if (nums.length === 0) {
        permutations.push(chosen);
        return permutations;
    } else {

        for (var i = 0; i < nums.length; i++) {
            // choose and remove i
            var num = nums.splice(i, 1)[0]; // a
            chosen.push(num); // [a]

            // explore
            permutations.push(permute(nums, chosen, nums));

            // insert removed num
            nums.splice(i, 0, num);

            // delete last character
            chosen.pop();
        }
    }
};

permute([1,2,3]);