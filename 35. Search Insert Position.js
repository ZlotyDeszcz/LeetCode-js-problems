// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
nums = [1,3,5,6];
target = 4;

var searchInsert = function(nums, target) {
    console.log(nums.indexOf(target));
    if(nums.indexOf(target)>-1){
                return nums.indexOf(target);
            }
        else{
                pushed = nums.push(target);
                sorted = nums.sort();
                return nums.indexOf(target);
            }
    };

console.log(searchInsert(nums,target));