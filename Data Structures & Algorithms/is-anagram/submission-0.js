class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        let map1 = new Map()
        let map2 = new Map()

        for (let char of s) {
            if(map1.has(char)) {
                map1.set(char, map1.get(char)+1)
            } else {
                map1.set(char, 1)
            }
        }

        for (let char of t) {
            if(map2.has(char)) {
                map2.set(char, map2.get(char)+1)
            } else {
                map2.set(char, 1)
            }
        }

        for (let [key, value] of map1) {
            if(map1.get(key) !== map2.get(key)) return false
        }

        return true
    }
}
