// QUESTION 1
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// ANSWER

/*let userData = prompt("Write a uppercase , lowercase letter and number for ASCII code")

let ascCode = userData.charCodeAt(0);

let result

// Condition

if(ascCode >= 65 && ascCode <= 90){
    result = (userData + " is uppercase letter")
}

else if(ascCode >= 97 && ascCode <= 122){
    result = (userData + " is lowercase letter")
}

else if(value >=48 && value <=57){
    result = (userData + " is number")
}

else(result = "This is not a number or letter")

document.write(result)*/

// QUESTION 2
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// ANSWER

/*let userNumber1 = +prompt ("Enter 1st number")
let userNumber2 = +prompt ("Enter 2nd number")

let result 

// Condition

if(userNumber1 > userNumber2){
    result = (userNumber1 + " is greater than " + userNumber2)
}
else if(userNumber2 > userNumber1){
    result = (userNumber2 + " is greater than " + userNumber1)
}
else(result = userNumber1 + " and " + userNumber2 + " is equal")

document.write(result)*/

// QUESTION 3
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// ANSWER

/*let number = +prompt("Enter your number")

let result 

// Condition

if(number > 0){
    result = ( number + " is positive")
}
else if(number < 0){
    result = (number + " is negative")
}
else(
    result = (number + " is zero")
)

document.write(result)*/

// QUESTION 4
// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// ANSWER

/*let vowel = prompt("Enter a character to check is it vowel?")
let output 

// Condition

if(vowel === "a" || vowel === "A" || vowel === "e" || vowel === "E" || vowel === "i" || vowel === "I" || vowel === "o" || vowel === "O" || vowel === "u" || vowel === "U"){
    output = "Given character is vowel"    
}
else(output = "Given character isn't vowel")

document.write(output)*/

// QUESTION 5
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// ANSWER

// Store password
/*let correctPassword = 12345678

let suggestPassword = +prompt("Enter password")

let password

if(correctPassword === suggestPassword){
    password = "You entered a correct password"
}
else(password = "Wrong password, Try again!")

document.write(password)*/

// QUESTION 6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// ANSWER

/*let greeting
let hour = 13

// Condition

if(hour < 18){
    greeting = "Good day"
}
else(greeting = "Good evening")

document. write(greeting)*/

// QUESTION 7
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// ANSWER

/*let timing = +prompt("Enter a time \n24 hours clock format like: 1900 = 7pm")

let greetings 

if(timing >= 0 && timing <= 1200){
    greetings = "Good morning"
}
else if(timing >= 1200 && timing <= 1600){
    greetings = "Good afternoon"
}
else if(timing >= 1600 && timing <= 2000){
    greetings = "Good evening"
}
else if(timing >= 2000 && timing <=2359){
    greetings = "Good night"
}

else(greetings = "Sorry I can't understand")

document.write(greetings)*/