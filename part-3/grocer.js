const cartDetails = {
  cartCount: 0,
  cartItems: []
}

//**** modal functions ****//
const calculateSum = (arrayOfItems) => {
  const total =
    arrayOfItems.map(element => {
      return Number(element.itemCost.replace(/[^0-9\.-]+/g,""));
    }).reduce((a, b) => {
      return a + b
    })
  const itemLi = document.createElement('li')
  itemLi.innerHTML = `<span>total ${total.toFixed(2)}</span>`
  document.getElementById('cart-items').appendChild(itemLi)
}

const addItemsToModal = (arrayOfItems) => {
  arrayOfItems.forEach(element => {
    const itemLi = document.createElement('li')
    itemLi.innerHTML = `
    <span>${element.itemName}</span>
    <span>${element.itemCost}</span>`
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
  clearItemsInModal()
  displayCartTotal()
}

const addItemsToCart = (buttonInfo) => {
  cartDetails.cartItems.push({
    'itemName': buttonInfo.path[1].children[0].innerText,
    'itemCost': buttonInfo.path[1].children[1].innerText
    })
}

const addToCartButtons = document.getElementsByTagName("button")
for(var i = 1; i < addToCartButtons.length-1; i++){
  addToCartButtons[i].addEventListener("click", updateCartCount, false)
  addToCartButtons[i].addEventListener("click", function(buttonInfo){
    addItemsToCart(buttonInfo)
  }, false)
}

//**** button event listeners ****//
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
  }, false)







