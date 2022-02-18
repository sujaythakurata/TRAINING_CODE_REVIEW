//prototype design pattern

interface Clone{
    public Employee getClone();
}

class Employee implements Clone{
    public String name;
    public String desg;
    
    Employee(String name, String desg){
        this.name = name;
        this.desg = desg;
    }
    
    public Employee getClone(){
        return new Employee(this.name, this.desg);
    }
    
    public void display(){
        System.out.println("Name: "+this.name);
        System.out.println("Designation: "+this.desg);
    }
    
    
}


public class PrototypeDesignPattern{
     public static void main(String []args){
        Employee e1 = new Employee("Sujay Thakurata", "Programmer");
        e1.display();
        Employee e2 = e1.getClone();
        e2.display();
        e2.name = "Sanjoy Thakurata";
        Employee e3 = e2.getClone();
        e3.display();
        e2.display();
        
     }
}