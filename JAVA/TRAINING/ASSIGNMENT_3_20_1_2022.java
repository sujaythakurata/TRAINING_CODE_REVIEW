
//interface seggrigation principle
interface DisplayEmployeeInfo{
    public void display();
}
interface Bonus{
    public void calculateBonus();
}

interface ShowInfo{
    public void displayInfo();
}

//single responsibility principle
class Mail{
    public void sendMail(String mailId){
        System.out.println("Mail send to "+mailId);
    }
}


class Employee implements DisplayEmployeeInfo{
    public String name;
    public int age;
    protected double salary;
    protected String mailId;
    public String desg;
    Employee(String name, int age, double salary, String mailId, String desg){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.mailId = mailId;
        this.desg = desg;
    }
    public void display(){};
}




//liskov principle
class PermarentEmployee extends Employee implements Bonus{
    
    PermarentEmployee(String name, int age, double salary, String mailId, String desg){
        super(name, age, salary, mailId, desg);
    }
    public void calculateBonus(){
        this.salary += 5000;
    }
    
}

class TemporaryEmployee extends Employee{
    TemporaryEmployee(String name, int age, double salary, String mailId, String desg){
        super(name, age, salary, mailId, desg);
    }
    
}


//opened close principle
class Manager extends PermarentEmployee{
    Manager(String name, int age, String mailId){
        super(name, age, 500000, mailId, "MANAGER");
    }
    
    public void display(){
        System.out.println("------------MANAGER INFORMATION-----------------------");
        System.out.println("Name: "+this.name);
        System.out.println("Age: "+this.age);
        System.out.println("Email: "+this.mailId);
        System.out.println("Desgination: "+this.desg);
        System.out.println("Salary: "+ this.salary);
    }
    
}

class Intern extends TemporaryEmployee{
    Intern(String name, int age, String mailId){
        super(name, age, 10000, mailId, "INTERN");
    }
    public void display(){
        System.out.println("------------------INTERN INFORMATION-----------------");
        System.out.println("Name: "+this.name);
        System.out.println("Age: "+this.age);
        System.out.println("Email: "+this.mailId);
        System.out.println("Desgination: "+this.desg);
        System.out.println("Salary: "+ this.salary);
    }
}


//dependency inversion principle
class EmployeeManagement implements ShowInfo{
    public Employee employeeList[] =  new Employee[100];
    public int employeeCount = 0;
    public Mail mail = null;
    EmployeeManagement(){
        this.mail = new Mail();
    }
    public void addEmployee(Employee emp){
        this.employeeList[this.employeeCount] = emp;
        this.employeeCount += 1;
        this.mail.sendMail(emp.mailId);
    }
    
    public void deleteEmployee(){
        Employee obj = this.employeeList[this.employeeCount - 1];
        System.out.println("----------INFORMATION DETELTED----------");
        obj.display();
        this.employeeList[this.employeeCount - 1] = null;
        this.employeeCount -= 1;
    }
    
    public void displayInfo(){
        System.out.println("---------------ALL EMPLOYEE DETAILS -----------------");
        for(int i = 0; i<this.employeeCount; i++)
        this.employeeList[i].display();
    }
    
    
}


public class EmployeeManagementSystem{

     public static void main(String []args){
        EmployeeManagement employee = new EmployeeManagement();
        Manager m1 = new Manager("Sujay Thakurata", 22, "Sujay_Thakurta@epam.com");
        Intern i1 = new Intern("Test2 Thakurata", 22, "test2thakurata@gmail.com");
        
        employee.addEmployee(m1);
        employee.addEmployee(i1);
        // employee.displayInfo();
        // m1.calculateBonus();
        // employee.displayInfo();
        // employee.deleteEmployee();
        // employee.displayInfo();
        
     }
}