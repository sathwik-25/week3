function EmployeeInfo(name, Salary) {
  console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

const currentDateTime = new Date();

console.log("This is my first program");
console.log("Program run on : " + currentDateTime.toLocaleString());

const EmpName = "sathwik";
const EmpSalary = 50000;

EmployeeInfo(EmpName, EmpSalary);

const EmpSkills = (skills, Name, LabGrp) => {
  console.log("Student ID " + Name + " Expert in " + skills);
  console.log("CN5006", LabGrp);
};
EmpSkills("java", "3077513 ", "group 18");

const student = require('./StudentInfo');
const Person = require('./Person');

console.log("Student Name:" + student.getName());
console.log(student.Location());
console.log(student.dob);
console.log(student.Studentgrade());
console.log("grade is " + student.Studentgrade(55));

const person1 = new Person("karthwik", "20", "karthwik25@gmail.com");
console.log("using Person Module", person1.getPersonInfo());
console.log("Program ended");

const os = require("os");
const util = require('util');
console.log("temporary directory " + os.tmpdir());
console.log("hostname: " + os.hostname());
console.log("OS : " + os.platform() + " release: " + os.release());
console.log("Uptime " + (os.uptime() / 3600) + " hours");
console.log("userInfo " + util.inspect(os.userInfo()));
console.log("Memory " + os.totalmem() / 1000000000 + " Giga byte");
console.log(" free: " + os.freemem() / 1000000000 + " Giga byte");
console.log("CPU " + util.inspect(os.cpus()));
console.log("Network " + util.inspect(os.networkInterfaces()));
console.log("program end");

