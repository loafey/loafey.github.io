var githubUserLink = "https://api.github.com/users/samhamnam/repos";
var requestRepos = new XMLHttpRequest();
requestRepos.open("GET", githubUserLink);

requestRepos.responseType = "json";
requestRepos.send();
requestRepos.onload = function () {
    var repoInfo = requestRepos.response;
    createUserRepos(repoInfo);
};

function createUserRepos(jsonFile) {
    for (var repo in jsonFile) {
        if (jsonFile.hasOwnProperty(repo)) {
            var repoDiv = document.createElement("div");
            repoDiv.classList.add("repo-card");
            repoDiv.innerHTML = '<a class="repo-card-title" href="' + jsonFile[repo].html_url + '">' + jsonFile[repo].name + '</a><br/><br/><a>' + jsonFile[repo].description + '</a><a class="repo-card-language">' + jsonFile[repo].language + '</a><br/><br/><div><a><i class="fas fa-star"></i>' + jsonFile[repo].stargazers_count + '</a> <a> <i class="fas fa-eye"></i>' + jsonFile[repo].watchers_count + '</a></div>';
            document.getElementById("repos").appendChild(repoDiv);
        }
    }
}

function showHideUserRepos() {
    if (document.getElementById("repos").style.display == "none") {
        document.getElementById("repos").style.display = "inline";
        document.getElementById("hide-repos-button").innerHTML = "<i class='fas fa-arrow-up'></i>";
        document.getElementById("hide-repos-text").innerText = "My repos - hide repos";
    } else {
        document.getElementById("repos").style.display = "none";
        document.getElementById("hide-repos-button").innerHTML = "<i class='fas fa-arrow-down'></i>";
        document.getElementById("hide-repos-text").innerText = "My repos - show repos";
    };
}