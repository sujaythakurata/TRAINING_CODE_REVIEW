class Product{
  productId:String;
  productName:String;
  productDescription:String;
  productPrice:number;
  constructor(id:String, name:String, price:number, desc:String){
    this.productId = id;
    this.productName = name;
    this.productPrice = price;
    this.productDescription = desc;
  }

  display():void{
    console.log(`
      Product Id: ${this.productId},\n
      Product Name: ${this.productName},\n
      Product Price: ${this.productPrice},\n
      Product Description: ${this.productDescription},\n
    
    `);
  }


}

let p1 = new Product("1", "Vs Code", 45.38, "It's a editor");
p1.display();