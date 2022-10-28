// Create a function which makes the toggle-panel div visible when click on the visible-panel div and hide it when click on the visible-panel div again

const togglePanel = document.querySelector('.toggle-panel');
const visiblePanel = document.querySelector('.visible-panel');

visiblePanel.addEventListener('click', () => {
  togglePanel.classList.toggle('visible');
});

