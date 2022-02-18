let arr = [];
for (let i = 0; i < 10; i++)
    arr.push(Math.round(Math.random() * 100));
console.log("The array");
console.log(arr);
arr.sort();
console.log(`2nd Largest Element is ${arr[arr.length - 2]}`);
