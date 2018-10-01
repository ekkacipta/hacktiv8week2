function xo(str) {
    if (str.split('o').length-1 !== str.split('x').length-1) {
      return false;
    } else {
      return true;
    }
  }
  
  
  console.log(xo('xoxoxo'))
  console.log(xo('oxooxo'))
  console.log(xo('oxo'))
  console.log(xo('xxxooo'))
  console.log(xo('xoxooxxo'))
  