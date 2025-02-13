// QUESTION 1
// Declare an empty array using JS literal notation to store
// student names in future.

// ANSWER

/*let studentNames = []*/

// QUESTION 2
// Declare an empty array using JS object notation to store
// student names in future.

// ANSWER

/*studentNames = new Array ();*/ 

// QUESTION 3
// Declare and initialize a strings array.

// ANSWER

/*let cities = ["New York ", " London ", " Paris ", " Tokyo ", " Berlin ", " Sydney ", " Mumbai ", " Dubai ", " Toronto ", " São Paulo"]

document.write("<h4>Cities:</h4>" + "<br/>" + cities + "<br/>")*/

// QUESTION 4
// Declare and initialize a numbers array.

// ANSWER

/*let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

document.write("<h4>Number Array:</h4>" + "<br/>" + num + "<br/>")*/

// QUESTION 5
// Declare and initialize a boolean array.

// ANSWER

/*let t_f = [true , false]

document.write("<h4>Boolean Array:</h4>" + "<br/>" + t_f + "<br/>")*/

// QUESTION 6
// Declare and initialize a mixed array.

// ANSWER

/*let mixedValues = [" Paris ", " France ",  4536  ,  91203, " Aeiman ", true]

document.write("<h4>Mixed Values:</h4>" + "<br/>" + mixedValues + "<br/>")*/

// QUESTION 7
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// ANSWER

/*let educationQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

let counting = 0

let i = 0

document.write("<h4>Education in Pakistan</h4>")
document.write(++counting + ") " + (educationQualification[i++]) + "<br/>") 
document.write(++counting + ") " + (educationQualification[i++]) + "<br/>") 
document.write(++counting + ") " + (educationQualification[i++]) + "<br/>") 
document.write(++counting + ") " + (educationQualification[i++]) + "<br/>") 
document.write(++counting + ") " + (educationQualification[i++]) + "<br/>") 
document.write(++counting + ") " + (educationQualification[i++]) + "<br/>") 
document.write(++counting + ") " + (educationQualification[i++]) + "<br/>") 
document.write(++counting + ") " + (educationQualification[i++]) + "<br/>")*/ 

// QUESTION 8
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// ANSWER

/*let stdNames = ["Aeiman", "Mehak", "Maryam"]

let stdMarks = [435 , 221, 340]

let totalMarks = 500 

let percentage1 = (stdMarks[0]/totalMarks)*100
let percentage2 = (stdMarks[1]/totalMarks)*100
let percentage3 = (stdMarks[2]/totalMarks)*100

document.write("<h4>Students Scoring</h4>")

document.write("Score of " + stdNames[0] +  " is " + stdMarks[0] + " percentage " + percentage1 + "<br/>") 
document.write("Score of " + stdNames[1] +  " is " + stdMarks[1] + " percentage " + percentage2 + "<br/>") 
document.write("Score of " + stdNames[2] +  " is " + stdMarks[2] + " percentage " + percentage3 + "<br/>")*/ 
 
// QUESTION 9
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// ANSWER

/*let colorNames = [" Red "," Blue "," Green "," Yellow "," Orange "," Pink "," Teal "," Brown "," Gray "," Purple ",];*/

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.

/*let userColor = prompt("Enter your color")

colorNames.unshift(userColor)

document.write("Updated Array: " + colorNames + "<br/>")*/

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

/*let userColorEnd = prompt("Enter your color")

colorNames.push(userColorEnd)

document.write("Updated Color at end: " + colorNames + "<br/>")*/

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

/*let newColor1 = prompt("Enter new color") 

let newColor2 = prompt("Enter new color")

colorNames.unshift(newColor1 , newColor2)

document.write("updated new colors: " + colorNames + "<br/>")*/

// d. Delete the first color in the array. Display the updated
// array in your browser.

/*colorNames.shift(colorNames)

document.write("First color remove: " + colorNames + "<br/>")*/

// e. Delete the last color in the array. Display the updated
// array in your browser.

/*colorNames.pop(colorNames)

document.write("Last color remove: " + colorNames + "<br/>")*/

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

/*let userIndex = +prompt("At which index number you want to add color?")

let userIndexColor = prompt("Your color name")

colorNames.splice(userIndex,0,userIndexColor)

document.write("Updated Array: " + colorNames + "<br/>")*/

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

/*let userDltIndex = +prompt("At which index numbe you want to delete color?")

let countColor = +prompt("How many colors you want to remove?")

colorNames.splice(userDltIndex,countColor)

document.write("Update Array: " + colorNames )*/

// QUESTION 10
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// ANSWER

/*let scoreOfStudents = [220,160,108,160]

document.write("Score of Students: " + "<br/>" + scoreOfStudents + "<br/>")

document.write("Scrore in Ascending order: " + "<br/>" + scoreOfStudents.sort())*/


// QUESTION 11
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// ANSWER

/*let citiesOfPakistan = ["Karachi ", " Lahore ", " Faislabad ", " Multan ", " Skardu ", " Murree ", " Naran ",]

document.write("Cities list: " + "<br/>" + citiesOfPakistan + "<br/>")

let selectedCities = citiesOfPakistan.slice(4,7)

document.write("Selected Cities List: " + "<br/>" + selectedCities)*/

// QUESTION 12
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// ANSWER

/*let joinArray = ["This" , " is ", " my ", " cat"]

document.write("Array: " + "<br/>" + joinArray + "<br/>")

let stringArray = joinArray.join( " " )


document.write("Join Array: " + "<br/>" + stringArray)*/ 
 
// QUESTION 13
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// ANSWER

// QUESTION 14
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// ANSWER

// QUESTION 15
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// ANSWER