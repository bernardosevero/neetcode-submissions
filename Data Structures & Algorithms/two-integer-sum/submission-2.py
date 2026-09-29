class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        counted = {}

        for i in range(len(nums)):
            if (target - nums[i]) in counted:
                return [counted.get(target - nums[i]), i]
            
            counted[nums[i]] = i

        return []