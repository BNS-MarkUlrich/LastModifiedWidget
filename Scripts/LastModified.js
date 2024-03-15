(function() {
    // Create the widget container
    var container = document.createElement('div');
    container.id = 'lastModifiedWidget';
    container.innerHTML = 'This page was last modified on: <span id="lastModified"></span>';

    // Append the container to the body or another predetermined element
    document.body.appendChild(container);

    // Your existing logic to set the last modified date
    var lastModified = document.lastModified;
    var formattedLastModified = new Date(lastModified).toLocaleString();
    document.getElementById('lastModified').textContent = formattedLastModified;
})();