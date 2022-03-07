import java.util.Scanner;
class Employee{
    String name;
    int salary;
    int age;
    String designation;
    Scanner input;
    Employee(String name, int salary, int age, String designation, Scanner input){
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.designation = designation;
        this.input = input;
    }
    
    public void display(){
        System.out.println("Name: "+this.name+"\n Salary: "+this.salary+"\nAge: "+this.age+"\nDesignation: "+this.designation);
    }
    
    public void raiseSalary(){
        System.out.println("Enter Raise for "+this.name+" : ");
        int s = this.input.nextInt();
        
        this.salary += s;
    }
    
    
    
    
    
}

public class EmpMain{

     public static void main(String []args){
        Scanner sc = new Scanner(System.in);
        String name;
        int age;
        int salary;
        String designation;
        
        //take input
        System.out.println("\nName: ");
        name = sc.next();
        System.out.println("\nDesignation: ");
        designation = sc.next();
        System.out.println("\nAge: ");
        age = sc.nextInt();
        System.out.println("\nSalary: ");
        salary = sc.nextInt();
        
        
        Employee e1 = new Employee(name, salary, age, designation, sc);
        e1.display();
        e1.raiseSalary();
        e1.display();
        
        System.out.println("\nName: ");
        name = sc.next();
        System.out.println("\nDesignation: ");
        designation = sc.next();
        System.out.println("\nAge: ");
        age = sc.nextInt();
        System.out.println("\nSalary: ");
        salary = sc.nextInt();
        
        
        Employee e2 = new Employee(name, salary, age, designation, sc);
        
        System.out.println("\nName: ");
        name = sc.next();
        System.out.println("\nDesignation: ");
        designation = sc.next();
        System.out.println("\nAge: ");
        age = sc.nextInt();
        System.out.println("\nSalary: ");
        salary = sc.nextInt();
        
        
        Employee e3 = new Employee(name, salary, age, designation, sc);
        e3.display();
        
        
        
        
     }
}