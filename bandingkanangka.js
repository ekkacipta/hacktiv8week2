function bandingkanAngka(angka1, angka2) {
    if(angka1 < angka2){
    var check = true
    return check 
  } else if ( angka1 > angka2){
    check = false
    return check
  } else {
    check = -1
    return check
  }
  }
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); 
  console.log(bandingkanAngka(5, 3)); 
  console.log(bandingkanAngka(4, 4)); 
  console.log(bandingkanAngka(3, 3)); 
  console.log(bandingkanAngka(17, 2));