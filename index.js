// Scroll to top function
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Add smooth scrolling animation
  });
}
