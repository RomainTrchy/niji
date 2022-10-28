mousePanels();

function mousePanels() {
  const allPanels = document.querySelectorAll(".visible-panel");

  allPanels.forEach((element) => {
    element.addEventListener(
      "mouseover",
      function () {
        const height = this.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.childNodes[3];
        gsap.to(currentChoice, {
          duration: 0.2,
          height: height + 40,
          opacity: 1,
          padding: "20px 15px",
        });

        setTimeout(() => {
          gsap.to(currentChoice, {
            duration: 0.2,
            height: 0,
            opacity: 0,
            padding: "0px 15px",
          });
        }, 500);
      },
      false
    );

    // element.addEventListener("mouseout", function () {
    //   const currentChoice = this.parentNode.childNodes[3];
    //   gsap.to(currentChoice, {
    //     duration: 0.2,
    //     height: 0,
    //     opacity: 0,
    //     padding: "0px 15px",
    //   });
    // });
  });
}
