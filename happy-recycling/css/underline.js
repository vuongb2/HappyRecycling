const pageLinks = document.querySelectorAll('.page-link');

// Loop through the links and add a click event listener
pageLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove the active class from all links
        pageLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add the active class to the clicked link
        this.classList.add('active');
    });
});