interface vehicle {
    public void getprice();
    public void setpaint();
}

interface flyable {
    public void fly();
}

interface moveable{
    public void start();
    public void stop();
}


class aeroplane extends vehicle, flyable, moveable{
    public void fly(){
        throw new Exception()
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
