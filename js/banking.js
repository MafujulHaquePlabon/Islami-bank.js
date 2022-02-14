function getInputValue(inputId){
    const inputField= document.getElementById(inputId);
    const inputFieldText= inputField.value;
    const inputFieldAmount=parseFloat(inputFieldText);
    inputField.value="";
    return inputFieldAmount;
}
function updateDWTotalField(totalFieldId,amount){
  const totalField=  document.getElementById(totalFieldId);
  const previousTotalFieldText=totalField.innerText;
  const previousTotalFieldAmount= parseFloat(previousTotalFieldText);
  totalField.innerText= previousTotalFieldAmount + amount;
}
function getCurrentBalance(){
    const balanceField=document.getElementById("balance-total");
    const previousBalanceFieldText=balanceField.innerText;
    const previousBalanceFieldAmount= parseFloat(previousBalanceFieldText);
    return previousBalanceFieldAmount;
}
function updateBalanceField(amountId,addIs){
  const balanceField=document.getElementById("balance-total");
  const previousBalanceFieldText=balanceField.innerText;
  const previousBalanceFieldAmount= parseFloat(previousBalanceFieldText);
  if(addIs==true){
    balanceField.innerText= previousBalanceFieldAmount + amountId;
  }
  else{
    balanceField.innerText= previousBalanceFieldAmount - amountId;
  }

}
document.getElementById("deposit-button").addEventListener("click",function(){
  const depositAmount = getInputValue("deposit-input");
  if(depositAmount>0){
    const updateDepositTotalAmount=updateDWTotalField("deposit-total",depositAmount);
    const updateBalanceTotal= updateBalanceField(depositAmount,true);
  }
});
document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawAmount= getInputValue("withdraw-input");
    const currentBalance=getCurrentBalance();
    if(withdrawAmount>0 && withdrawAmount<=currentBalance){
        const updateWithdrawTotalAmount=updateDWTotalField("withdraw-total",withdrawAmount);
    const updateBalanceTotal= updateBalanceField(withdrawAmount,false);
    }
    if(withdrawAmount>currentBalance){
        console.log("You can not withdraw more than what you have in your account")
    }
});

/*----------------same_code second_system beginners think---------------------------- */
//  /* Handle deposit button event*/
//  document.getElementById("deposit-button").addEventListener("click",function(){
//      /* get the amount deposited */
//      const depositInputField= document.getElementById("deposit-input");
//      const newDepositInputText=depositInputField.value;
//      const newDepositInputAmount=parseFloat(newDepositInputText); 
//     /* update deposit total */
//     const depositTotalAmount=document.getElementById("deposit-total");
//     const previousDepositTotalText=depositTotalAmount.innerText;
//     const previousDepositTotalAmount=parseFloat(previousDepositTotalText);

//     const newDepositTotalAmount= previousDepositTotalAmount +newDepositInputAmount;

//     depositTotalAmount.innerText=newDepositTotalAmount;
    
//       /* update account balance */
//       const balanceTotal =document.getElementById("balance-total");
//       const balanceTotalText=balanceTotal.innerText;
//       const previousBalanceTotal= parseFloat(balanceTotalText);

//       const newBalanceTotal= previousBalanceTotal + newDepositInputAmount;
//       balanceTotal.innerText=newBalanceTotal;

// /* clear the deposit input field  */
//     depositInputField.value="";
// });

// /* handle withdraw event handler */
// document.getElementById("withdraw-button").addEventListener("click",function(){
// const withdrawInputField=document.getElementById("withdraw-input");
// const newWithdrawInputFieldText=withdrawInputField.value;
// const newWithdrawInputFieldAmount= parseFloat(newWithdrawInputFieldText);

// /* set withdraw total */
// const withdrawTotal = document.getElementById("withdraw-total");
// const previousWithdrawTotalText= withdrawTotal.innerText;
// const previousWithdrawTotalAmount= parseFloat(previousWithdrawTotalText);

// const newWithdrawTotal=previousWithdrawTotalAmount + newWithdrawInputFieldAmount;
// withdrawTotal.innerText=newWithdrawTotal;
// /* update balance */
// const balanceTotal=document.getElementById("balance-total");
// const previousBalanceText=balanceTotal.innerText;
// const previousBalanceTotal=parseFloat(previousBalanceText);

//  const newBalanceTotal= previousBalanceTotal - newWithdrawInputFieldAmount;
//  balanceTotal.innerText=newBalanceTotal;
// /* clear withdraw input */
// withdrawInputField.value="";
// });


