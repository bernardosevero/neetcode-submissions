class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seenValues = {}

        for index, value in enumerate(nums):
            print(value, index)
            if (target - value) in seenValues:
                return [seenValues.get(target - value), index]
            
            seenValues[value] = index

        
        return []
