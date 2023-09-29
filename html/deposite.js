// step-1: add event listener(click handel) to the deposit button
document.getElementById("btn-deposit").addEventListener("click",function(){
    // step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-7: clear the deposit field
    depositField.value = "";

    if (isNaN(newDepositAmount)) {
        alert("Please provide a valid number");
        return;
    }

    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalAmount = document.getElementById("deposit-total");
    const preDepositTotalString = depositTotalAmount.innerText;
    const preDepositTotal = parseFloat(preDepositTotalString);

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = preDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalAmount.innerText = currentDepositTotal;

    // step-5: get balance current total
    const ballanceTotalElement = document.getElementById("balance-total");
    const preBalanceTotalString = ballanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = preBalanceTotal + newDepositAmount;
    // set the balance total
    ballanceTotalElement.innerText = currentBalanceTotal;


})