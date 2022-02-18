function decorator(){
  return function(target:any, key:string, descriptor:any){
    console.log(target, key, descriptor);
    descriptor.value = ()=>{
      console.log("I am new Value");
    }
  }
}

class abc{
  @decorator()
  display(){
    console.log("i am here");
  }
}

let objAbc:abc = new abc();
objAbc.display();
