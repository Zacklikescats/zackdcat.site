document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query")?.toLowerCase() || "";

    const sites = document.querySelectorAll(".sites a");
    sites.forEach(site => {
        const text = site.textContent.toLowerCase();
        site.style.display = text.includes(query) ? "block" : "none";
    });
});