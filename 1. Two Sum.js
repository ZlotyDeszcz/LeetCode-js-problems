// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

nums = [2,7,11,15];
target = 26;

var twoSum = function(nums, target) {
    for (i=0; i< nums.length; i++ ) {
        for (k=0; k<nums.length; k++){
            nums[i]+nums[k];
            if(nums[i]+nums[k] == target) {
                return [i,k];
            }
        }
    }
};
console.log(twoSum(nums,target));