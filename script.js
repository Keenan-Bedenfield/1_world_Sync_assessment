//Place JS below

// clicked button text change


function toggleText() {
    var button = document.getElementById("myButton");
    if (button.innerText === "Click me") {
        button.innerText = "Button Clicked";
    } else {
        button.innerText = "Click me";
    }
}
