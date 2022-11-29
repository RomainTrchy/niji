let marquee = document.querySelectorAll(".clipped-text");

addEventListener("load", function () {
  marquee.forEach((el) => {
    let rate = 200;
    let style = window.getComputedStyle(el);
    let marginRight = parseInt(style.marginRight) || 0;
    let totalDistance = el.clientWidth + marginRight;
    let time = totalDistance / rate;
    let container = document.querySelector(".marquee");

    gsap.to(container, time, {
      repeat: -1,
      xPercent: (-totalDistance / container.clientWidth) * 100,
      ease: Linear.easeNone,
    });

    let clone = el.cloneNode(true);
    clone.classList.add("clone");
    container.appendChild(clone);
  });
});
