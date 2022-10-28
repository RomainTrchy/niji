const allCross = document.querySelectorAll(".visible-panel");
console.log(allCross);

allCross.forEach((element) => {
  element.addEventListener("click", function () {
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
    const currentChoice = this.parentNode.parentNode.childNodes[3];
    if (this.src.includes("visible")) {
      gsap.to(currentChoice, {
        duration: 0.5,
        height: height + 40,
        opacity: 1,
        padding: "20px 15px",
        ease: "power2.out",
      });
    } else if (this.src.includes("toggle")) {
      gsap.to(currentChoice, {
        duration: 0.5,
        height: 0,
        opacity: 0,
        padding: 0,
        ease: "power2.out",
      });
    }
  });
});
