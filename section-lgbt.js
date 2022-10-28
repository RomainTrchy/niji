const allPanels = document.querySelectorAll(".visible-panel");
console.log(allPanels);

allPanels.forEach(element => {
  element.addEventListener("click", function () {
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

    const currentChoice = this.parentNode.parentNode.childNodes[3];

    if (this.src.includes("p")) {
      gasp.to(currentChoice, 0.5, {
        height: height,
        opacity: 1,
        ease: Power2.easeOut,
      });
      // } else if (this.src.includes("h2")) {
      //   gasp.to(currentChoice, 0.5, {
      //     height: 0,
      //     opacity: 0,
      //     ease: Power2.easeOut,
      //   });
    }
  });
});
