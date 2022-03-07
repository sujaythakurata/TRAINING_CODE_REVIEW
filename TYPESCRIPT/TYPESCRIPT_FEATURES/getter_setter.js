class Employee {
    display() {
        console.log("The Name: ", this.empName, " Id: ", this.empId);
    }
    set name(name) {
        this.empName = name;
    }
    set id(id) {
        this.empId = id;
    }
    get employeeId() {
        return this.empId;
    }
}
let obj = new Employee();
obj.id = 10;
obj.name = "Sujay Thakurta";
obj.display();
console.log(obj.employeeId);
