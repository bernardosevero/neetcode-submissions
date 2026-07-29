class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const formatString = s.replaceAll(' ', '').toLowerCase().replaceAll( /[^a-zA-Z0-9]/g , "")
        let iPointer = 0
        let jPointer = formatString.length - 1
        console.log(formatString)
        while( iPointer <= jPointer) {
            if(formatString[iPointer] !== formatString[jPointer])
                return false
            iPointer++
            jPointer--
        }

    return true
    }
}

