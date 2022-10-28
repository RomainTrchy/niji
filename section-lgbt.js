const togglePanel = document.querySelector(".toggle-panel");
const visiblePanel = document.querySelector(".visible-panel");

visiblePanel.addEventListener("click", () => {
  if (togglePanel.style.display === "none") {
    togglePanel.style.display = "block";
  } else {
    togglePanel.style.display = "none";
  }
});