class text{
    public String get_text(){
        return "hello world";
    }
    
    
}

interface text_ {
    public void hello();
} 

interface hello{
    public void p();
}

class master extends text implements text_, hello{
    public void hello(){
        System.out.println("Hello");
    }
    public void p(){
        System.out.println("Hello world")
    }
} 




public class HelloWorld{

     public static void main(String []args){
        master obj = new master();
        obj.hello();
     }
}
