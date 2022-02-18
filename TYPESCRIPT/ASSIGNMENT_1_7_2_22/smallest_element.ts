let arr:number[] = [];

for(let i = 0; i<10; i++)
  arr.push(Math.round(Math.random()*100))

console.log("The array");
console.log(arr);
arr.sort()
console.log(`Smallest Element is ${arr[0]}`);