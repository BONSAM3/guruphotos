const navToggle = document.querySelector(".nav-toggle");

const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
    navToggle.innerHTML = `<i class="fa fa-bars"></i>`;
  } else {
    links.classList.add("show-links");
    navToggle.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
  }

  // socialicon.classList.toggle("show_links");
  // links.classList.toggle("show_links");
});
