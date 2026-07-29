class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let res = 0
        let l = 0
        let r = height.length - 1
        let leftHigh = height[l]
        let rightHigh = height[r]

        while (l < r) {
            if(leftHigh > rightHigh) {
                r--
                rightHigh = Math.max(rightHigh, height[r])
                res += rightHigh - height[r]
            } else {
                l++
                leftHigh = Math.max(leftHigh, height[l])
                res += leftHigh - height[l]
            }
        }

        return res
    }
}

