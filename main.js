var githubUserLink = "https://api.github.com/users/samhamnam";
var request = new XMLHttpRequest();

var debugJson = true;

if (debugJson != true) {
    request.open("GET", githubUserLink);
} else {
    request.open("GET", "./temporary_info.json");
    console.log("Loaded temporary json file");
}
request.responseType = "json";
request.send();
request.onload = function () {
    var accountInfo = request.response;
    populateAccountInfo(accountInfo);
};

function populateAccountInfo(recievedJson) {
    document.getElementById("json-accountTitle").innerHTML = recievedJson.login;
    document.getElementById("json-accountImage").src = recievedJson.avatar_url;

    document.getElementById("json-followers").innerHTML = recievedJson.followers;
    document.getElementById("json-followers").href = "https://github.com/samhamnam?tab=followers";

    document.getElementById("json-name").innerHTML = recievedJson.name;
    document.title = recievedJson.name + "'s portfolio";

    if (recievedJson.company != null) {
        document.getElementById("json-company").innerHTML = recievedJson.company;
    } else {
        document.getElementById("json-company").innerHTML = "Not currently hired";
    }

    document.getElementById("json-blog").innerHTML = recievedJson.blog;
    document.getElementById("json-blog").href = recievedJson.blog;

    document.getElementById("json-location").innerHTML = recievedJson.location;

    if (recievedJson.email != null) {
        document.getElementById("json-email").innerHTML = recievedJson.email;
        document.getElementById("json-email").href = "mailto:" + recievedJson.email;
    } else {
        document.getElementById("json-email").innerHTML = "samuel.hammersberg@gmail.com";
        document.getElementById("json-email").href = "mailto:samuel.hammersberg@gmail.com";
    }

    document.getElementById("json-hireable").innerHTML = recievedJson.hireable;

    document.getElementById("json-bio").innerHTML = recievedJson.bio;

    document.getElementById("json-repos").innerHTML = recievedJson.public_repos;

    document.getElementById("json-gists").innerHTML = recievedJson.public_gists;
}