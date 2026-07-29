class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)

        let result = right

        while(left <= right) {
            let mid = Math.floor((right + left) / 2)
            let hours = 0

            for (const p of piles) {
                hours += Math.ceil(p/mid)
            }

            if (hours <= h) {
                result = mid
                right = mid-1
            } else {
                left = mid+1
            }
        }
        return result
    }
}
