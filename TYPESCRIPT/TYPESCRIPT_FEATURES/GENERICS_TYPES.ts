function len<type>(arg:Array<type>):Array<type>{
  let a = arg[0];
  console.log(arg.length, arg[0], a.length);
  return arg;
}

let obj = len(["sujay"]);
console.log(obj, typeof(len));