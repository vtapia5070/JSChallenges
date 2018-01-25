/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. 
Note that the answer must be a substring, 
"pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    // longest substring
    let longest = '';
    // current substring start index
    let currentStart = 0;

    // helper to create substring
    function createUniqueSubString(start) {

        let uniqueString = '';
        for (let i = start; i < s.length; i++) {
            if (uniqueString.indexOf(s[i]) === -1) {
                uniqueString += s[i];
            } else {
                return uniqueString;
            }
        }

        return uniqueString;

    }

    while (currentStart < s.length) {

        let currentString = createUniqueSubString(currentStart);
        if (currentString.length > longest.length) {
            longest = currentString;
        }
        currentString = '';
        currentStart++;

    }

    return longest.length;

};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring('c');