//simple types
var studentsList = ["Ram", "hari", "shyam"];
console.log(studentsList);
function getStudents(students) {
    console.log(students.map(function (student, index) { return student; }));
}
getStudents(studentsList);
//tuple
var myTuple;
myTuple = [2, false, "student"];
myTuple.push(1);
myTuple.push(3);
console.log(myTuple);
var firstStudent = {
    name: "Ram",
    roll: 12,
};
console.log(firstStudent);
var studentsObjectList = [];
studentsObjectList.push({
    name: "shyam",
    roll: 33,
    school: "Nepal Army School",
});
console.log(studentsObjectList);
studentsObjectList.push({
    name: "hari",
    roll: 40,
    school: "Himsagar Higher secondary school",
    id: "123-M2",
});
