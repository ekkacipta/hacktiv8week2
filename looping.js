var text = ''
var i = 1
while(i <= 20 ){
  text = i + ' - I love coding' ; i++
  if((i % 2) != 0) 
  console.log(text)
}

var text = ''
var i = 20
while(i >= 1 ){
  text = i + ' - I love coding' ; i--
  if((i % 2) != 0) 
  console.log(text)
}







var text = ' - I love coding'
for( var i = 1; i <= 20; i++){
  console.log(i + text)
}

var text = ' - I love coding'
for( var i = 20; i >= 1; i--){
  console.log(i + text)
}






var nilai = 1
var akhir = 100
while( nilai <= akhir){
  if(nilai % 2 == 0){
    console.log( nilai + ' genap')
  } else{
    console.log( nilai + ' ganjil')
  } nilai++
}






for(i=1;i<100;i+2) {
    if( i % 3 === 0) {
      console.log(i + ' kelipatan 3')
    } else{
      console.log(i)
    }i++
  }
  
  for(i=1;i<100;i+5){
    if( i % 6 === 0) {
      console.log(i + ' kelipatan 6')
    } else{
      console.log(i)
    }i++
  }
  
  for(i=1;i<100;i+9){
    if( i % 10 === 0) {
      console.log( i + 'kelipatan 10')
    } else{
      console.log(i)
    } i++
  }