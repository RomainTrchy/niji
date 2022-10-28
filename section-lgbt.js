const allPanels = document.querySelectorAll(".visible-panel");
console.log(allPanels);

allPanels.forEach(element => {
  console.log(element);
  element.addEventListener("mouseenter", function () {
    const height = this.parentNode.childNodes[1].scrollHeight;
    const currentChoice = this.parentNode.childNodes[1];
    gsap.to(currentChoice, {
      duration: 0.2,
      height: height + 40,
      opacity: 1,
      padding: "20px 15px",
    });
  });

  element.addEventListener("mouseout", function () {
    const currentChoice = this.parentNode.childNodes[1];
    gsap.to(currentChoice, {
      duration: 0.2,
      height: 0,
      opacity: 0,
      padding: "0px 15px",
    });
  });
});