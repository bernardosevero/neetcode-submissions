class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix[0].length, columns = matrix.length
        let top = 0, bottom = columns-1

        while (top <= bottom) {
            let mid = Math.floor((top+bottom) / 2)

            if(matrix[mid][rows-1] < target) top = mid+1 
            if(matrix[mid][0] > target) bottom = mid-1
            else break
        }

        if(!(top<=bottom)) return false
        let left = 0, right = rows-1
        let row = Math.floor((top+bottom) / 2)

        while(left <= right) {
            let mid = Math.floor((left+right) / 2)

            if(matrix[row][mid] === target) return true
            if(matrix[row][mid] < target) left = mid+1
            if(matrix[row][mid] > target) right = mid-1
        }

        return false
    }
}
