class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const mapChars = {
            ")": "(",
            "]": "[",
            "}": "{",
        }

        for (let char of s) {
            if (mapChars[char]) {
                if(stack.length > 0 && mapChars[char] === stack[stack.length -1]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(char)
            }
        }

        return stack.length === 0;
    }
}
