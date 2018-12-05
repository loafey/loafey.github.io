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
    console.log("Loaded defaultElements v0.01. A css/js");
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