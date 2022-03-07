
final class Singleton{
    private static Singleton instance  = null;
    
    public static Singleton getInstance(){
        if(instance == null)
        instance = new Singleton();
        return instance;
    }
    
}



public class SingletonPattern{

     public static void main(String []args){
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();
        System.out.println(" Obj1: "+obj1.hashCode());
        System.out.println(" Obj2: "+obj2.hashCode());
     }
}