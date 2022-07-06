// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

nums1= [2,5];
nums2= [3,1];

var findMedianSortedArrays = function(nums1, nums2) {
    added=nums1.concat(nums2);
    sorted=added.sort();
    if(sorted.length % 2 ==0){
        medianIndex = Math.floor(sorted.length / 2);
        median = (sorted[medianIndex]+sorted[medianIndex-1])/2;
    }
    else{
        medianIndex = sorted.length / 2;
        // console.log(medianIndex);
        median = sorted[medianIndex];
        // console.log(median);
    }
    return median;
};

console.log(findMedianSortedArrays(nums1,nums2));