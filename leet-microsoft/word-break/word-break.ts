/**
 * https://leetcode.com/problems/word-break/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s and wordDict[i] consist of only lowercase English letters.
 * All the strings of wordDict are unique.
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
  let done = false;

  function dfs(i: number) {
    if (done) return;

    if (i >= s.length) {
      done = true;
      return;
    }

    for (let word of wordDict) {
      if (word === s.substring(i, i + word.length)) {
        if (done) return;
        dfs(i + word.length);
      }
    }
  }

  dfs(0);
  return done;
}
