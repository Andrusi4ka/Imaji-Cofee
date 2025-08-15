/******************* випадаюче меню *********************/
if (document.querySelector("#menu-bar")) {
    const menu = document.querySelector("#menu");
    const header = document.querySelector("header");

    document.querySelector("#menu-bar").onclick = function () {
        menu.classList.toggle('menu-tablet');
        menu.classList.toggle('d-none');
        header.classList.toggle('menu-tablet-background');
    }
}


/**************** читати більше в карточці товару ******************/
if (document.querySelector("#product-page")) {
    const readBtn = document.querySelector("#product-page .product-info .product-description .read-more");
    const descr = document.querySelector("#product-page .product-info .product-description p");
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
}


/*************** HOME PAGE ****************/
if (document.querySelector("#home-page")) {
    const appItems = document.querySelector(".app-items");
    const mainApp = document.querySelector(".main-app");
    const mainWorkspace = document.querySelector(".comfy-workspace");
    resizeHeight();

    function resizeHeight() {
        mainApp.style.height = Math.round(appItems.offsetHeight * 0.2) + 'px';
        mainWorkspace.style.paddingTop = Math.round(appItems.offsetHeight * 0.8) + 'px';
        appItems.style.position = "absolute";
    }

    window.addEventListener('resize', () => {
        resizeHeight();
    });
}

/***************** PRODUCT-PAGE / resizing ".thumbnail-gallery" height ******************/
if (document.querySelector("#product-page")) {
    const mainImg = document.querySelector(".main-image img");
    const gallery = document.querySelector(".thumbnail-gallery");

    if (window.innerWidth > 992) {
        galleryHeight();
    }


    function galleryHeight() {
        gallery.style.height = Math.round(mainImg.offsetHeight) + 'px';
    }

    window.addEventListener('resize', () => {

        if (window.innerWidth > 992) {
            galleryHeight();
        } else {
            gallery.style.height = '';
        }
    });
}

/*************** HOME PAGE. swiper slider ****************/
if (document.querySelector("#home-page")) {
    new Swiper('.workspaces', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                spaceBetween: 20,
                slidesPerView: 2.5,
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 3.5,
            },
            1200: {
                spaceBetween: 40,
                slidesPerView: 4.5
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}


/********** PRODUCT-PAGE / вставляє маленьке фото у головне фото. Підставляє головне фото в модальне вікно *******/
if (document.querySelector("#product-page")) {
    let xsImg = Array.from(document.querySelectorAll("#product-page .thumbnail-gallery img"));
    const xlImg = document.querySelector("#product-page .main-image");

    if (document.querySelector('#product-image-modal')) {
        const modalBody = document.querySelector('#product-image-modal .modal-body');
        modalBody.innerHTML = xlImg.innerHTML;
        modalBody.querySelector('img').classList.remove('w-100');
    }

    for (let i = 0; i < xsImg.length; i++) {
        xsImg[i].onclick = function () {
            xlImg.innerHTML = xsImg[i].outerHTML;

            if (document.querySelector('#product-image-modal')) {
                const modalBody = document.querySelector('#product-image-modal .modal-body');
                modalBody.innerHTML = xlImg.innerHTML;
                modalBody.querySelector('img').classList.remove('w-100');
            }
        }
    }
}


/******************** Ховає та показує пароль ****************/
if (document.querySelector('.eye')) {
    const openEye = '<i class="bi bi-eye"></i>';
    const closedEye = '<i class="bi bi-eye-slash-fill"></i>';
    document.querySelector('.eye').addEventListener('click', function () {
        if (this.innerHTML === openEye) {
            this.innerHTML = closedEye;
            this.parentElement.type = 'password';
        } else {
            this.innerHTML = openEye;
            this.parentElement.type = 'text';
        }
    });
}


/*************** HOME PAGE. swiper slider ****************/
if (document.querySelector("#home-page")) {

    new Swiper('.main-locations', {
        slidesPerView: 4,
        effect: "fade",          // ефект плавного зникнення
        fadeEffect: {
            crossFade: true        // одночасне згасання/поява
        },
        autoplay: {
            delay: 3000,           // затримка між слайдами (мс)
            disableOnInteraction: false // не зупиняти після ручного свайпу
        },
        loop: true               // зациклення
    });

}


