const cartDetails = {
  cartCount: 0,
  cartItems: []
}

const displayCartTotal = () => {
  document.getElementById('cart-item-count').innerHTML = `(${cartDetails.cartCount})`
}

const updateCartCount = () => {
  cartDetails.cartCount++
  displayCartTotal()
}

const clearCart = () => {
  cartDetails.cartCount = 0
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

document.getElementById('clear').addEventListener("click", clearCart, false)

// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks on the button, open the modal
document.getElementsByTagName("button")[0].onclick = function() {
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}






