function reverseString(str) {
  newArray = str.split('')
  newArray.reverse()
  
  return str = newArray.join('');
}

reverseString("hello");