async function loadNavigation() {
    const response = await fetch("/navigation.html");
    const navigation = await response.text();

    document.querySelector("#navigation").innerHTML = navigation;

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    const currentPage = window.location.pathname;

    const pageLinks = {
        "/": "nav-home",
        "/index.html": "nav-home",
        "/pages/projects.html": "nav-projects",
        "/pages/events.html": "nav-events",
        "/pages/about.html": "nav-about",
        "/pages/members.html": "nav-members",
        "/pages/blog.html": "nav-blog",
        "/pages/contact.html": "nav-contact"
    };

    const activeLink = document.getElementById(pageLinks[currentPage]);

    if (activeLink) {
        activeLink.classList.add("active");
    }
}

loadNavigation();