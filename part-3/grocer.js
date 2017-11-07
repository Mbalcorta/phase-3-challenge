const cartDetails = {
  cartCount: 0,
  cartItems: []
}

//**** modal functions ****//
const calculateSum = (arrayOfItems) => {
  if(arrayOfItems.length > 0){
    let total =
        arrayOfItems.map(element => {
          return Number(element.itemCost.replace(/[^0-9\.-]+/g,""));
        }).reduce((a, b) => {
          return a + b
        })
        const itemLi = document.createElement('div')
        itemLi.setAttribute("id", "total");
        itemLi.innerHTML = `Total $${total.toFixed(2)}`
        document.getElementById('modal-footer').appendChild(itemLi)
      }
}

const addItemsToModal = (arrayOfItems) => {

  arrayOfItems.forEach(element => {
    const itemLi = document.createElement('li')
    itemLi.setAttribute("class", "item flex flex-row-between");
    itemLi.innerHTML = `
    <span class="item-name">${element.itemName}</span>
    <span class="item-price">${element.itemCost}</span>`
    document.getElementById('cart-items').appendChild(itemLi)
  })
  calculateSum(arrayOfItems)
}

const clearItemsInModal = () => {
  document.getElementById('cart-items').innerHTML = ""
}

//**** cart functions ****//
const displayCartTotal = () => {
  document.getElementById('cart-item-count').innerHTML =
  `(${cartDetails.cartCount})`
}

const updateCartCount = () => {
  cartDetails.cartCount++
  displayCartTotal()
}

const clearCart = () => {
  cartDetails.cartCount = 0
  cartDetails.cartItems = []
  document.getElementById('total').innerText = `Total $0.00`
  clearItemsInModal()
  displayCartTotal()
}

const deleteTotalDiv = () => {
  document.getElementById('total').remove()
  document.getElementById('cart-items').innerHTML = ''
}

const addItemsToCart = (buttonInfo) => {
  cartDetails.cartItems.push({
    'itemName': buttonInfo.path[1].children[0].innerText,
    'itemCost': buttonInfo.path[1].children[1].innerText
    })
}

//**** button event listeners ****//
const addToCartButtons = document.getElementsByTagName("button")
for(var i = 1; i < addToCartButtons.length-1; i++){
  addToCartButtons[i].addEventListener("click", updateCartCount, false)
  addToCartButtons[i].addEventListener("click", function(buttonInfo){
    addItemsToCart(buttonInfo)
  }, false)
}

document.getElementById('clear').addEventListener("click", clearCart, false)

var modal = document.getElementById('myModal')

document.getElementsByTagName("button")[0]
.addEventListener("click", function() {
    modal.style.display = "block";
    addItemsToModal(cartDetails.cartItems)
  }, false)

document.getElementsByClassName("close")[0]
.addEventListener("click", function(){
    modal.style.display = "none"
    deleteTotalDiv()
  }, false)







