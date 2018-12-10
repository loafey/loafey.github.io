//Adds the required CSS
/**
 * Loads a CSS file by adding a <style> with an import to the head
 * @param  {[string]} Filename The wanted CSS file. May be local or from a url.
 */
function addCSS(Filename) {
    var head = document.head;
    var link = document.createElement("style");

    link.innerHTML = "@import url('" + Filename + "')";
    head.appendChild(link);
    console.log("Loaded " + Filename);
}
addCSS("./defaultElements/defaultElements.css");

//Adds the placeholder text to thininput
/**
 * Adds the placeholder text to elements with the class de-thintextinput.
 * These elements needs to have the attribute "placeholderText"!
 *
 * Example: <input class="de-thintextinput de-opensans" placeholderText="Thin text input" />
 */
function addPlaceholderThininput() {
    var thinInputs = document.getElementsByClassName("de-thintextinput");
    for (var i = 0; i < thinInputs.length; i++) {

        wrapDE(thinInputs[i], document.createElement("span"));
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

        thinInputs[i].addEventListener("focus", function () {
            this.nextElementSibling.classList.add(
                "de-thintextinput-placeholder-higher"
            );
        });
        thinInputs[i].addEventListener("blur", function () {
            if (this.value == "") {
                this.nextElementSibling.classList.remove(
                    "de-thintextinput-placeholder-higher"
                );
            }
        });
    }
}
addPlaceholderThininput();

//Add a parent element
/**
 * Wraps the selected element with a selected parent element.
 * @param  {[Element]} element The element to be wrapped, can be selected using "document.getElementById" etc.
 * @param {[string]} newParent The type of element to wrap the element with. For example "div" or "span".
 * @return {[type]} The selected element is now wrapped inside new parent
 */
function wrapDE(element, newParent) {
    var childElement = element;
    var newParentPlaced = childElement.parentNode.insertBefore(newParent, childElement.nextSibling);
    childElement.parentNode.removeChild(childElement);
    newParentPlaced.appendChild(childElement);
}

//Create a toast message
var toastNumber = 0;

function toast(Message, DisplayDuration) {
    var toastBox = document.getElementById("toast-box");

    var toastContainer = document.createElement("div");
    toastContainer.id = "toast" + String(toastNumber);
    toastContainer.classList.add("toast-container", "toast-container-appearing");
    setTimeout(function () {
        toastContainer.classList.remove("toast-container-appearing")
    }, 100);

    var toastText = document.createElement("p");
    toastText.innerText = Message;
    toastText.classList.add("toast-text");

    var toastExit = document.createElement("p");
    toastExit.innerText = "X";
    var clickAtribute = "removeToast('toast' + String(" + toastNumber + "))";
    toastExit.setAttribute("onclick", clickAtribute);
    toastExit.classList.add("toast-exit");

    toastBox.append(toastContainer);
    toastContainer.append(toastText);
    toastContainer.append(toastExit);

    var tempToastNumber = toastNumber;

    if (DisplayDuration == null) {
        setTimeout(function () {
            removeToast("toast" + String(tempToastNumber));
        }, 5000)
    } else {
        setTimeout(function () {
            removeToast("toast" + String(tempToastNumber));
        }, DisplayDuration * 1000);
    }

    function removeToast(selectedToast) {
        setTimeout(function () {
            document.getElementById(selectedToast).remove();
        }, (DisplayDuration * 1000) + 1000)
        document.getElementById(selectedToast).classList.add("toast-container-appearing");
    }

    toastNumber += 1;
}

function removeToast(selectedToast) {
    setTimeout(function () {
        document.getElementById(selectedToast).remove();
    }, 1000)
    document.getElementById(selectedToast).classList.add("toast-container-appearing");
}


function toastBox() {
    var toastBoxElement = document.createElement("div");
    toastBoxElement.classList.add("toast-box");
    toastBoxElement.id = "toast-box";
    document.body.append(toastBoxElement);
}
toastBox();