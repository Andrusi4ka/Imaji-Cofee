/******************* випадаюче меню *********************/
$(document).ready(function () {
    $('#menu-bar').on("click", function () {
        $('#menu').toggleClass('menu-tablet');
    });
});

/***************** маленькі фото товару *******************/
let xsImg = Array.from(document.querySelectorAll("#product .preview-image img"));
let xlImg = document.querySelector("#product .large-image");
let modal = document.querySelector("#product .modal-image");
let overlay = document.querySelector("#overlay");

for (let i = 0; i < xsImg.length; i++) {
    xsImg[i].onclick = function () {
        xlImg.innerHTML = xsImg[i].outerHTML;
        modal.innerHTML = xsImg[i].outerHTML;
    }
}

/**************** модальне вікно з картинкою товару ********************/
if (xlImg) {
    xlImg.onclick = function (event) {
        event.stopPropagation();
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    document.addEventListener('click', function () {
        if (modal.style.display === 'block') {
            closeModal();
        }
    });

    if (modal) {
        modal.addEventListener('click', function () {
            closeModal();
        });
    }
}



/**************** читати більше в карточці товару ******************/
let readBtn = document.querySelector("#product .main-info .description .read-more");
let descr = document.querySelector("#product .main-info .description p");
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
let btnAdd = document.querySelector("#product .main-info .bl-action .btn-add");
if (btnAdd) {
    btnAdd.onclick = () => {
        document.querySelector(".product-added__modal").classList.add("show");
        setTimeout(() => {
            document.querySelector(".product-added__modal").classList.remove("show");
        }, 4000);
    }

    document.querySelector(".product-added__modal .modal-close").onclick = () => {
        document.querySelector(".product-added__modal").classList.remove("show");
    }
}

/**************** модальне вікно Discount Promo ********************/
let modalPromo = document.querySelector('#promo__modal');
let promoClose = document.querySelector('#promo__close');
let btnPromo = document.querySelector('#btn__promo');


if (btnPromo) {
    btnPromo.onclick = function () {
        modalPromo.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

if (promoClose) {
    promoClose.onclick = function () {
        modalPromo.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    };
}