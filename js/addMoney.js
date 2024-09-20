document.getElementById('btn-money').addEventListener('click', function(event){
    event.preventDefault();
    let addMoney = document.getElementById('add-money').value;
    let addMoneyNumber = parseFloat(addMoney);
    let pinNumber = document.getElementById('pin-number').value;
    console.log(addMoney,pinNumber);

    if(pinNumber === '1234'){
        console.log('addded your money in your account')
        let balance = document.getElementById('account-balance').innerText;
        let balanceNumber = parseFloat(balance);
        let newNumber = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newNumber
    }

    else{
        alert('failed to logged in.! please try in again')
    }
})