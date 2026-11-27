class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)

        for text in strs:
            anagram = [0] * 26
            for char in text:
                anagram[ord(char) - ord('a')] += 1

            anagrams[tuple(anagram)].append(text)


        return list(anagrams.values())