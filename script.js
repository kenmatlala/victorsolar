function toggleMenu(button) {
    button.classList.toggle('opened');
    const navbarNav = document.getElementById('navbarNav'); // Get the navigation menu element
    if (navbarNav) {
        navbarNav.classList.toggle('show'); // Toggle the "show" class on the navigation menu
    }
}

// Add an event listener to the custom SVG button for menu toggling
document.querySelector(".navbar-toggler").addEventListener("click", function () {
    var navbarNav = document.getElementById("navbarNav");
    if (navbarNav.classList.contains("show")) {
        navbarNav.classList.remove("show");
    } else {
        navbarNav.classList.add("show");
    }
});
