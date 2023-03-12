const navBtn = document.querySelector(".nav__btn"),
  nav = document.querySelector(".nav"),
  scrollLinks = document.querySelectorAll(".nav__link"),
  navList = document.querySelector(".nav__list");

navBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href").slice(1);
    const sectionEl = document.getElementById(href);
    sectionEl.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// CLOSING NAV IF IT'S OUT OF VIEW
let callback = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
  });
};

let observer = new IntersectionObserver(callback);
observer.observe(navList);
