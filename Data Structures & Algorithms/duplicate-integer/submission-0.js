class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numbers = new Set()

        for (let num of nums) {
            if (numbers.has(num)) return true
            numbers.add(num)
        }

        return false
    }
}
