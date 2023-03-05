const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const phoneQuantity = document.querySelector('.phone-quantity')
phoneQuantity.value = 0
const phoneValue = document.querySelector('.phone-value')
const subTotal = document.querySelector('.subtotal')


plus.addEventListener('click', (e)=>{
    console.log('added!')

    phoneQuantity.value = parseFloat(phoneQuantity.value) + 1
    phoneValue.innerText = '$'+phoneQuantity.value *100 

    subTotal.innerText = '$'+parseFloat(phoneQuantity.value *100 + 200) 

})

minus.addEventListener('click', (e)=>{
    phoneQuantity.value = parseFloat(phoneQuantity.value) - 1
    phoneValue.innerText = '$'+phoneQuantity.value *100 
    subTotal.innerText = '$'+parseFloat(phoneQuantity.value *100 + 200) 
})

