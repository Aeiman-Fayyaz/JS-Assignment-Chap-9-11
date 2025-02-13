// document.write("<h1>Chap 9-12 </h1>" + "<br/>")
// document.write("<h1>USER INPUT & CONDITIONAL STATEMENT</h1>")

// QUESTION 1
// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// ANSWER

/*let cityName = "Karachi"

let userCity = prompt ("Enter city name")*/

// Condition

/*if (userCity === cityName){
document.write("Welcome to city of lights")
}
else (
    document.write("Try Again")
)*/

// QUESTION 2
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// ANSWER

/*let gender = prompt("Your gender?")*/

// Condition

/*if (gender == "Male"){
document.write("Good Morning, Sir")
}
else(
    document.write("Good Morning, Ma'am")
)*/

// QUESTION 3
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// ANSWER

/*let signal = prompt("Enter signal light color")*/

// Condition

/*if (signal === "Red"){
document.write("Must Stop")
}
if (signal === "Yellow"){
    document.write("Ready to Move")
}
if (signal === "Green"){
    document.write("Move now")
}
else if(signal === "")
{
    document.write("Enter signal light color")
}*/

// QUESTION 4
// Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// ANSWER

/*let currentFuel = prompt("Enter your current fuel in a car")*/

// Condition

/*if (currentFuel < "0.25liters"){
document.write("Refil your car tank")
}
else(
document.write("Tank full")
)*/

// QUESTION 5
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// ANSWER

// Condition

// a.
/*let a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}*/

// Output

/*a (document.write("++a is is pre-increment condtion that's why first add 1 in value a=4 then a=4 convert into 5 that's why this condition is true"))*/

// b.
/*let b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else(
(document.write("This condition is false because this is post-increment" + "<br/>" + "In post-increment, first add and return the value after add"))
)*/

// Output

/*b (document.write("This condition is false because this is post-increment" + "<br/>" + "In post-increment, first add and return the value after add"))*/

// c.
// let c = 12;
/*if (c++ === 13){
alert("condition 1 is true");
}

else(
    (document.write("This condition is false because this is post-increment" + "<br/>" + "In post-increment, first add and return the value after add"))
)*/

/*if (c === 13){
alert("condition 2 is true");
}

else(
    document.write("Condition was false because the value of " + c + " is not equal to 13")
)*/

/*if (++c < 14){
alert("condition 3 is true");
}

// Output

document.write("This conditon is true because here is pre-increment and the value of c is " + c + " after increment the value of c is 13")*/

/*if(c === 14){
alert("condition 4 is true");
}

else(
    document.write("This condition is false because the value of " + c + " is not equal to 14")
)*/

// d.
/*let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// Output

document.write("Here is the comparision operator ===, we adding material and labor cost then compare with total cost")*/

// e.
/*if (true){
alert("True");
}

// Output

document.write("The condition was true because there is the boolean data type that's true")*/

/*if (false){
alert("False");
}

// Output

document.write("The condition was false because there is the boolean data type that's false")*/

// f.
/*if("car" < "cat"){
alert("car is smaller than cat");
}

// Output

document.write("Here is the woking of charcodeAt-ASCII numbers")*/

// QUESTION 6
// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// ANSWER

/*let subject1 = "English"
let subject2 = "Urdu"
let subject3 = "Maths"


console.log(subject1, subject2, subject3);

let marksObtianedsbj1 = 76
let marksObtianedsbj2 = 45
let marksObtianedsbj3 = 81

console.log(marksObtianedsbj1, marksObtianedsbj2, marksObtianedsbj3);

let totalObtainedMarks = (marksObtianedsbj1 + marksObtianedsbj2 + marksObtianedsbj3)

console.log(totalObtainedMarks);

let totalMarks = 300

let totalPercentage = (totalObtainedMarks / totalMarks) * 100

console.log(totalPercentage);

// Condition

if(totalPercentage >= 80)
{
    document.write("Excellent")
}
else if(totalPercentage >= 70){
    document.write("Good")
}
else if(totalPercentage >= 60){
    document.write("You need to improve")
}
else if(totalPercentage >= 50){
    document.write("Sorry")
}

document.write("<h1>Marks Sheet</h1>")

document.write("Total Marks:" + totalMarks + "<br/>")
document.write("Obtained Marks:" + totalObtainedMarks + "<br/>")
document.write("Percentage:" + totalPercentage + "<br/>")
document.write("Total Marks:" + totalMarks + "<br/>")
document.write("Garde: B" + "<br/>")
"<br/>"
document.write("Remarks:")
if(totalPercentage >= 60){
    document.write("You need to improve")
}*/

// QUESTION 7
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// ANSWER

// Secret nummber

/*let secretNumber = 6

// User Number

let userGuessNumber = +prompt("Guess the number")

// Condition

if(userGuessNumber === secretNumber){
    alert("Bingo! Correct answer")
}
if(++userGuessNumber == secretNumber){
    alert("Close enough to the correct answer")
}
else(
    alert("Try again")
)*/

// QUESTION 8
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// ANSWER

/*let userNum = +prompt("Enter a number")
let result;

// Condition

if(userNum % 3 == 0){
    result = (userNum + " number divisible by 3")
}
else(
    result = (userNum + " number isn't divisible by 3")
)

document.write(result)*/

// QUESTION 9
// Write a program that checks whether the given input is an
// even number or an odd number.

// ANSWER

/*let userNumber = +prompt("Enter a number")
let result

// Condition

if(userNumber % 2 == 0){
    result = (userNumber + " is an even number")
}
else(
    result = userNumber + " is not an odd number"
)

document.write(result)*/

// QUESTION 10
// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// ANSWER

/*let userTemperature = +prompt("Write a temperature")

let result

// Condition

if(userTemperature > 40){
    result = "It is too hot outside."
}
else if(userTemperature > 30){
    result = "The Weather today is Normal."
}
else if(userTemperature > 20){
    result = "Today’s Weather is cool."
}
else if(userTemperature > 10){
    result = "OMG! Today’s weather is so Cool."
}
else(result = "OMG! Today’s weather is so Cool.")

document.write(result)*/

// QUESTION 11
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// ANSWER

/*let userNumber1 = +prompt("Enter your 1st number");
let userNumber2 = +prompt("Enter your 2nd number");
let operators = prompt("Enter a operator for calculations");
let output;

// Condition

if(operators === "+"){
    output = (userNumber1 + userNumber2)
}
else if(operators === "-"){
    output = (userNumber1 - userNumber2)
}
else if(operators === "*"){
    output = (userNumber1 * userNumber2)
}
else if(operators === "/"){
    output = (userNumber1 / userNumber2)
}
else("Enter a number not character or special character")

document.write(output)*/