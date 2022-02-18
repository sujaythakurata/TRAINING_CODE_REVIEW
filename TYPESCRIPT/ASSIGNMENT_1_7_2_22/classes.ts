interface bonus{
  calculateBonus():void;
}

interface greet{
  welcome():void;
}

abstract class Emp{
  public name:string;
  private id:number;
  constructor(name:string, id:number){
    this.name = name;
    this.id = id;
  }
  public setId(id:number){
    this.id = id;
  }
  public abstract display():void;
  public displayInfo():void{
    console.log("Name: ", this.name);
    console.log("Id: ", this.id);
  }
}

class Programmer extends Emp implements bonus, greet{
  constructor(name:string,id:number){
    super(name, id);

  }
  display(): void {
      console.log("Hello world");
  }
  calculateBonus(): void {
      console.log("The Bonus Is: ", 2000);
  }
  welcome(): void {
      console.log("Welcome here");
  }
}

let p1:Programmer = new Programmer("Sujay", 1);
p1.welcome()
p1.display();
p1.displayInfo();
p1.calculateBonus();