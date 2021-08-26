function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId,amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText); 

    totalElement.innerText = previousTotal + amount;

}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


// Deposite start

document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmount = getInputValue('deposite-input');
    if (depositeAmount > 0) {
        updateTotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }
    else {
        alert('Please Input positive number');
    }
    
})

// Withdraw start

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdraw = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdraw > 0 && withdraw < currentBalance) {
        updateTotalField('withdraw-total', withdraw)
        updateBalance(withdraw, false);
    }
    else {
        alert('Input positive number or You have not sufficient balance');
    }
    
})