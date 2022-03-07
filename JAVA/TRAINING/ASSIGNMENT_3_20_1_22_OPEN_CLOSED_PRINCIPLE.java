abstract class employee{
    public abstract double bonus(double salary);
}

class temp extends employee{
    public double bonus(double salary){
        return .2*salary;
    }
}

class per extends employee{
    public double bonus(double salary){
        return .5*salary;
    }
}

public class HelloWorld{

     public static void main(String []args){
        per e1 = new per();
        System.out.println(e1.bonus(1000));
        temp e2 = new temp();
        System.out.println(e2.bonus(1000));
     }
}
