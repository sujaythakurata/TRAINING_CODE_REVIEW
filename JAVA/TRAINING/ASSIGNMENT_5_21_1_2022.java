
interface KingdomFactory{
    public Army createArmy();
    public Castle createCastle();
    public King createKing();
}

class OrcKingdomFactory implements KingdomFactory{
    public Army createArmy(){
        return new OrcArmy();
    }
    public Castle createCastle(){
        return new OrcCastle();
    }
    public King createKing(){
        return new OrcKing();
    }
    
}

class ElfKingdomFactory implements KingdomFactory{
    public Army createArmy(){
        return new ElfArmy();
    }
    public Castle createCastle(){
        return new ElfCastle();
    }
    public King createKing(){
        return new ElfKing();
    }
}

interface King{
    public void getDescription();
}
interface Castle{
    public void getDescription();
}
interface Army{
    public void getDescription();
}


class OrcKing implements King{
    public void getDescription(){
        System.out.println("OrcKing");
    }
}

class ElfKing implements King{
    public void getDescription(){
        System.out.println("ElfKing");
    }
}

class OrcCastle implements Castle{
    public void getDescription(){
        System.out.println("OrcCastle");
    }
}

class ElfCastle implements Castle{
    public void getDescription(){
        System.out.println("ElfCastle");
    }
}

class OrcArmy implements Army{
    public void getDescription(){
        System.out.println("OrcArmy");
    }
}

class ElfArmy implements Army{
    public void getDescription(){
        System.out.println("ElfArmy");
    }
}


class FactoryMaker {
    public KingdomFactory makeFactory(String type){
        if(type == "ORC")
        return new OrcKingdomFactory();
        else if (type == "ELF")
        return new ElfKingdomFactory();
        
        return null;
    }
}



public class AbstractFactoryPattern{

     public static void main(String []args){
         
         FactoryMaker factory = new FactoryMaker();
         KingdomFactory orc = factory.makeFactory("ORC");
         Castle c1 = orc.createCastle();
         c1.getDescription();
         Army a1 = orc.createArmy();
         a1.getDescription();
         King k1 = orc.createKing();
         k1.getDescription();
        
     }
}