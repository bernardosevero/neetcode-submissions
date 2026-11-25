class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hash1 = {}
        hash2 = {}

        for index in range(len(s)):
            if hash1.get(s[index]):
                hash1[s[index]] += 1
            else:
                hash1[s[index]] = 1
        
            if hash2.get(t[index]):
                hash2[t[index]] += 1
            else:
                hash2[t[index]] = 1

        if hash1 == hash2:
            return True

        return False