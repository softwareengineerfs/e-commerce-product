
// Increase and lower numbers
const elMinusButton = document.querySelector(".buying__minus");
const elPlususButton = document.querySelector(".buying__plus");
const elNumber = document.querySelector(".buying__number");

const elMainCardButton = document.querySelector(".main-card");
const elMainCardDropdown = document.querySelector(".main-card__dropdown");

elMinusButton.addEventListener("click", function () {
  elNumber.textContent--;
});

elPlususButton.addEventListener("click", function () {
  elNumber.textContent++;
});






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

const elProductPageGallery = document.querySelector(".product-page__gallery")
const elsImgShowcaseThumbnailButtons = elProductPageGallery.querySelectorAll(".js-img-showcase-thubnail-button")
const elsImgThumbnail = elProductPageGallery.querySelectorAll(".img-showcase__thumbnail")
const elImgShowcaseActive = elProductPageGallery.querySelector(".img-showcase__active-img")



elsImgShowcaseThumbnailButtons.forEach(function (elButton) {
  elButton.addEventListener("click", function () {

    // remove active form all
    elsImgThumbnail.forEach((elImgThumbnail)=> {
      elImgThumbnail.classList.remove(modifiers.ImgActiveClass)
    })

    // add active class
    elButton.parentElement.classList.add(modifiers.ImgActiveClass)


    elImgShowcaseActive.src = elButton.dataset.imgSrc

  })
})


// lightbox
const elLightboxToggleButton = document.querySelector(".img-showcase__lightbox-toggle")
const elLightbox = document.querySelector(".lightbox")
const elLightboxCloseButton = document.querySelector(".lightbox__close")

elLightboxToggleButton.addEventListener("click", function () {
    elLightbox.classList.add("lightbox--open")
})

elLightboxCloseButton.addEventListener("click", function () {
  elLightbox.classList.remove("lightbox--open")
})


// LIGHTBOX ACTIVE IMG
const elsImgLightboxThumbnailButtons = elLightbox.querySelectorAll(".js-img-lightbox-thubnail-button")
const elsImgLightboxThumbnail = elLightbox.querySelectorAll(".img-showcase__thumbnail")
const elImgLightboxActive = elLightbox.querySelector(".img-showcase__active-img")



elsImgLightboxThumbnailButtons.forEach(function (elButton) {
  elButton.addEventListener("click", function () {

    // remove active form all
    elsImgLightboxThumbnail.forEach((elImgThumbnail)=> {
      elImgThumbnail.classList.remove("img-showcase__thumbnails--active")
    })

    // add active class
    elButton.parentElement.classList.add("img-showcase__thumbnails--active")


    elImgLightboxActive.src = elButton.dataset.imgSrc

  })
})



// LIGHTBOX CONTROL
const elLightboxControlPrev = elLightbox.querySelector(".js-lightbox-control-prev")
const elLightboxControlNext = elLightbox.querySelector(".js-lightbox-control-next")
const elLightboxBigImg = elLightbox.querySelector(".img-showcase__active-img--lightbox")



// NEXT ELEMENT SIBLING
if (elLightboxControlNext) {
  elLightboxControlNext.addEventListener("click", function() {

    const elActiveItem = elLightbox.querySelector(".img-showcase__thumbnails--active")

    elActiveItem.classList.remove("img-showcase__thumbnails--active")

    if (elActiveItem.nextElementSibling === null) {
      elsImgLightboxThumbnail[0].classList.add("img-showcase__thumbnails--active")
    } else {
      elActiveItem.nextElementSibling.classList.add("img-showcase__thumbnails--active")
    }

    const mainactive = elLightbox.querySelector(".img-showcase__thumbnails--active")

    elLightboxBigImg.src = mainactive.querySelector(".js-img-lightbox-thubnail-button").dataset.imgSrc
  })
}


// PREVIOUS ELEMENT SIBLING
if (elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener("click", function() {

    const elActiveItem1 = elLightbox.querySelector(".img-showcase__thumbnails--active")

    elActiveItem1.classList.remove("img-showcase__thumbnails--active")

    if (elActiveItem1.previousElementSibling === null) {
      elsImgLightboxThumbnail[3].classList.add("img-showcase__thumbnails--active")
    } else {
      elActiveItem1.previousElementSibling.classList.add("img-showcase__thumbnails--active")
    }


    const mainactive = elLightbox.querySelector(".img-showcase__thumbnails--active")

    elLightboxBigImg.src = mainactive.querySelector(".js-img-lightbox-thubnail-button").dataset.imgSrc

  })
}



