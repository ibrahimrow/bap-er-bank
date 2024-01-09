// step 1
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('amar deposit lage nh')
    // step 2
    const depositField = document.getElementById('deposit-feild');
    const newDepositAmountString = depositField.value;
    // console.log(newDepositAmountString);

    // step 3
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);
    depositField.value = "";

    // step 4
    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    // step 6
    const balanceTotalElement = document.getElementById('balance-deposit');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    // Step 7
    const newBalnceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalnceTotal


})