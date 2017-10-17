const cartDetails = {
  cartCount: 0
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

const addToCartButtons = document.getElementsByTagName("button")
for(var i = 1; i < addToCartButtons.length-1; i++){
  addToCartButtons[i].onclick = updateCartCount
}

document.getElementById('clear').onclick = clearCart

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
document.getElementsByTagName("button")[0].onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






