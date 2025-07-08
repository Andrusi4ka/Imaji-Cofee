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
let overlay = document.querySelector("#product .overlay");

for (let i = 0; i < xsImg.length; i++) {
    xsImg[i].onclick = function () {
        xlImg.innerHTML = xsImg[i].outerHTML;
        modal.innerHTML = xsImg[i].outerHTML;
    }
}

/**************** модальне вікно з картинкою ********************/
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

modal.addEventListener('click', function () {
    closeModal();
});

/**************** ситати більше в карточці товару ******************/
let readBtn = document.querySelector("#product .main-info .description .read-more");
let descr = document.querySelector("#product .main-info .description p");
readBtn.onclick = () => {
    if (descr.classList.contains("hide")) {
        readBtn.innerHTML = "Read less";
    } else {
        readBtn.innerHTML = "Read more";
    }
    descr.classList.toggle("hide");
}


/******************* модальне вікно про додавання товару ***************** */
document.querySelector("#product .main-info .bl-action .btn-add").onclick = () => {
    document.querySelector(".modal-added").classList.add("show");
    setTimeout(() => {
        document.querySelector(".modal-added").classList.remove("show");
    }, 4000);
}

document.querySelector(".modal-added .modal-close").onclick = () => {
    document.querySelector(".modal-added").classList.remove("show");
}

