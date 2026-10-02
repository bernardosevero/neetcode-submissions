class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0
        r = len(s)-1
        s = s.lower()

        while r > l:
            while l < r and not s[l].isalnum():
                print(s[l].isalnum())

                l += 1
                
            while r > l and not s[r].isalnum():
                r -= 1

            print(s[l], s[r])
            if s[l] != s[r]:
                return False

            l += 1
            r -= 1
        print(l, r)
        return True