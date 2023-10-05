const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  //let acc;
  return (students.reduce((acc,student) => acc+student.score,0))/students.length;
          //acc sumtotalscore   หารด้วย   number of students
}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students));
