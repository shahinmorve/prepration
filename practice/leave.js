
function employbonus(leave) {
    if (leave < 10) {
      return 2000;
    } else if (leave < 15) {
      return 1500;
    } else{ 
      return "you're firedd";
    }
  }
  const leave=5
  console.log("howmanyleave",leave)
  const employeebonus=employbonus(leave);
  console.log("employebonus",employeebonus)



function totalleave(totalleave,totalsalry){
    console.log("how many leave taken",totalleave);
    console.log("how much salry i have",totalsalry);

    const perdaysalary=totalsalry/30
    console.log("perdaysalary of me",perdaysalary)

    const leavecutting=totalleave* perdaysalary
    console.log("how much my salary is cutting",leavecutting)
    return leavecutting
}

const totalcut=totalleave(9,50000)
console.log("return value",totalcut)

function salarygiven(totalsalryy,salcutting,bonus)
{
    // return totalsalryy-salcutting
    const deducted=totalsalryy-salcutting
    const fsal=deducted+bonus
    return fsal;
}
const finalsalry=salarygiven(50000,totalcut,employeebonus)
console.log("final salary",finalsalry)




const finalsalryNew=salarygiven(90000000,totalcut,employeebonus)
console.log("final salary",finalsalryNew)

