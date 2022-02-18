interface dbconnect{
    public void connect();
}

class mysql_connect implements dbconnect{
    public void connect(){
        System.out.println("connect here we get the connection");
    }
}




class passwrd_remainder{
    private dbconnect obj;
    public passwrd_remainder(dbconnect obj){
        this.obj = obj;
    }
    public void connect(){
        this.obj.connect();
    }
}


public class HelloWorld{

     public static void main(String []args){
        mysql_connect mysql_obj = new mysql_connect();
        passwrd_remainder obj = new passwrd_remainder(mysql_obj);
        obj.connect();
     }
}
