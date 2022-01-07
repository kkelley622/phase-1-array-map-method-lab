const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   tutorials.map(function(string) {
//     console.log('string ', string.split(" "))
//     const stringArray = string.split(" ")
//     stringArray.map(function(words) {
//       return stringArray.charAt(0).toUpperCase() + stringArray.slice(1);
//     })
//   return tutorials
// }

// const titleCased = () => {
//   return tutorials.charAt(0).toUpperCase() + tutorials.slice(1);
// }

// const caps = tutorials.split(' ').map(capitalize).join(' ');

// caps

function titleCased() {
  const tc = tutorials.map(function(sentence){

    const splitSentence = sentence.split(" ")

    const capSentence = splitSentence.map(function(word) {
      const capWord = word[0].toUpperCase() + word.slice(1)
      return capWord
    })
    return capSentence.join(" ")
  })
  return tc
}