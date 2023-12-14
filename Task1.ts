//simple types
let studentsList: string[] = ["Ram", "hari", "shyam"];
console.log(studentsList);

function getStudents(students: string[]): void {
  console.log(students.map((student, index) => student));
}

getStudents(studentsList);

//tuple
let myTuple: [number, boolean, string];
myTuple = [2, false, "student"];
myTuple.push(1);
myTuple.push(3);
console.log(myTuple);

//Object
interface TStudent {
  name: string;
  roll: number;
}

let firstStudent: TStudent = {
  name: "Ram",
  roll: 12,
};

console.log(firstStudent);

interface TStudent {
  school?: string;
}

let studentsObjectList: TStudent[] = [];

studentsObjectList.push({
  name: "shyam",
  roll: 33,
  school: "Nepal Army School",
});

console.log(studentsObjectList);

interface TStudent {
  id?: `${number}-${string}`;
}

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

enum ROLES {
  ADMIN,
  SUPERADMIN,
  USER,
}

console.log(ROLES.ADMIN); //PRINTS 0
//special class that represents a group of constants

enum ERROR {
  NotFound = 404,
  Unauthorized = 401,
  BadRequest = 400,
}

//static is used for memory optimization, shares memory between class objects

class Util {
  static MULTIPLIER: number = 13;

  static getResult(num: number) {
    return num * this.MULTIPLIER;
  }
}

console.log(Util.MULTIPLIER);
console.log(Util.getResult(5));

//generics
//statically typed programming language ma matra auchha
//reduces code repitition
//funtion ko lagi , class ko lagi,
function fun<T>(args: T): T {
  return args;
}

let result1 = fun<string>("Hello World");
let result2 = fun<number>(200);

console.log(result1);
console.log(result2);

//Record

interface SalaryInterface {
  annual: number;
  bonus: number;
}

const salary: SalaryInterface = { annual: 56000, bonus: 1200 };
//normal object

type NumericRecord = Record<string, number>; //record
//Record<Key,value>  ==> is a generic type
const salary1: NumericRecord = { annual: 56000, bonus: 1200 };

//Record with union
type Keys = "key1" | "key2" | "keyN";

type Salary = Record<"annual" | "bonus", number>;

const salary2: Salary = { annual: 56000, bonus: 1200 };

function logSalary1(salary: Record<string, number>) {
  console.log(salary);
}

function logSalary2(salary: { [key: string]: number }) {
  console.log(salary);
}

//record type is readable and shorter

//PICK = > pick what you need
type User = {
  id: string;
  name: string;
  email: string;
  age: string;
};

type TechTeam2 = {
  id: string;
  members: { name: string; age: string }[]; // types of name and age are matched with User type.
};

type TechTeam = {
  id: string;
  members: Pick<User, "name" | "age">[]; // Pick the name and age fields from the User type
};

// this is equivalent to a type below

// type TechTeam = {
//  id: string;
//  members: { name: string, age: string }[]
// };

type TechTeam3 = {
  id: string;
  members: Omit<User, "id">[]; // Omit the id filed from User type
};

// this is equivalent to a type below

// type TechTeam = {
//  id: string;
//  members: { name: string, email: string, age: string }[]
// };

//Partial types make everthing partial
let InternTechTeam: Partial<User> = {
  id: "techIntern11",
  name: "hari",
};
