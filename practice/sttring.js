
//string
let text="shahin";
console.log(text);
//length of string
let length=text.length;
console.log(length)
// new string 
let x=new String("morve");
console.log(x)
//slice the string and extracted  part of the string by start to end by using index
let y="shahin,morve,shay"
let z=y.slice(7,12)
let p=y.slice(7)
console.log(p)
//negtive counted from the end of the string
let s="shay, morve ,mahamud"
let result=s.slice(-2)
console.log(result)
//replace method 
let txt="hello world ";
let newtxt=txt.replace("hello","this is  ");
console.log(newtxt)