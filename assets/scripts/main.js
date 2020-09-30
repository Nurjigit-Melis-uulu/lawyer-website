let nav = document.querySelector(".nav_wrapper"),
  mobileNav = document.querySelector("nav.mobile"),
  menu = document.querySelector(".toggle_menu"),
  menu_open = false,
  backdrop = document.querySelector(".backdrop"),
  anchors = document.querySelectorAll(".anchor");

menu.addEventListener("click", () => {
  menu_open = !menu_open;
  menu_toggle();
});

backdrop.addEventListener("click", () => {
  menu_open = false;
  menu_toggle();
});

function menu_toggle() {
  if (window.innerWidth < 769) {
    if (menu_open) {
      mobileNav.style.height = "100%";
      nav.style.backgroundColor = "#1B2131";
      nav.style.boxShadow = "0 0 6px rgba(0,0,0,.5)";
      backdrop.style.display = "block";
    } else {
      mobileNav.style.height = "0";
      nav.style.backgroundColor = "transparent";
      nav.style.boxShadow = "none";
      backdrop.style.display = "none";
    }
  }
}

window.addEventListener("scroll", () => {
  if (document.documentElement.getBoundingClientRect().top < 0) {
    nav.style.backgroundColor = "#1B2131";
    nav.style.boxShadow = "0 0 6px rgba(0,0,0,.5)";
  } else if (document.documentElement.getBoundingClientRect().top === 0) {
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
  }
});

for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    if (anchor.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    menu_open = false;
    menu_toggle();
  });
}
