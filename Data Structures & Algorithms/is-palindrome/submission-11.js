class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sanitizedString = s.trim().toLowerCase()

        let l = 0
        let r = sanitizedString.length - 1
        while (l<r) {
            while(l<r && !this.alphaNum(sanitizedString[l])) {
                l++
            }
            while(r>l && !this.alphaNum(sanitizedString[r])){
                r--
            }
            if (sanitizedString[l] !== sanitizedString[r]) return false
            l++
            r--

        }

        return true
    }

    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
