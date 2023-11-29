/**
 * https://leetcode.com/problems/divide-two-integers/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 * The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
 * Return the quotient after dividing dividend by divisor.
 * Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
 * -231 <= dividend, divisor <= 231 - 1
 * divisor != 0
 */
export function divide(dividend: number, divisor: number): number {
  let result = 0;

  if (dividend > 0 && divisor > 0) {
    let accum = 0;
    while (accum < dividend) {
      accum += divisor;
      if (accum > dividend) return result;
      result++;
    }
  } else if (dividend < 0 && divisor < 0) {
    let accum = 0;
    while (accum > dividend) {
      accum += divisor;
      if (accum < dividend) return result;
      result++;
    }
  } else if (dividend > 0 && divisor < 0) {
    let accum = dividend;
    while (accum > 0) {
      accum += divisor;
      if (accum < 0) return result;
      result--;
    }
  } else {
    let accum = dividend;
    while (accum < 0) {
      accum += divisor;
      if (accum > 0) return result;
      result--;
    }
  }

  const MIN = Math.pow(-2, 31);
  const MAX = Math.pow(2, 31) - 1;
  if (result > MAX) return MAX;
  else if (result < MIN) return MIN;

  return result;
}
