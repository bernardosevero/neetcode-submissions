class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0

        l = 0
        charSet = set()
        maxCount = 1
        
        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l=l+1
            charSet.add(s[r])
            maxCount = max(maxCount, r - l + 1)


        return maxCount