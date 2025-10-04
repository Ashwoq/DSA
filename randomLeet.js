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

console.log(twoSum([2, 11, 15, 7], 9));
