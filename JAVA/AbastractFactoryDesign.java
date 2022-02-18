
interface Chesse{
    public void prepareChesse();
}

class MorzarilaChesse implements Chesse{
    public void prepareChesse(){
        System.out.println("Morzarila Chesse");
    }
}

class ParmizanoChesse implements Chesse{
    public void prepareChesse(){
        System.out.println("Parmizano Chesse");
    }
}

interface Sauce {
    public void prepareSauce();
}

class TomatoSauce implements Sauce{
    public void prepareSauce(){
        System.out.println("Tomato Sauce");
    }
}

class RedSauce implements Sauce{
    public void prepareSauce(){
        System.out.println("Red Sauce");
    }
}


interface BaseTopping {
    public Chesse addChesse();
    public Sauce addSauce();
}


class HotTopping implements BaseTopping{
    public Chesse addChesse(){
        Chesse mc = new MorzarilaChesse();
        return mc;
    }
    
    public Sauce addSauce(){
        Sauce mc = new TomatoSauce();
        return mc;
    }
}

class ColdTopping implements BaseTopping{
    public Chesse addChesse(){
        Chesse mc = new ParmizanoChesse();
        return mc;
    }
    
    public Sauce addSauce(){
        Sauce mc = new RedSauce();
        return mc;
    }
}

abstract class Pizza{
    public abstract void addTopings();
    public void bake(){
        System.out.println("bake pizza");
    }
}


class ChessePizza extends Pizza{
    public BaseTopping bt = null;
    ChessePizza(BaseTopping bt){
        this.bt = bt;
    }
    public void addTopings(){
        System.out.println("Topings for ChessePizza: ");
        Chesse c = this.bt.addChesse();
        c.prepareChesse();
        Sauce s = this.bt.addSauce();
        s.prepareSauce();
    }
}

class NormalPizza extends Pizza{
    public BaseTopping bt = null;
    NormalPizza(BaseTopping bt){
        this.bt = bt;
    }
    public void addTopings(){
        System.out.println("Topings for NormalPizza: ");
        Chesse c = this.bt.addChesse();
        c.prepareChesse();
        Sauce s = this.bt.addSauce();
        s.prepareSauce();
    }
}

interface BasePizzaFactory{
    public Pizza createPizza(String type);
}


class HotToppingPizzaFactory implements BasePizzaFactory{
    public Pizza createPizza(String type){
        Pizza p = null;
        BaseTopping bt = new HotTopping();
        switch(type){
            case "chesse":
                p = new ChessePizza(bt);
                break;
            case "normal":
                p = new NormalPizza(bt);
                break;
            default:
                System.out.println("Type not found");
        }
        
        return p;
        
    }
}

class ColdToppingPizzaFactory implements BasePizzaFactory{
    public Pizza createPizza(String type){
        Pizza p = null;
        BaseTopping bt = new ColdTopping();
        switch(type){
            case "chesse":
                p = new ChessePizza(bt);
                break;
            case "normal":
                p = new NormalPizza(bt);
                break;
            default:
                System.out.println("Type not found");
        }
        
        return p;
        
    }
}


public class AbstractFactoryDesignPattern{

     public static void main(String []args){
        BasePizzaFactory htp = new HotToppingPizzaFactory();
        BasePizzaFactory ctp = new ColdToppingPizzaFactory();
        Pizza obj1 = ctp.createPizza("chesse");
        obj1.addTopings();
        Pizza obj2 = htp.createPizza("normal");
        obj2.addTopings();
        
     }
}