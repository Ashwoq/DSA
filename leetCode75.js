// 1768. Merge String Alternately
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

//Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
const mergeStringAlternate = function (word1, word2) {
  let merged = [],
    x = 0,
    y = 0,
    len = word1.length > word2.length ? word1.length * 2 : word2.length * 2;

  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      merged[i] = word1[x] ?? " ";
      x++;
    }
    if (i % 2 !== 0) {
      merged[i] = word2[y] ?? " ";
      y++;
    }
  }

  return merged.filter((x) => x.trim("") !== "").join("");
};

// console.log(mergeStringAlternate("ab", "pqrs"));

//1071. Greatest Common Divisor of Strings
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

function gcdOfString(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  function gcd(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
  }

  const slicingLength = gcd(str1.length, str2.length);

  return str1.slice(0, slicingLength);
}

// console.log(gcdOfString("ABCABCABCABC", "ABC"));

// 1431. Kids With the Greatest Number of Candies

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

function kidsWithCandies(candies, extraCandies) {
  let output = [];
  for (let i = 0; i < candies.length; i++) {
    output[i] = candies.every((x) => candies[i] + extraCandies >= x);
  }

  return output;
}

// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));

// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

function canPlaceFlowers(flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    let prev = i === 0 || flowerbed[i - 1] === 0;
    let next = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (prev && flowerbed[i] === 0 && next) {
      flowerbed[i] = 1;
      count++;
      if (count >= n) return true;
    }
  }

  return count >= n;
}

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));

// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

function reverseVowelsSol1(s) {
  const splitter = s.split("");
  const vow = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let outter = [];

  splitter.map((x, i) => {
    if (vow.includes(x)) {
      outter.unshift(x);
      splitter[i] = " ";
    }
  });

  // console.log(splitter, outter);
  let j = 0;
  splitter.map((x, i) => {
    if (x === " ") {
      splitter[i] = outter[j];
      j++;
    }
  });

  return splitter.join("");
}

// console.log(reverseVowelsSol1("leetcode"));

function reverseVowels(s) {
  const splitter = s.split("");
  const vow = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let left = 0;
  let right = splitter.length - 1;

  while (left < right) {
    if (vow.includes(splitter[left])) {
      if (vow.includes(splitter[right])) {
        let temp = splitter[left];
        splitter[left] = splitter[right];
        splitter[right] = temp;
        left++;
        right--;
      } else {
        right--;
      }
    } else {
      left++;
    }
  }

  return splitter.join("");
}

// console.log(reverseVowels("leetcode"));

// 151. Reverse Words in a String

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

const reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

// console.log(reverseWords(" a good   example        "));

// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// const productExceptSelfSol2 = function (nums) {
//   let count = 0;
//   let out = [];

//   while (out.length !== nums.length) {
//     let arr = [];
//     if (count === out.length) {
//       arr = nums.filter((x, i) => i !== count);
//       out.push(arr.reduce((x, y) => Math.abs(x) * Math.abs(y), 1));
//     } else {
//       count++;
//     }
//   }

//   // sum = nums.reduce((x, y) => x * y, 1);
//   // nums.forEach((x) => arr.push(sum / x));

//   return out;
// };

// console.log(productExceptSelfSol2([-1, 1, 0, -3, 3]));

const productExceptSelf = function (nums) {
  const nLength = nums.length;
  let result = new Array(nLength).fill(1);

  let suffix = 1,
    prefix = 1;

  for (let i = 0; i < nLength; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nLength - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
