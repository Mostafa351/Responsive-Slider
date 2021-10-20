const items = Array.from(document.querySelectorAll(".img-item"));
const lightboxItem = document.getElementById("box");
const lightParent = document.querySelector(".light-box");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const closeBtn = document.getElementById("close");

let imgIndex = 0;

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", (e) => {
        imgSorce = e.target.getAttribute("src");
        imgIndex = items.indexOf(e.target);

        lightParent.classList.replace("d-none", "d-flex");
        lightboxItem.style.backgroundImage = `url(${imgSorce})`;
    });
}

/**helper**/
function slider(numb) {
    imgIndex = imgIndex + numb;

    if (imgIndex == items.length) {
        imgIndex = 0;
    }
    if (imgIndex == -1) {
        imgIndex = items.length - 1;
    }
    let imgSorce = items[imgIndex].getAttribute("src");
    lightboxItem.style.backgroundImage = `url(${imgSorce})`;

};

function closeBox() {
    lightParent.classList.replace("d-flex", "d-none");
}

/**sliding and close**/
nextBtn.addEventListener("click", () => {
    slider(1);
});
prevBtn.addEventListener("click", () => {
    slider(-1);
});
closeBtn.addEventListener("click", closeBox);

/*use keyboard*/
document.addEventListener("keydown", (e) => {
    let keyBtn = e.key;
    if (keyBtn == "Escape") {
        closeBox();
    }

    if (keyBtn == "ArrowRight") {
        slider(1);
    }

    if (keyBtn == "ArrowLeft") {
        slider(-1);
    }
});