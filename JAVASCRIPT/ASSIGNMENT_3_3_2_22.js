

class Employee{
  constructor(name, age, salary, desgi){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.desgi = desgi
  }
  display(){
    console.log("Name: ", this.name);
    console.log("Age: ", this.age);
    console.log("Salary: ", this.salary);
    console.log("Designation: ", this.desgi);
    console.log("=======================================================");
  }
}

class Clerk extends Employee{
  constructor(name, age){
    super(name, age, 10000, "Clerk");
  }
  raiseSalary(){
    this.salary += 2000;
  }
  
}
class Programmer extends Employee{
  constructor(name, age){
    super(name, age, 25000, "Programmer");
  }
  raiseSalary(){
    this.salary += 5000;
  }

}
class Manager extends Employee{
  constructor(name, age){
    super(name, age, 80000, "Manager");
  }
  raiseSalary(){
    this.salary += 10000;
  }

}


let clerk = new Clerk("Sujay", 22);
let programmer = new Programmer("Sanjoy", 22);
let manager = new Manager("Rana", 22);
clerk.display();
programmer.display();
manager.display();
clerk.raiseSalary()
clerk.display();
manager.raiseSalary()
manager.display();
programmer.raiseSalary();
programmer.display();