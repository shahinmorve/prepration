// You can create a constant array:
const name=["shahin","mahamud"];
console.log("before ",name)
// You can change an element:
name[1]="aman";
console.log("after",name)
// You can add an element:
console.log("this is before push",name)
name.push("kazi");
console.log("this is after push",name)
// console.log(name);
console.log("this is before pop",name)
name.splice(1,2)
console.log("this is after pop",name)
