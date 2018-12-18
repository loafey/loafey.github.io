setTimeout(function () {
    document.getElementById("mainpage-decor-bar").classList.remove("mainpage-decor-bar-hidden");
    document.getElementById("mainpage-text").classList.remove("mainpage-text-hidden");
    document.body.style.overflowY = "auto";
}, 500);
window.scrollTo(0, 0);