/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i >= nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, long = 0) {
  if (i === words.length) return long;
  long = Math.max(words[i].length, long);
  return longest(words, i + 1, long);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newS = "") {
  if (i >= str.length) return newS;
  newS += str[i];
  return everyOther(str, i + 2, newS);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, reverse = "") {
  let lI = i;
  let rI = str.length - lI - 1;
  if (str[lI] !== str[rI]) {
    return false;
  } else {
    reverse += str[rI];
  }
  if (reverse.length === str.length) return reverse;

  return isPalindrome(str, (i = +1), reverse);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i >= arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, cop = "") {
  if (cop.length === str.length) return cop;
  let idx = str.length - i - 1;
  cop += str[idx];
  return str, i + 1, cop;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    }
    if (typeof obj[key] === "object") {
      arr.push(...gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0) {
  if (i >= arr.length) return -1;
  if (arr[i] === val) return i;
  binarySearch(arr, val, i + 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
