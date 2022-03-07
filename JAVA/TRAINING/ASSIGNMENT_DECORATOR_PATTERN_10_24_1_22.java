//Decorator Pattern
interface Bank{
    public void displayInfo();
    public int credit();
}

class SavingAccount implements Bank{
    public int creditLimit = 10000;
    public void displayInfo(){
        System.out.println("Saving Account");
    }
    public int credit(){
        return this.creditLimit;
    }
}

abstract class BankDecorator implements Bank{
    public Bank bank = null;
    BankDecorator(Bank bank){
        this.bank = bank;
    }
    
    public void displayInfo(){
        this.bank.displayInfo();
    }
    
    public int credit(){
        return this.bank.credit();
    }
    
    
}

class GoldAccount extends BankDecorator{
    public int creditLimit;
    GoldAccount(Bank bank){
        super(bank);
    }
    
    public void displayInfo(){
        System.out.println("-----Gold Account-------\nAll Advantages");
        super.displayInfo();
        System.out.println("2. creditLimit Extends "+this.creditLimit);
    }
    
    public int credit(){
        this.creditLimit = super.credit() + 40000;
        return this.creditLimit;
    }
}

class PlatinumAccount extends BankDecorator{
    public int creditLimit;
    PlatinumAccount(Bank bank){
        super(bank);
    }
    
    public void displayInfo(){
        System.out.println("-----Platinum Account-------\nAll Advantages");
        super.displayInfo();
        System.out.println("2. creditLimit Extends "+this.creditLimit);
    }
    
    public int credit(){
        this.creditLimit = super.credit() + 60000;
        return this.creditLimit;
    }
}



public class DecoratorPattern{

     public static void main(String []args){
        Bank savingAccount = new SavingAccount();
        Bank goldAccount = new GoldAccount(savingAccount);
        goldAccount.credit();
        goldAccount.displayInfo();
     }
}
