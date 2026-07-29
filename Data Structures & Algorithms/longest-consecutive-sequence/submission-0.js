class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let set = new Set(nums)
        let longest = 0 

        for(let num of set) {
            if (!set.has(num-1)) {
                let next = 1
                while(set.has(num+next)) next++

                longest = Math.max(longest, next)
            }
        }
        return longest
    }

}
