let arr = [];
for (let i = 0; i < 8; i++)
    arr.push(Math.round(Math.random() * 100));
console.log("The array");
console.log(arr);
for (let i in arr)
    arr[i] = arr[i] * 2;
console.log("After For In loop");
console.log(arr);
for (let i of arr)
    arr[arr.indexOf(i)] = i / 2;
console.log("After For of Loop");
console.log(arr);
