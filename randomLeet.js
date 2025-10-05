// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSumReturnNumber = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }
  return false;
};

const twoSumReturnNumber2 = function (nums, target) {
  // let a = {};
  // for (let i = 0; i < nums.length; i++) {
  //   a[nums[i]] = target - nums[i];
  // }

  // for (const key in nums) {
  //   // console.log(key, a[key]);
  //   if (nums.includes(a[key])) {
  //     return [Number(key), a[key]];
  //   }
  // }

  const seen = new Set();
  for (let num of nums) {
    console.log(num);
    let complement = target - num;
    if (seen.has(complement)) {
      return [num, complement];
    }
    seen.add(num);
  }
};

// console.log(twoSumReturnNumber([2, 7, 11, 15], 9));

const twoSum = function (nums, target) {
  const mapper = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (mapper[difference] !== undefined) {
      return [mapper[difference], i];
    }
    mapper[nums[i]] = i;
  }

  return false;
};

// console.log(twoSum([2, 11, 15, 7], 9));

// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = function (x) {
  let result = 0,
    initial = x;
  while (initial > 0) {
    // console.log("Result", result);
    result = result * 10 + Math.floor(initial % 10);
    // console.log("Result", result);
    initial = Math.floor(initial / 10);
  }

  return result === x;
  // return String(x) === String(x).split("").reverse().join("");
};

console.log(isPalindrome(121));

/*
newlist.append() -> 121%10 -> 1
n -> 121/10 -> 12

12 -> 12%10 -> 2
12 -> 12/10 -> 1

1 -> 1%1 ?? n
1 -> 1/10 -> 0
n=121
result=0;
while(n>0){

result = result * 10 + Math.floor(n%10);
n = Math.floor(n/10)

}
*/
