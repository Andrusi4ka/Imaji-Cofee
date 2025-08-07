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


/***************** PRODUCT-PAGE / small product photos *******************/
if (document.querySelector("#product-page")) {
    let xsImg = Array.from(document.querySelectorAll("#product-page .thumbnail-gallery img"));
    const xlImg = document.querySelector("#product-page .main-image");

    for (let i = 0; i < xsImg.length; i++) {
        xsImg[i].onclick = function () {
            xlImg.innerHTML = xsImg[i].outerHTML;
        }
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
        console.log(Math.round(appItems.offsetHeight * 0.2) + 'px');
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