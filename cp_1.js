let form = document.getElementById("inputForm");

let commentsBox = document.getElementById("comments");
let charCount = document.getElementById("char-count");

commentsBox.addEventListener("input", function() {
    charCount.textContent = commentsBox.value.length + "characters";
});

let nameField = document.getElementById("name");
let emailField = document.getElementById("email");

nameField.addEventListener("mouseover", function() {
    charCount.textContent = "Enter your full name";
});

nameField.addEventListener("mouseout", function() {
    charCount.textContent = commentsBox.value.length + " characters";
});

emailField.addEventListener("mouseover", function() {
    charCount.textContent = "Enter a valid email address";
});

emailField.addEventListener("mouseout", function() {
    charCount.textContent = commentsBox.value.length + " characters";
});

form.addEventListener("submit", function(event) {

    event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let comments = document.getElementById("comments").value;

if (name === "" || email === "" || comments === "") {
    charCount.textContent = "Please fill in all fields";
    return;
}

let entry = document.createElement("p");
entry.textContent = name + " (" + email + "): " + comments;

document.getElementById("feedback-display").appendChild(entry);
});

document.getElementById("feedback-display").addEventListener("click", function(event) {
    event.stopPropagation();
});