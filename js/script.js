/******************* випадаюче меню *********************/
$(document).ready(function () {
    $('#menu-bar').on("click", function () {
        $('#menu').toggleClass('menu-tablet');
        $('#menu').toggleClass('d-none');
        $('header').toggleClass('menu-tablet-background');
    });
});

/***************** маленькі фото товару *******************/
let xsImg = Array.from(document.querySelectorAll("#product .thumbnail-gallery img"));
let xlImg = document.querySelector("#product .main-image");
let modal = document.querySelector("#product .modal-image");
let overlay = document.querySelector("#overlay");

for (let i = 0; i < xsImg.length; i++) {
    xsImg[i].onclick = function () {
        xlImg.innerHTML = xsImg[i].outerHTML;
        modal.innerHTML = xsImg[i].outerHTML;
    }
}

/**************** читати більше в карточці товару ******************/
let readBtn = document.querySelector("#product .product-info .product-description .read-more");
let descr = document.querySelector("#product .product-info .product-description p");
if (readBtn) {
    readBtn.onclick = () => {
        if (descr.classList.contains("hide")) {
            readBtn.innerHTML = "Read less";
        } else {
            readBtn.innerHTML = "Read more";
        }
        descr.classList.toggle("hide");
    }
}

/******************* модальне вікно про додавання товару ***************** */
let btnAdd = document.querySelector("#product .product-info .bl-action .btn-add-to-cart");
if (btnAdd) {
    btnAdd.onclick = () => {
        document.querySelector(".product-added-modal").classList.add("d-block");
        setTimeout(() => {
            document.querySelector(".product-added-modal").classList.remove("d-block");
        }, 4000);
    }

    document.querySelector(".product-added-modal .modal-close").onclick = () => {
        document.querySelector(".product-added-modal").classList.remove("d-block");
    }
}

/**************** модальне вікно Discount Promo ********************/
let modalPromo = document.querySelector('#promo-modal');
let promoClose = document.querySelector('#promo-close');
let btnPromo = document.querySelector('#btn-promo');


if (btnPromo) {
    btnPromo.onclick = function () {
        modalPromo.classList.add('d-block');
        overlay.classList.add('d-block');
        document.body.style.overflow = 'hidden';
    }
}

if (promoClose) {
    promoClose.onclick = function () {
        modalPromo.classList.remove('d-block');
        overlay.classList.remove('d-block');
        document.body.style.overflow = '';
    };
}

/*************** HOME PAGE ****************/
if (window.location.href.includes("index")) {
    const appItems = document.querySelector(".app-items");
    const mainApp = document.querySelector(".main-app");
    const mainWorkspace = document.querySelector(".comfy-workspace");
    resizeHeight();

    function resizeHeight() {
        mainApp.style.height = Math.round(appItems.offsetHeight * 0.2) + 'px';
        mainWorkspace.style.paddingTop = Math.round(appItems.offsetHeight * 0.8) + 'px';
        appItems.style.position = "absolute";
        console.log(Math.round(appItems.offsetHeight * 0.2) + 'px');
    }

    window.addEventListener('resize', () => {
        resizeHeight();
    });
}
