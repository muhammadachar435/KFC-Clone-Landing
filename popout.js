document.addEventListener("DOMContentLoaded", () => {
    const loginform = document.getElementById("form-login");
    const popup = document.getElementById("pop-up");
    const close = document.getElementById("close");

    if (loginform && popup && close) {
        loginform.addEventListener("submit", function(event) {
            event.preventDefault();
            popup.classList.remove("hidden"); // Show the popup
        });

        close.addEventListener("click", function() {
            popup.classList.add("hidden"); // Hide the popup
        });
    } else {
        console.error("One or more elements (form-login, pop-up, close) were not found.");
    }
});
