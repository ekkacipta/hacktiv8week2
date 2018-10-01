var word = 'JavaScript'
var second = 'is'
var third = 'awesome'
var fourth = 'and'
var fifth = 'I'
var sixth = 'love'
var seventh = 'it!'
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)







var word = 'wow JavaScript is so cool'
var exempleFirstWord = word[0] + word[1] + word[2]
var SecondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13] + word[14] 
var ThirdWord = word[15] + word[16]
var FourthWord = word[18] + word[19]
var FifthWord = word[21] + word[22] + word[23] + word[24]
console.log('First Word: ' + exempleFirstWord)
console.log('Second Word: ' + SecondWord)
console.log('Third Word: ' + ThirdWord)
console.log('Fourth Word: ' + FourthWord)
console.log('Fifth Word: ' + FifthWord)







var word = 'wow JavaScript is so cool'
var exempleFirstWord = word.substring(0, 3)
var SecondWord = word.substring(4, 14) 
var ThirdWord = word.substring(15, 17)
var FourthWord = word.substring(18, 21 )
var FifthWord = word.substring(21, 25)
console.log('First Word: ' + exempleFirstWord)
console.log('Second Word: ' + SecondWord)
console.log('Third Word: ' + ThirdWord)
console.log('Fourth Word: ' + FourthWord)
console.log('Fifth Word: ' + FifthWord)







var word = 'wow JavaScript is so cool'
var exempleFirstWord = word.substring(0, 3)
var SecondWord = word.substring(4, 14) 
var ThirdWord = word.substring(15, 17)
var FourthWord = word.substring(18, 20 )
var FifthWord = word.substring(21, 25)

var firstWordLength = exempleFirstWord.length;
var secondWordLength = SecondWord.length;
var thirdWordLength = ThirdWord.length;
var fourthWordLength = FourthWord.length;
var fifthWordLength = FifthWord.length;

console.log('First Word: ' + exempleFirstWord + ', with length: ' + firstWordLength)
console.log('Second Word: ' + SecondWord + ', with length: ' + secondWordLength)
console.log('Third Word: ' + ThirdWord + ', with length: ' + thirdWordLength)
console.log('Fourth Word: ' + FourthWord + ', with length: ' + fourthWordLength)
console.log('Fifth Word: ' + FifthWord + ', with length: ' + fifthWordLength)