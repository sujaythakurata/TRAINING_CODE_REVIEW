
//composite pattern

interface Card{
    public void addCard(Card c);
    public void removeCard();
    public void displayInfo();
}

class CardManager implements Card{
    public Card cardList[] = new Card[100];
    public int count = 0;
    public void addCard(Card c){
        this.cardList[this.count] = c;
        this.count += 1;
    }
    
    public void removeCard(){
        System.out.println("----------Card Removed------------");
        Card obj = this.cardList[this.count-1];
        obj.displayInfo();
        this.cardList[this.count] = null;
        this.count -= 1;
    }
    
    public void displayInfo(){
        System.out.println("-------------Card Details--------------");
        for(int i = 0; i<this.count; i++)
        this.cardList[i].displayInfo();
    }
    
    
}


class PlatinumCard implements Card{
    public String name;
    public int age;
    public int credit;
    PlatinumCard(String name, int age){
        this.name = name;
        this.age = age;
        this.credit = 50000;
    }
    public void addCard(Card c){
        System.out.println("Not able to add Card");
    }
    
    public void removeCard(){
        System.out.println("Not able to remove Card");
    }
    
    public void displayInfo(){
        System.out.println("------------Platinum Card Info--------");
        System.out.println("Name: "+this.name);
        System.out.println("Age: "+this.age);
        System.out.println("Credit: "+this.credit);
    }
    
}

class GoldCard implements Card{
    public String name;
    public int age;
    public int credit;
    GoldCard(String name, int age){
        this.name = name;
        this.age = age;
        this.credit = 10000;
    }
    public void addCard(Card c){
        System.out.println("Not able to add Card");
    }
    
    public void removeCard(){
        System.out.println("Not able to remove Card");
    }
    
    public void displayInfo(){
        System.out.println("------------Gold Card Info--------");
        System.out.println("Name: "+this.name);
        System.out.println("Age: "+this.age);
        System.out.println("Credit: "+this.credit);
    }
    
}


public class CompositePattern{

     public static void main(String []args){
         Card p = new PlatinumCard("Sujay Thakurata", 22);
         Card cardManager = new CardManager();
         cardManager.addCard(p);
         cardManager.displayInfo();
        
     }
}