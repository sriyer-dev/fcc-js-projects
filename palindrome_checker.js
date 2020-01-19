function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  let revstr = str.split('').reverse().join('');
]  if (str == revstr){
    return true;
  }
  return false;
}





palindrome("1 eye for of 1 eye.");
