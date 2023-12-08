/**
 * https://leetcode.com/problems/unique-paths/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * The test cases are generated so that the answer will be less than or equal to 2 * 109.
 * 1 <= m, n <= 100
 */
export function uniquePaths(m: number, n: number): number {
  let result = 0;
  const maxRow = m - 1;
  const maxCol = n - 1;

  function dfs(row: number, col: number) {
    if (row === maxRow || col === maxCol) {
      result++;
      return;
    }
    dfs(row + 1, col);
    dfs(row, col + 1);
  }

  dfs(0, 0);
  return result;
}
