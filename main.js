const scrollBar = document.querySelector(".status");

const statusBar = () => {
  currentScroll = Math.round(
    (window.scrollY /
      (document.documentElement.offsetHeight - window.innerHeight)) *
      100
  );
  scrollBar.style.width = currentScroll + "%";
};

window.addEventListener("scroll", statusBar);
