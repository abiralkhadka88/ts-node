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
/* difference between unknown and any

any=> takes anything
unknown=> thaha nabhayey samma operation garna mildaina



*/
//Never : error throw garda use garney , never going to occur
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 0] = "ADMIN";
    ROLES[ROLES["SUPERADMIN"] = 1] = "SUPERADMIN";
    ROLES[ROLES["USER"] = 2] = "USER";
})(ROLES || (ROLES = {}));
console.log(ROLES.ADMIN); //PRINTS 0
//special class that represents a group of constants
var ERROR;
(function (ERROR) {
    ERROR[ERROR["NotFound"] = 404] = "NotFound";
    ERROR[ERROR["Unauthorized"] = 401] = "Unauthorized";
    ERROR[ERROR["BadRequest"] = 400] = "BadRequest";
})(ERROR || (ERROR = {}));
//static is used for memory optimization, shares memory between class objects
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getResult = function (num) {
        return num * this.MULTIPLIER;
    };
    Util.MULTIPLIER = 13;
    return Util;
}());
console.log(Util.MULTIPLIER);
console.log(Util.getResult(5));
//generics
//statically typed programming language ma matra auchha
//reduces code repitition
//funtion ko lagi , class ko lagi,
function fun(args) {
    return args;
}
var result1 = fun("Hello World");
var result2 = fun(200);
console.log(result1);
console.log(result2);
var salary = { annual: 56000, bonus: 1200 };
//Record<Key,value>  ==> is a generic type
var salary1 = { annual: 56000, bonus: 1200 };
var salary2 = { annual: 56000, bonus: 1200 };
function logSalary1(salary) {
    console.log(salary);
}
function logSalary2(salary) {
    console.log(salary);
}
// this is equivalent to a type below
// type TechTeam = {
//  id: string;
//  members: { name: string, email: string, age: string }[]
// };
//Partial types make everthing partial
var InternTechTeam = {
    id: "techIntern11",
    name: "hari",
};
