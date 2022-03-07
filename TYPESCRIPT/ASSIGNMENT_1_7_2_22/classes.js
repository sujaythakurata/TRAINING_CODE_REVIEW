class Emp {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    setId(id) {
        this.id = id;
    }
    displayInfo() {
        console.log("Name: ", this.name);
        console.log("Id: ", this.id);
    }
}
class Programmer extends Emp {
    constructor(name, id) {
        super(name, id);
    }
    display() {
        console.log("Hello world");
    }
    calculateBonus() {
        console.log("The Bonus Is: ", 2000);
    }
    welcome() {
        console.log("Welcome here");
    }
}
let p1 = new Programmer("Sujay", 1);
p1.welcome();
p1.display();
p1.displayInfo();
p1.calculateBonus();
