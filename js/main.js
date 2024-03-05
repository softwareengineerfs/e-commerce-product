const elSiteHeaderLink = document.querySelector(".js-site-header__cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal")
const elRemoveProduct = document.querySelector(".item-shopping-cart-products__remove-button")
const elSiteHeaderCart = document.querySelector(".site-header__cart")
const elShoppingCart = document.querySelector(".shopping-cart")

if (elSiteHeaderLink) {
  elSiteHeaderLink.addEventListener("click", function (evt) {
   evt.preventDefault()

  elSiteHeaderCartModal.classList.toggle("site-header__cart-modal--open")
  })
}


if (elRemoveProduct) {
  elRemoveProduct.addEventListener("click", function (evt) {
    evt.preventDefault()

  elSiteHeaderCart.classList.add("site-header__cart--empty")
  elShoppingCart.classList.add("shopping-cart--empty")
  })
}