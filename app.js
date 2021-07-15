function qtyPlusMiuns(bookingClass, isIncrease) {
    const inputQty = document.getElementById(bookingClass+'-qty');
    const inputNumber = parseInt(inputQty.value);
    let newCount = inputNumber;
    if (isIncrease == true) {
        newCount = inputNumber + 1;
    }
    if (isIncrease == false && inputNumber > 0) {
        newCount = inputNumber - 1;
    }
    inputQty.value = newCount;

    calculatTotal()
}

function calculatTotal() {
    const firstClassQty = document.getElementById('firstClass-qty');
    const firstClassNumber = parseInt(firstClassQty.value);

    const economyQty = document.getElementById('economy-qty');
    const economyNumber = parseInt(economyQty.value);

    const totalPrice = firstClassNumber * 150 + economyNumber * 100;
    document.querySelector('#sub-total').innerHTML = `$ ${totalPrice}`;

    const vatTotal = totalPrice * 10 / 100;
    document.querySelector("#vat").innerHTML = "$ "+ vatTotal;

    const totalAmount = totalPrice + vatTotal;
    document.querySelector("#total-amount").innerHTML = `$ ${totalAmount}`;
    
    document.querySelector('#paymetn').innerHTML = totalAmount;
}


document.getElementById("book-now").addEventListener("click", function () {
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'none';

    const bookButton = document.getElementById('payment-content');
    bookButton.style.display = 'block';
})

document.getElementById('paymetn-btn').addEventListener('click', function () {
    const paymentContent = document.getElementById('payment-content');
    paymentContent.style.display = 'none';

    const thankPage = document.getElementById('thank-page');
    thankPage.style.display = 'block';

})



// document.getElementById("minus-btn").addEventListener('click', function () {
//     qtyPlusMiuns(false);

//     // const inputValue = document.getElementById('input-value');
//     // const inputNumber = parseInt(inputValue.value);
//     // const inputValueMinus = inputNumber -1;
//     // inputValue.value = inputValueMinus;
//     // const totalsub = inputValueMinus * 150;
//     // const subTotal = document.getElementById('subtotal').innerHTML = totalsub;
    
    
// })


// document.getElementById("plus-btn").addEventListener('click', function () {
//     qtyPlusMiuns(true);
// })


 
// function qtyPlusMiuns(bookingClass, isIncrease) {
//     const inputQty = document.getElementById('input-qty');
//     const inputNumber = parseInt(inputQty.value);
//     let newCount = inputNumber;
//     if (isIncrease == true) {
//         newCount = inputNumber + 1;
//     }
//     if (isIncrease == false && inputNumber > 0) {
//         newCount = inputNumber - 1;
//     }
//     inputQty.value = newCount; 
//     // const totalsub ="$"+ newCount * 150;
//     let totalSub = 0;
//     if (bookingClass == 'economy') {
//         totalSub = newCount * 100;
//     }
//     if (bookingClass == 'firstClass') {
//         totalSub = newCount * 150;
//     }

//     document.getElementById('sub-total').innerHTML=totalSub;
// }



// function qtyPlusMiuns(isIncrease) {
//     const inputValue = document.getElementById('input-value');
//     const inputNumber = parseInt(inputValue.value);
//     let newCount = inputNumber;
//     if (isIncrease == true) {
//         newCount = inputNumber + 1;
//     }
//     if (isIncrease == false && inputNumber > 0) {
//         newCount = inputNumber - 1;
//     }
//     inputValue.value = newCount;  
//     const totalsub ="$"+ newCount * 150;
//     document.getElementById('subtotal').innerHTML=totalsub;
// }









