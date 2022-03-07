//singleton pattern
class Singleton{
    private Singleton(){
        System.out.println("Singleton");
    }
    
    private static Singleton instance = new Singleton();
    public static Singleton getInstance(){
        return instance;
    }
    
    
}

class LazySingleton{
    private LazySingleton(){
        System.out.println("Lazy Singleton");
    }
    
    private static LazySingleton si = null;
    
    public static LazySingleton getInstance(){
        if(si == null)
        si = new LazySingleton();
        
        return si;
    }
    
    
}

public class SingletonPattern{

     public static void main(String []args){
        LazySingleton.getInstance();
        LazySingleton.getInstance();
        Singleton.getInstance();
        Singleton.getInstance();
     }
}