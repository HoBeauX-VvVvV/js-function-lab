/*
Exercise 1: maxOfTwoNumbers()
In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.
Exercise 1 has been completed for you:
*/
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    }else {
        return y;
    }
}
console.log('Excercise 1 result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()
Write a function named isAdult. It should take an age (number) and 
return 'Adult' if the age is 18 or over and 'Minor' otherwise.
Example: isAdult(21) should return 'Adult'.
Complete the exercise in the space below:
*/
const isAdult = (age) => {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor'
    }
}
console.log('Exercise 2 result:', isAdult(21));

/*
Exercise 3: isCharAVowel()
Write a function named isCharAVowel that takes a single character 
as an argument. It should return true if the character is a vowel 
and false otherwise. For the purposes of this exercise, the 
character y should not be considered a vowel.
Example: isCharAVowel('a') should return true.
Complete the exercise in the space below:
*/ 
const isCharAVowel = (x) => {
    if (x === 'a') {
        return 'true';
    } else if (x === 'e') {
        return 'true';
    } else if (x === 'i') {
        return 'true';
    } else if (x === 'o') {
        return 'true';
    } else if (x === 'u') {
        return 'true';
    } else {
        return 'false';
    }
}
console.log('Exercise 3 result:', isCharAVowel('k'));

/*
Exercise 4: generateEmail()
Create a function named generateEmail. It should take two strings:
a name and a domain. It should return a simple email address.
Example: generateEmail('johnsmith', 'example.com') should return 
'johnsmith@example.com'.
Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
    return `${name}@${domain}`;
}
console.log('Exercise 4 result:', generateEmail('BeauX', 'hotmail.com')); 

/*
Exercise 5: greetUser()
Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.
Example: greetUser('Sam', 'morning') should return 
"Good morning, Sam!"
Complete the exercise in the space below:
*/

const greetUser = (name, timeOfDay) => {
    return `Good${timeOfDay}, ${name}!`
}
console.log('exercise 5 result:', greetUser('BeauX', 'afternoon'));

/*
Exercise 6: reverseString()
Define a function called reverseString. It should take a string and 
return it with its characters in reverse order. 
Example: reverseString('rockstar') should return the string 
"ratskcor".
Complete the exercise in the space below:
*/
 const reverseString = (word) => {
      return word.split('').reverse().join('');
 }

console.log('Exercise 6 result:', reverseString('JavaScript Is Cool'));

/*
Exercise 7: checkPalindrome()
Define a function called checkPalindrome. It should take a 
string and return true if the string is a palindrome 
(reads the same forwards and backwards) and false otherwise.
Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.
Complete the exercise in the space below:
*/
const checkPalindrome = (vocab) => {
    let reverse = vocab.split('').reverse().join('');
    if (vocab === reverse) {
        return 'True';
    } else {
        return 'False';
    }
}
console.log('Exercise 7 result:', checkPalindrome('rotator'));

/*
Exercise 8: maxOfThree()
Define a function, maxOfThree. It should accept three 
numbers and return the largest among them.
Example: maxOfThree(17, 4, 9) should return 17.
Complete the exercise in the space below:
*/

const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
    return num1;
   } else if (num2 > num1 && num2 > num3) {
    return num2;
   } else if (num3 > num1 && num3 > num2) {
    return num3;
   }
}
console.log('Exercise 8 result:', maxOfThree(2, 15, 46));

/*
Exercise 9: calculateTip()
Create a function called calculateTip. It should take two 
arguments: the bill amount and the tip percentage 
(as a whole number). The function should return the 
amount of the tip.
Example: calculateTip(50, 20) should return 10.
Complete the exercise in the space below:
*/

const calculateTip = (bill, tip) => {
    percent = tip/100;
    return bill * percent;
}
console.log('Exercise 9 result:', calculateTip(50, 20));

/*
Exercise 10: convertTemperature()
Write a function named convertTemperature. It takes two arguments: 
a temperature and a string representing the scale 
('C' for Celsius, 'F' for Fahrenheit). Convert the temperature 
to the other scale.
Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).
Complete the exercise in the space below:
*/
 const convertTemperature = (temp, scale) => {
    if (scale === 'C') {
    tempF = temp * (9 / 5) + 32;
    return tempF;
    } else if (scale === 'F') {
    tempC = temp * (9 / 5) - 32;
    return `%{tempC} C`;
   }
 }
 console.log('Exercise 10 result:', convertTemperature(40, 'C'));

 /*
Exercise 11: basicCalculator()
Create a function named basicCalculator. It should take three arguments: 
two numbers and a string representing an operation ('add', 'subtract', 'multiply',
'divide'). Perform the provided operation on the two numbers. In operations where 
the order of numbers is important, treat the first parameter as the first operand 
and the second parameter as the second operand.
Example: basicCalculator(10, 5, 'subtract') should return 5.
Complete the exercise in the space below:
*/

const basicCalculator = (num4, num5, operator) => {
    if (operator === 'add'){
        return num4 + num5;
    } else if (operator === 'subtract') {
        return num4 - num5;
    } else if (operator === 'multiply') {
        return num4 * num5;    
    } else if (operator === 'divide') {
        return num4 / num5;
    }
}
console.log('Exercise 11 result:', basicCalculator(10, 5, 'add'));

/*
Exercise 12: calculateGrade()
Define a function called calculateGrade. It should take a numerical score and 
return the corresponding letter grade (A, B, C, D, F). For example, 90 and above 
yields an 'A', 80-89 is a 'B', and 70-79 is a 'C', 60-69 is a 'D' and anything lower 
than a 60 is an 'F'.
Example: calculateGrade(100) should return A.
Complete the exercise in the space below:
*/

const calculateGrade = (gradeNum) => {
    if (gradeNum > 100) {
        return 'Liar!';
    } else if(gradeNum <= 100 && gradeNum >= 90) {
        return 'A';
    } else if(gradeNum <90 && gradeNum >= 80) {
        return 'B';
    } else if(gradeNum <80 && gradeNum >= 70) {
        return 'C';
    } else if(gradeNum <70 && gradeNum >= 60) {
        return 'D';
    } else if(gradeNum <60 &&  gradeNum>= 0) {
        return 'F';
    } else if(gradeNum < 0) {
        return "How'd you manage that ?!?"
    }
}

console.log('Exercise 12 result:', calculateGrade(-57));

/*
Exercise 13: createUsername()
Define a function called createUsername. It should take a first name and a 
last name and return a username. The username should be a combination of the 
following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.
Example: createUsername('Samantha', 'Green') should return 'SamGre12'.
Complete the exercise in the space below:
*/

const createUserName = (firstName, lastName) => {
    let userFirst = firstName.slice(0,3);
    let userLast = lastName.slice(0,3);
    let nameNum = firstName.length + lastName.length;
    return `${userFirst}${userLast}${nameNum}`;
}
console.log('Exercise 13 result:', createUserName('Samantha', 'Green'));

/*
Exercise 14: numArgs()
Challenge yourself with numArgs. This function should return 
the count of arguments passed to it when called.
Complete the exercise in the space below:
*/

const numArgs = (...args) => {
    let output = 0 
        output = output + args.length; {
    }
return output;
}
console.log('Exercise 14 result:', numArgs('one', 'two', 3, 'four', 5, 'six'));