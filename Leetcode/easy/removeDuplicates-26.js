/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    for(var j = 1;j< nums.length;j++) {
        // console.log(nums[i],nums[j]);
        if (nums[j] !== nums[i]) {
            i++;
            console.log(nums[i],nums[j]);
            nums[i] = nums[j];
        }
    }
    // console.log(nums[i],nums[j]);
    return i + 1;
};

removeDuplicates([1,1,1,2,2,3,4,5,6,7,8]);