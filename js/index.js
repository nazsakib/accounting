const submitBtn = document
    .getElementById("btn")
    .addEventListener("click", function () {
        const emailInput = document.getElementById("email");
        const passInput = document.getElementById("pass");
        const emailInputText = emailInput.value;
        const passInputText = passInput.value;

        if (emailInputText === "hello@gmail.com" && passInputText === "hello") {
            submitBtn = location.href = "accounting.html";
        }

        emailInput.value = "";
        passInput.value = "";
    });
