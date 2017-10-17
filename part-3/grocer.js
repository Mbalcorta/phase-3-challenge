const cartDetails = {
  cartCount: 0
}

const updateCartCount = () => {
  cartDetails.cartCount++
  document.getElementById('cart-item-count').innerHTML = `(${cartDetails.cartCount})`
}

const addToCartButtons = document.getElementsByTagName("button")
for(var i = 1; i < addToCartButtons.length; i++){
  addToCartButtons[i].onclick = updateCartCount
}






