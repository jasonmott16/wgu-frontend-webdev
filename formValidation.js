let confirmEmailValid = false;
let emailField = document.querySelector("#email");


let confirmEmailField = document.querySelector("#cemail");
confirmEmailField.addEventListener("input",checkEmail);

function checkEmail() {
    if(confirmEmailField.value.trim() == emailField.value.trim()) {
        confirmEmailField.style.backgroundColor = "initial";
        console.log(emailField.value.trim());
        console.log(`confirm email is `+confirmEmailField.value.trim());
    }
    else {
        confirmEmailField.style.backgroundColor = "orange";
        console.log(emailField.value.trim());
        console.log(confirmEmailValid);

    }

}