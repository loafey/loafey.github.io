var maxScrollLimit;
var scrollIndicatorElement = document.getElementById("main-navigator-button-indicator");
var maxScrollPercentage;
var maxPercentage = 100;

setTimeout(() => {
    maxScrollLimit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    maxScrollPercentage = ((window.scrollY / maxScrollLimit) * maxPercentage);
    scrollIndicatorElement.style.left = maxScrollPercentage + "%";
}, 10);

document.addEventListener("resize", () => {
    maxScrollLimit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    maxScrollPercentage = ((window.scrollY / maxScrollLimit) * maxPercentage);
    scrollIndicatorElement.style.left = maxScrollPercentage + "%";
});

document.addEventListener("scroll", () => {
    //console.log((window.scrollY / maxScrollLimit) * 100);
    maxScrollPercentage = ((window.scrollY / maxScrollLimit) * maxPercentage);
    scrollIndicatorElement.style.left = maxScrollPercentage + "%";
});