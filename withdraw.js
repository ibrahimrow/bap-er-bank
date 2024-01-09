//  step 1
document.getElementById('btn-wirhdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = "";
    // step 2
    const withdrawTotalElement = document.getElementById('withdraw-deposit');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 3
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal; 

    // step 4
    const balanceElement = document.getElementById('balance-deposit');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 5
    const newBalnceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalnceTotal;
})
