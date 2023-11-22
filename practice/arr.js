const fruits=["banana","oranage","apple"]
let fruit=fruits[0];
console.log(fruit)

//acessing the last element 
const fruitss=["appl","chiku","pinappple"]
let result=fruitss[fruitss.length-1]
console.log(result)

//add new element in array
const array = ["apple", "chiku", "pineapple"];
const newLength = array.push("lemon");
console.log(newLength);

//typeof array
const arr1 = ["Banana", "Orange", "Apple"];
let type = typeof arr1;
console.log(type)
//o/p is object because in javascript array is an object

// tostring() method
arr1.toString();
console.log(arr1)

//join() method
arr1.join("*");
console.log(arr1)
//pop() method
arr1.pop();
console.log(arr1)

//push()method

arr1.push("kiwi");
console.log(arr1)

//shift() method is used for removes the fisrt array elemmt and shifts all other elemnts two the lower index
arr1.shift()
console.log(arr1)

//unshift() method that adds new elemt to the beggning of the array 

arr1.unshift("custurd apple","watermelon")
console.log(arr1)

//delete() user pop() and shift() also for delete the elemnt 
 
delete arr1[0]
console.log(arr1)


