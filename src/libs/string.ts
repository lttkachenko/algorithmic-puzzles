export const stringIsAnagram1Liner = (str1: string, str2: string, verbose = false): boolean => str1
  .split('').sort().join('') === str2.split('').sort().join('');

export const stringIsAnagram = (str1: string, str2: string, verbose = false): boolean => {
  if (str1.length !== str2.length) {
    if (verbose) console.log('Is Anagram? ', false);
    return false;
  }

  const strArr1 = str1.split('');

  for (let i = 0; i < str2.length; i++) {
    const char = str2.charAt(i);
    if (!strArr1.includes(char)) {
      if (verbose) console.log('Is Anagram? ', false);
      return false;
    }
    strArr1.splice(strArr1.indexOf(char), 1);
  }

  if (verbose) console.log('Is Anagram? ', !strArr1.length);
  return !strArr1.length;
};

export const stringIsPalindrome = (str: string, verbose = false): boolean => {
  const middle = Math.ceil(str.length % 2) - 1;

  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(str.length - i)) {
      if (verbose) console.log('Is Palindrome? ', false);
      return false;
    }
  }

  if (verbose) console.log('Is Palindrome? ', true);
  return true;
};
