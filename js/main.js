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



// Image showcase
const modifiers = {
  ImgActiveClass : "img-showcase__thumbnails--active"
}


const elsImgShowcaseThumbnailButtons = document.querySelectorAll(".js-img-showcase-thubnail-button")
const elsImgThumbnail = document.querySelectorAll(".img-showcase__thumbnail")
const elImgShowcaseActive = document.querySelector(".img-showcase__active-img")



elsImgShowcaseThumbnailButtons.forEach(function (elButton) {
  elButton.addEventListener("click", function () {

    // remove active form all
    elsImgThumbnail.forEach((elImgThumbnail)=> {
      elImgThumbnail.classList.remove(modifiers.ImgActiveClass)
    })

    // add active class
    elButton.parentElement.classList.add(modifiers.ImgActiveClass)


    elImgShowcaseActive.src = elButton.dataset.imgSrc
    console.log(elImgShowcaseActive.src);
  })
})