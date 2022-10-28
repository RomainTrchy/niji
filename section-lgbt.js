// const allCross = document.querySelectorAll(".visible-panel img");
// console.log(allCross);

// allCross.forEach((element) => {
//   element.addEventListener("mouseenter", function () {
//     const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

//     const currentChoice = this.parentNode.parentNode.childNodes[3];

//     // console.log(this.src);
//     if (this.src.includes("plus")) {
//       this.src = "images/minus.png";
//       gsap.to(currentChoice, {
//         duration: 0.2,
//         height: height + 40,
//         opacity: 1,
//         padding: "20px 15px",
//       });
//     } else if (this.src.includes("minus")) {
//       this.src = "images/plus.png";
//       gsap.to(currentChoice, {
//         duration: 0.2,
//         height: 0,
//         opacity: 0,
//         padding: "0px 15px",
//       });
//     }
//   });
// });

const allPanels = document.querySelectorAll(".visible-panel");
console.log(allPanels);

allPanels.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    const height = this.parentNode.childNodes[1].scrollHeight;
    const currentChoice = document.querySelector(".toggle-panel");
    gsap.to(currentChoice, {
      duration: 0.2,
      height: height + 40,  
      opacity: 1,
      padding: "20px 15px",
    });
  });

  element.addEventListener("mouseout", function () {
    const height = document.querySelectorAll(".toggle-panel").scrollHeight;
    const currentChoice = document.querySelectorAll(".toggle-panel");
    gsap.to(currentChoice, {
      duration: 0.2,
      height: 0,
      opacity: 0,
      padding: "0px 15px",
    });
  });
});
