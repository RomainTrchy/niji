let marquee = document.querySelectorAll(".clipped-text");

addEventListener("load", function () {
  marquee.forEach((el) => {
    let rate = 200;
    let style = window.getComputedStyle(el);
    let marginRight = parseInt(style.marginRight) || 0;
    let totalDistance = el.clientWidth + marginRight;
    let time = totalDistance / rate;
    let container = el.parentElement;
    gsap.to(container, time, {
      repeat: -1,
      x: "-" + totalDistance,
      ease: Linear.easeNone,
    });
    let clone = el.cloneNode(true);
    clone.classList.add("clone");
    container.appendChild(clone);
  });
});
