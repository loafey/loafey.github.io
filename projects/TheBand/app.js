let productCounter = document.getElementById("product-counter");
let productButton = document.getElementById("product-button");

productButton.addEventListener("click", () => {
    state.bullets += state.clickWorth * state.clickMultiplier;
});

let state = {
    "bullets": 0,
    "clickWorth": 1,
    "clickMultiplier": 1
}

let update = () => {
    draw();
    window.requestAnimationFrame(update);
}

let draw = () => {
    productCounter.innerText = state.bullets;
}

window.requestAnimationFrame(update);