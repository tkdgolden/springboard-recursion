/** product: calculate the product of an array of numbers. */
function product(nums) {
    if (nums.length === 1) return nums[0];
    return nums[0] * product(nums.toSpliced(0, 1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
    if (words.length === 1) return words[0].length;
    return Math.max(words[0].length, longest(words.toSpliced(0, 1)));
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
    if (str.length <= 2) return str[0];
    return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
    if (str.length <= 1) return true;
    return ((str[0] === str[str.length - 1]) && isPalindrome(str.slice(1, str.length - 1)));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val) {
    if (arr.length === 0) return NaN;
    if (arr[0] === val) return 0;
    return (findIndex(arr.toSpliced(0, 1), val) + 1) || -1;
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
    if (str.length === 1) return str[0];
    return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
    if (obj) {
        const entries = Object.entries(obj);
        if (entries.length === 0) return;
        const first = entries[0][1];
        if (typeof first === 'string') {
            return [first, gatherStrings(Object.fromEntries(entries.toSpliced(0, 1)))].flat();
        }
        else if (typeof first === 'object') {
            return [gatherStrings(first), gatherStrings(Object.fromEntries(entries.toSpliced(0, 1)))].flat();
        }
        else {
            return gatherStrings(Object.fromEntries(entries.toSpliced(0, 1)));
        }
    }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {
    if (arr.length === 0) return -1;
    const midIndex = Math.floor(arr.length / 2);
    if (arr[midIndex] === val) return midIndex;
    if (arr[midIndex] > val) {
        const leftHalf = binarySearch(arr.toSpliced(midIndex, arr.length - midIndex), val);
        if (leftHalf < 0) return -1;
        return leftHalf;
    }
    if (arr[midIndex] < val) {
        const rightHalf = binarySearch(arr.toSpliced(0, midIndex + 1), val);
        if (rightHalf < 0) return -1;
        return rightHalf + midIndex + 1;
    }
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch
};
