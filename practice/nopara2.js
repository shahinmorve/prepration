// Create a function called generateRandomNumber that generates and returns
//  a random number between 1 and 10.
function randomnumber(){
    return Math.floor(Math.random()*10)+1;
}
let num=randomnumber();
console.log("random number:"+ num);