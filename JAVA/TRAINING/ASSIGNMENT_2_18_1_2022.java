import java.util.Scanner;
interface Employee{
    public void raiseSalary();
    public void display();
}


class Clerk implements Employee{
    
    private int salary = 10000;
    private String desg = "clerk";
    public String name;
    public int age;
    
    Clerk(){
        this.takeInput();
    }
    
    public void takeInput(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Name: ");
        this.name = sc.next();
        System.out.println("Enter Age: ");
        this.age = sc.nextInt();
    }
    
    public void raiseSalary(){
        this.salary += 2000;
    }
    
    public void display(){
        System.out.println("Name: "+this.name);
        System.out.println("Age: "+this.age);
        System.out.println("Salary: "+this.salary);
        System.out.println("Desgination: "+this.desg);
    }
    
}
class Manager implements Employee{
    
    private int salary = 900000;
    private String desg = "Manager";
    public String name;
    public int age;
    
    Manager(){
        this.takeInput();
    }
    
    public void takeInput(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Name: ");
        this.name = sc.next();
        System.out.println("Enter Age: ");
        this.age = sc.nextInt();
    }
    
    public void raiseSalary(){
        this.salary += 6000;
    }
    
    public void display(){
        System.out.println("Name: "+this.name);
        System.out.println("Age: "+this.age);
        System.out.println("Salary: "+this.salary);
        System.out.println("Desgination: "+this.desg);
    }
    
}
class Programmer implements Employee{
    
    private int salary = 50000;
    private String desg = "programmer";
    public String name;
    public int age;
    
    Programmer(){
        this.takeInput();
    }
    
    public void takeInput(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Name: ");
        this.name = sc.next();
        System.out.println("Enter Age: ");
        this.age = sc.nextInt();
    }
    
    public void raiseSalary(){
        this.salary += 4000;
    }
    
    public void display(){
        System.out.println("Name: "+this.name);
        System.out.println("Age: "+this.age);
        System.out.println("Salary: "+this.salary);
        System.out.println("Desgination: "+this.desg);
    }
    
}

class MenuSystem{
    
    private Employee employeeList[] = new Employee[100];
    private int employeeCount = 0;
    
    public void mainMenu(){
        System.out.println("1. Create 2. Raise Salary 3. Display 4. Exit");
        Scanner sc = new Scanner(System.in);
        int option = sc.nextInt();
        switch(option){
            case 1:
                this.addEmployee();
                break;
            case 2:
                this.raiseEmployeeSalary();
                break;
            case 3:
                this.displayEmployee();
                break;
            case 4:
                System.out.println("Exit");
                break;
            default:
                System.out.println("Enter valid option");
                this.mainMenu();
        }
    }
    public void addEmployee(){
        System.out.println("1. Clerk 2. Manager 3. Programmer 4. exit");
        Scanner sc = new Scanner(System.in);
        int option = sc.nextInt();
        switch(option){
            case 1:
                employeeList[this.employeeCount] = new Clerk();
                this.employeeCount += 1;
                this.addEmployee();
                break;
            case 2:
                employeeList[this.employeeCount] = new Manager();
                this.employeeCount += 1;
                this.addEmployee();
                break;
            case 3:
                employeeList[this.employeeCount] = new Programmer();
                this.employeeCount += 1;
                this.addEmployee();
                break;
            case 4:
                this.mainMenu();
                break;
            default:
                System.out.println("Enter valid option");
                this.addEmployee();
        }
    }
    public void raiseEmployeeSalary(){
        for(int i = 0; i<this.employeeCount ; i++)
            employeeList[i].raiseSalary();
        this.mainMenu();
    }
    public void displayEmployee(){
        for(int i = 0; i<this.employeeCount ; i++)
            employeeList[i].display();
        this.mainMenu();
    }
    
    
    
}



public class EmpMain{

     public static void main(String []args){
        MenuSystem menu = new MenuSystem();
        menu.mainMenu();
     }
}