class Employee{
  private empId:number;
  private empName:string;

  display():void{
    console.log("The Name: ", this.empName, " Id: ", this.empId);
  }

  public set name(name:string){
    this.empName = name;
  }

  public set id(id:number){
    this.empId = id;
  }

  public get employeeId():number{
    return this.empId
  }


}

let obj:Employee = new Employee();
obj.id  = 10;
obj.name = "Sujay Thakurta";
obj.display();
console.log(obj.employeeId);