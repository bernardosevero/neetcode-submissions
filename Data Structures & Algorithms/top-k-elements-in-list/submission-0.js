class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = Array.from({length: nums.length+1}, () => [])
        let occurrences = {}

        for(let i = 0; i < nums.length; i++) {
            occurrences[nums[i]] = (occurrences[nums[i]] || 0) + 1 
        }

        Object.entries(occurrences).forEach(([value, key]) => {
            frequency[key].push(value)
        })

        let result = []

        for (let i = frequency.length-1; i > 0; i--) {
            if (frequency[i].length > 0) {
                for(let freq of frequency[i]) {
                    result.push(freq)
                    if (result.length === k) return result
                }
            }
        }

        return result
    }

}
