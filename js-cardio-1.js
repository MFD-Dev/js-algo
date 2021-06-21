// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// function reverseString(str) {
//   return 'Let\'s Start'
// }

//1
// function reverseString(str) {
// // 1st split string into an array
// // split turns the string into an array; 
// const strArr = str.split('');  //no space = each letter in it's own array value. with space to separate words into array values.
// strArr.reverse();  // that has it reversed in a array.
// // console.log(strArr)
// // now need to return it in a string using the join method.
// return strArr.join(""); // '' returns still in array.  "" returns as a string.
                    
// }

// clean up
// function reverseString(str) {




//   return str
//   .split('')
//   .reverse()
//   .join('');
// }


// 2
// let revString = '';
// for(let i = str.length; i >= 0; i--) {
//   revString = revString + str[i]; // could do str[0] to get the 'h'
//   console.log(i)
//   }
// return revString;

// }

//3
// let revString = '';
// for (let i = 0; i <= str.length -1; i++) {
//   revString = str[i] + revString;
//   }
//   return revString;
// }

//4
// let revString = '';
// for(let char of str) {
//   revString = char + revString;

//   }
//   return revString;

// }


//5
// let revString = '';
// str.split('').forEach(function(char) {
//   revString = char + revString;
// });
//   return revString;
// }

////5B Arrow Function

// let revString = '';
// str.split('').forEach(char => revString = char + 
//   revString);
//   return revString;

// }
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// function isPalindrome(str) {
//   const revString = str
//   .split('') // turn into a array
//   .reverse('') // reverse it
//   .join(''); // join letters together
  
//   return revString === str;
// }

// const output = isPalindrome('racecar');




// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// function reverseInt(int) {
//   const revString  = int  // create a variable
//   .toString() // convert it into a string
//   .split('') // split creates  a array seperated by each letter
//   .reverse() // reverse it
//   .join(); // join it back together

//   return parseInt(revString);  // turn the string into a integer
// }

// const output = reverseInt(54321); // 1?  not sure what the error is

// // const output = reverseInt(-54321) * Math.sign(int);

// console.log(output);



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
// function capitalizeLetters(str) {
//   const revString = str
//   .toUpperCase
//   .split(' ')
//   .indexOf(0);
//   return revString;
// }

// console.log(capitalizeLetters("i love javascript"));



//
//1. not showing correct answer
// function capitalizeLetters(str) {
//   const strArr = str.toLowerCase().split(' '); // create a lower case array.  use a space to seperate each word.

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] = strArr[i].substring(0, 1).toUpperCase() +   // use substring to grab the first zero index letter of ea word.  change to upperCase.
//     strArr[i].substring(1);   // adding back the entire word starting at index of 1.
//   }
//   return strArr.join(' ');  // return the array, but use join to bring back the complete words.
// }

// const ooutput = capitalizeLetters('i love javascript');

2.
// function capitalizeLetters(str) {
//     return str
//     .toLowerCase()
//     .split(' ')
//     .map(function (word) {  // manipulate a array and return anoter array from it.  or return something else.
//       return word[0].toUpperCase() + word.substring(1);
//     })
//     .join(' ');
// }

//  const output = capitalizeLetters('i love javascript');


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
// function maxCharacter(str) {
//   const charMap = {};  // use a object as a map.  set this to a empty object literal.
//   let maxNum = 0;     // number of occurrences
//   let maxChar = '';  // number with the most occurences
//   // loop through string as a array.
//   str.split('').forEach(function (char) {
//   if(charMap[char]) {// want to look at key value pair.
//     charMap[char]++;
//   } else {
//     charMap[char] = 1;
//   }
//   });  

//   for(let char in charMap) {
//     if(charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }



// const output = maxCharacter('javascripttt')




// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
     } else if(i % 3 === 0) {
        console.log('Fizz');
     } else if(i % 5 === 0) {
        console.log('Buzz');
     }
    }
}


// Call Function
// const output = isPalindrome('hello');
// const output = reverseString('hello');

// console.log(output);

const output = fizzBuzz();
console.log(output);