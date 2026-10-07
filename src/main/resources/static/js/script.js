console.log("MiniCollege JavaScript loaded");


/* LOGIN */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        const errorMessage =
            document.getElementById("errorMessage");


        if (
            username === "student" &&
            password === "student123"
        ) {

            window.location.href =
                "/dashboard.html";

        } else {

            errorMessage.textContent =
                "Invalid username or password!";

        }

    });

}