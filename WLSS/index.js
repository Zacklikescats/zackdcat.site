document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector(".INPT");

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const query = input.value.trim();
            if(query) {
                window.location.href = "Results.html?query=" + encodeURIComponent(query);
            }
        }
    });
});
