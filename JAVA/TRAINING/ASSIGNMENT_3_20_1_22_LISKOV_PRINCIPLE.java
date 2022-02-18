class bird{
    public void sound(){
        System.out.println("Do some sound");
    }
    
}

class flyingBird extends bird{
    public void fly(){
        System.out.println("can fly");
    }
}

class egle extends flyingBird{
    public void test(){
        System.out.println("I am egle");
    }
}

class toyEgle extends bird{

}

public class HelloWorld{

     public static void main(String []args){
        egle obj = new egle();
        obj.fly();
        obj.sound();
        toyEgle obj2 = new toyEgle();
        obj2.sound();
     }
}
