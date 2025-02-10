let subject1 = "English"
let subject2 = "Urdu"
let subject3 = "Maths"


console.log(subject1, subject2, subject3);

let marksObtianedsbj1 = 76
let marksObtianedsbj2 = 45
let marksObtianedsbj3 = 81

console.log(marksObtianedsbj1, marksObtianedsbj2, marksObtianedsbj3);

let totalObtainedMarks = (marksObtianedsbj1 + marksObtianedsbj2 + marksObtianedsbj3)
// 80 80 98
// 258
console.log(totalObtainedMarks);

let marks = 100

let totalMarks = 300

// let sbj_1_Percentage = (marksObtianedsbj1 / marks) * 100
// let sbj_2_Percentage = (marksObtianedsbj2 / marks) * 100
// let sbj_3_Percentage = (marksObtianedsbj3 / marks) * 100

// console.log(sbj_1_Percentage, sbj_2_Percentage, sbj_3_Percentage);

let totalPercentage = (totalObtainedMarks / totalMarks) * 100

console.log(totalPercentage);

if(totalPercentage >= 80)
{
    document.write("Excellent")
}

else if(totalPercentage <80){
    document.write("Good")
}
else {
    document.write(123)
}



// if(marksObtianedsbj1<=80){
//     document.write(<table>
//         (<th>Percentage</th>)
//         (<th>Grade</th>)
//         (<th>Remarks</th>)
//         (<tr>Greater than to 80</tr>)
//         (<tr>A-one</tr>)
//         (<tr>Excellent</tr>)
//     </table>)
// }
