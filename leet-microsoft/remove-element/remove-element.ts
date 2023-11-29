/**
 * https://leetcode.com/problems/remove-element/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 * Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 50
 * 0 <= val <= 100
 */
export function removeElement(nums: number[], val: number): number {
  let lp = 0;
  let rp = nums.length - 1;
  while (lp < rp) {
    const left = nums[lp];
    if (left === val) {
      while (nums[rp] === val) {
        rp--;
      }

      const temp = left;
    }
  }

  return 0;
}
