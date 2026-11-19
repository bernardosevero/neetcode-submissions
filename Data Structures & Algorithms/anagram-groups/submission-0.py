class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
      anagramGroup = defaultdict(list)

      for text in strs:
        anagram = [0] * 26
        for char in text:
            anagram[ord(char) - ord('a')] += 1

        anagramGroup[tuple(anagram)].append(text)
    
      return list(anagramGroup.values())