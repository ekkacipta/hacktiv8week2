function shoutOut(a){
  var balik = ' '
  for (var i = 0; i < a.length ; i++ ){
      balik += a[i]
    } return balik
  }
   console.log(shoutOut('hello function'))

 function calculateMultiply(num1, num2){
    return num1*num2
  }
    var num1 = 5 
    var num2 = 6
    var hasilPerkalian = calculateMultiply(num1,num2) 
   
  console.log(hasilPerkalian)




  function processSentence(name,age,address,hobby){
    return 'Nama saya ' + name + ', umur saya ' + age + ', alamat saya ' + address + ', hobby saya ' + hobby
  }
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence = processSentence(name,age,address,hobby);
  console.log(fullSentence);
  