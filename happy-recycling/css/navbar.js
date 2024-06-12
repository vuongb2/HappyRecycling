const hamburger = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})

document.querySelectorAll(".navbar-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbarLinks.classList.remove("active");
}))



//UNDERLINE

const navbarUnderline = document.querySelector(".page-link");

// Function to handle link click
function handleLinkClick(event) {
const clickedLink = event.target.closest("a");
if (clickedLink) {
    // Remove the "underlined" class from all links
    navbarUnderline.querySelectorAll("a").forEach(link => link.classList.remove("underlined"));

    // Add the "underlined" class to the clicked link
    clickedLink.classList.add("underlined");
}
}

// Add click event listener to the parent ul element
navbarUnderline.addEventListener("click", handleLinkClick);

