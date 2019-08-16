/*var maxScrollLimit;
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
});*/

var scrollLocation = 0;
var siteContentContainerElement = document.getElementById("site-content-container");
var siteContentElement = document.getElementById("site-content");
var scrollDestination = 0;
var dotDestination = 0;
var scrollIndicatorElement = document.getElementById("scroll-indicator");
var scrollIndicatorDotBigElement = document.getElementById("scroll-indicator-dot-big");
var page = 0;

var lerp = (x, y, interval) => {
    return x * (1 - interval) + y * interval;
}

var setScrollLocation = (goalpage) => {
    page = goalpage;
    var allProjectInfos = document.getElementsByClassName("project-info")
    var allProjectButtons = document.getElementsByClassName("show-project-button");

    Array.from(allProjectButtons).forEach((element) => {
        element.innerHTML = "+";
    });

    Array.from(allProjectInfos).forEach((element) => {
        if (element.classList.contains("project-info-shown")) {
            element.classList.remove("project-info-shown");
            element.parentElement
        };
    });
};

var frameUpdate = () => {
    scrollDestination = lerp(siteContentContainerElement.scrollLeft, (siteContentElement.clientWidth / 4) * page, 0.4);
    //dotDestination = lerp(scrollIndicatorDotBigElement.style.left.split("px")[0], (scrollIndicatorElement.clientWidth / 4) * page, 0.4);
    //scrollIndicatorDotBigElement.style.left = dotDestination + "px";
    scrollIndicatorDotBigElement.style.left = (scrollIndicatorElement.clientWidth / 4) * page + "px";
    siteContentContainerElement.scrollLeft = scrollDestination;
    requestAnimationFrame(frameUpdate);
};
requestAnimationFrame(frameUpdate);

var sidebarHidden = true;
var siteNavigatorElement = document.getElementById("site-navigator");
var switchShowingSidebar = () => {
    if (sidebarHidden) {
        siteNavigatorElement.classList.add("show-sitenavigator");
        console.log("adding show-sitenavigator");

        var deleteElement = document.createElement("div");
        deleteElement.setAttribute("onclick", "switchShowingSidebar()");
        deleteElement.id = "delete-sidebar-element";

        document.body.appendChild(deleteElement);

        sidebarHidden = false;
    } else {
        siteNavigatorElement.classList.remove("show-sitenavigator");
        document.getElementById("delete-sidebar-element").parentElement.removeChild(document.getElementById("delete-sidebar-element"));
        console.log("removing show-sitenavigator");
        sidebarHidden = true;
    };
};

var smallScreenButtonPress = () => {
    document.getElementById("delete-sidebar-element").parentElement.removeChild(document.getElementById("delete-sidebar-element")); //error if non existant
    if (siteNavigatorElement.classList.contains("show-sitenavigator")) {
        siteNavigatorElement.classList.remove("show-sitenavigator");
        sidebarHidden = true;
    }
};

var projectListElement = document.getElementById("project-list");
fetch("https://api.github.com/users/samhamnam/repos", {
    method: "get"
}).then((Response) => {
    Response.json().then((data) => {
        data.forEach(element => {
            var newElement = document.createElement("li");
            newElement.classList.add("project-list-li");
            newElement.innerHTML =
                "<div class='project-list-element'><p>" + element.name + "</p><button class='show-project-button' onclick='showProjectInfo(this," + element.id + ");'>+</button></div><div class='project-info' id=" + element.id + "><p>Description: " + element.description + "</p> <p>Language: " + element.language + "</p> <p>URL: <a href='" + element.url + "'>" + element.url + "</a></p></div>";
            projectListElement.appendChild(newElement);
        });
    });
}).catch((err) => {
    var listElement = document.createElement("li");
    listElement.innerHTML = "<p>Failed to fetch repositories!</p>"
});

var showProjectInfo = (button, id) => {
    var projectInfo = document.getElementById(id);
    if (projectInfo.classList.contains("project-info-shown")) {
        projectInfo.classList.remove("project-info-shown");
        button.innerHTML = "+";
    } else {
        projectInfo.classList.add("project-info-shown");
        button.innerHTML = "-";
    };
};