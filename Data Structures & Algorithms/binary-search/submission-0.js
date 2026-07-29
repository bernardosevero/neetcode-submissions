    function binarySearch(left, right, target, nums) {
        if(left > right) return -1
        let mid = Math.floor((left+right)/2)

        if(nums[mid] === target) return mid
        if(nums[mid] > target) return binarySearch(left, mid-1, target, nums)
        if(nums[mid] < target) return binarySearch(mid+1, right, target, nums)
    }

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return binarySearch(0, nums.length-1, target, nums)
    }


}
