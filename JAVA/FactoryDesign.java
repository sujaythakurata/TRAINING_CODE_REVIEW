
abstract class pizza{
    public abstract void addTopings();
    public void bake(){
        System.out.println("pizza is baking");
    }
}

class ChezzPizza extends pizza{
    public void addTopings(){
        System.out.println("Add chezz");
    }
    public void price(){
        System.out.println("The price is Rs. 700");
    }
}

class TomatoPizza extends pizza{
    public void addTopings(){
        System.out.println("Add tomato");
    }
}

interface BasePizza{
    public pizza getPizza(String type);
}


class PizzaFactory implements BasePizza{
    public pizza getPizza(String type){
        pizza instance = null;
        switch(type){
            case "chezz":
                instance = new ChezzPizza();
                break;
            case "tomato":
                instance = new TomatoPizza();
                break;
            default:
                System.out.println("Type not found");
        }
        
        return instance;
    }
}

public class FactoryDesignPattern{

     public static void main(String []args){
        BasePizza factory = new PizzaFactory();
        pizza cp = factory.getPizza("chezz");
        cp.addTopings();
        ((ChezzPizza)cp).price();
        pizza tp = factory.getPizza("tomato");
        ((TomatoPizza)tp).addTopings();
        
     }
}