//Adds the required CSS
function addCSS(Filename) {
    var head = document.head;
    var link = document.createElement("style");

    link.innerHTML = "@import url('" + Filename + "')";
    head.appendChild(link);
    console.log("Loaded defaultElements v0.01. A css/js");
}
addCSS("./defaultElements/defaultElements.css");

//Adds the placeholder text to thininput
function addPlaceholderThininput() {
    var thinInputs = document.getElementsByClassName("de-thintextinput");
    for (var i = 0; i < thinInputs.length; i++) {
        thinInputs[i].value = "";

        thinInputs[i].parentElement.classList.add("position-relative");

        var placeholderElement = document.createElement("a");
        placeholderElement.classList.add("de-thintextinput-placeholder");
        placeholderElement.classList.add("de-opensans");
        placeholderElement.appendChild(
            document.createTextNode(
                thinInputs[i].getAttribute("placeholderText")
            )
        );

        thinInputs[i].parentElement.appendChild(placeholderElement);

        thinInputs[i].addEventListener("focus", function() {
            this.nextElementSibling.classList.add(
                "de-thintextinput-placeholder-higher"
            );
        });
        thinInputs[i].addEventListener("blur", function() {
            if (this.value == "") {
                this.nextElementSibling.classList.remove(
                    "de-thintextinput-placeholder-higher"
                );
            }
        });
    }
}
addPlaceholderThininput();
