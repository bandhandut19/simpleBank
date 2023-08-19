const deposit = document.getElementById('deposit-btn');
const withdraw = document.getElementById('withdraw-btn')

const inputDeposit = document.getElementById('input-deposit')
const inputWithdraw = document.getElementById('input-withdraw')

const displayDeposit = document.getElementById('deposit')
const displayBalance = document.getElementById('balance')
const displayWithdraw = document.getElementById('withdraw')

let depositAmount = 0;
let withdrawAmount = 0;
let balanceAmount = 0;

deposit.addEventListener('click', () => {
    parseInt(inputDeposit.value)
    const depositValue = parseInt(inputDeposit.value)
    inputDeposit.value = ''

    if(isNaN(depositValue)){
        alert("Hudai ultaPalta Amount Diyen Na")
        return;
    }

    depositAmount += depositValue;
    displayDeposit.innerText = depositAmount;
    balanceAmount += depositValue
    displayBalance.innerText = balanceAmount;
})
withdraw.addEventListener('click', () => {
    parseInt(inputWithdraw.value)
    const withdrawValue = parseInt(inputWithdraw.value)
    inputWithdraw.value = ''

    if(isNaN(withdrawValue)){
        alert("Hudai ultaPalta Amount Diyen Na")
        return;
    }
    if(withdrawValue > balanceAmount){
        alert("Fokir Tor Kache taka nai etto!")
        return
    }

    withdrawAmount += withdrawValue;
    displayWithdraw.innerText = withdrawAmount;
    balanceAmount -= withdrawValue
    displayBalance.innerText = balanceAmount;
})
