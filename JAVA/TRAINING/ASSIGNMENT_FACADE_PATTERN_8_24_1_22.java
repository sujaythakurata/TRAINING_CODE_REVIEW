//facade pattern
import java.util.Scanner;
interface Card{
    public void sellCard();
}

class CardManager{
    public Card platinumCard;
    public Card goldCard;
    
    public void menu(){
        System.out.println("1. Gload Card 2. Platinum Card 3. Exit");
        Scanner sc = new Scanner(System.in);
        int opt = sc.nextInt();
        switch(opt){
            case 1: this.sellGold();
            break;
            case 2: this.sellPlatinum();
            break;
            case 3:System.out.println("Exit");
            break;
            default:
            System.out.println("Enter valid option");
            this.menu();
        }
    }
    CardManager(){
        this.platinumCard = new PlatinumCard();
        this.goldCard = new GoldCard();
    }
    
    public void sellPlatinum(){
        this.platinumCard.sellCard();
    }
    public void sellGold(){
        this.goldCard.sellCard();
    }
    
    
}


class PlatinumCard implements Card{
    public int credit = 50000;
    public int fees = 140;
    public void sellCard(){
        System.out.println("------------Platinum Card Info--------");
        System.out.println("Credit Limit: "+this.credit);
        System.out.println("fees: "+this.fees);
    }
    
}

class GoldCard implements Card{
    public int credit = 10000;
    private int fees = 40;
    public void sellCard(){
        System.out.println("------------Gold Card Info--------");
        System.out.println("Credit Limit: "+this.credit);
        System.out.println("fees: "+this.fees);
    }
    
}



public class FacadePattern{

     public static void main(String []args){
        CardManager manager = new CardManager();
        manager.menu();
     }
}