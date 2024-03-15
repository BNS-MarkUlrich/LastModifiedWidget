document.addEventListener("DOMContentLoaded", function() {
    var lastModified = document.lastModified;
    // Format the lastModified string as needed
    var formattedLastModified = new Date(lastModified).toLocaleString();
    document.getElementById("lastModified").textContent = formattedLastModified;
});
