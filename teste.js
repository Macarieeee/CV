document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const menuToggle = document.getElementById("menu-toggle");
    const body = document.body;
    const nav = document.querySelector(".navbar");
    const mobileMenu = document.querySelector(".mobile-menu");

    const navLinks = document.querySelectorAll(".nav-links a");
    const mobileNavLinks = document.querySelectorAll(".mobile-menu a");

    function setActiveLink(id) {
        navLinks.forEach(link => link.classList.remove("active"));
        mobileNavLinks.forEach(link => link.classList.remove("active"));
        document.getElementById(id)?.classList.add("active");
        document.getElementById(id + "-mobile")?.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setActiveLink(this.id);
        });
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener("click", function () {
            setActiveLink(this.id.replace("-mobile", ""));
            mobileMenu.classList.remove("show-menu");
        });
    });

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        nav.classList.toggle("dark-mode");
        mobileMenu.classList.toggle("dark-mode");
        themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("show-menu");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menuz");
    const burgerMenu = document.getElementById("burger-menuz");

    burgerMenu.addEventListener("click", () => {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
            burgerMenu.innerHTML = '<i data-lucide="menu"></i>';
        } else {
            menu.style.display = "flex";
            burgerMenu.innerHTML = '<i data-lucide="x">ma-ta</i>';
        }
        lucide.createIcons(); // Re-render icons
    });
});
