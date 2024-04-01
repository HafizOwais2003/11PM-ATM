import { copyFileSync } from "fs";
import inquirer from "inquirer";

let totalBalance:number = 10000
const pinNumber: number=2003

let pinEntered = await inquirer.prompt(
    [
        {

            name: "pin",
            message: "enter your pin",
            type: "number",
          
    
}
]
)
// console.log(pinEntered.pin)
if(pinEntered.pin == pinNumber){
    
}
  else{
    console.log('Incorrect Pin')
    process.exit()
  }

    let atmQuestion =await inquirer.prompt([
        {
            name:'accountType',
            message:'Select your account type',
            type:'list',
            choices:[
                "Current Account",
                "Savings Account",
            ]
        },
        {
            name:'transMethod',
            message:'Select your transaction method',
            type:'list',
            choices:[
                "Cash Withdrawal",
                "Fast cash",
            ]
        }
    ]);

if(atmQuestion.transMethod == "Cash Withdrawal")
{

    let cashwithdrawAmount = await inquirer.prompt([
      {  name:'withdrawal',
        mess:'Enter the amount you want to withdraw',
        type:'number'

    }
    ]);
    //Greater than or equals to operator
    if(totalBalance >= cashwithdrawAmount.withdrawal)
    {

        totalBalance -= cashwithdrawAmount.withdrawal//totalBalance = totalBalance -cashwithdrawAmount
        console.log(`Your Total Balance is :${totalBalance}`)
}else (
    console.log('Insufficient Balance')
)
}
   else {
    let fastCashAmount = await inquirer.prompt(
        [
           {
            name:'fastCash',
            message:'Select the amount you want to withdraw',
            type:'list',
            choices:[
                "2000",
                "5000",
                "7000",
            ]
           } 
        ]
    )
    if(totalBalance >= fastCashAmount.fastCash){
        totalBalance -= fastCashAmount.fastCash//totalbalance = totalbalance -cashwithdrawAmount
        console.log(`Your Total Balance is :${totalBalance}`)
       } else if(fastCashAmount){
        console.log(`${fastCashAmount.type}`)
    }
    else (

        console.log('Insufficientt Balance')
    )
    }
     








