mousePanels();

var body = document.body,timer;
window.addEventListener('scroll', function() {
   clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
   timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },500);
}, false);

function mousePanels() {
  const allPanels = document.querySelectorAll(".visible-panel");

  allPanels.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      const height = this.parentNode.childNodes[3].scrollHeight;
      const currentChoice = this.parentNode.childNodes[3];
      gsap.to(currentChoice, {
        duration: 0.2,
        height: height + 40,
        opacity: 1,
        padding: "20px 15px",
      });
    });

    element.addEventListener("mouseout", function () {
      const currentChoice = this.parentNode.childNodes[3];
      gsap.to(currentChoice, {
        duration: 0.2,
        height: 0,
        opacity: 0,
        padding: "0px 15px",
      });
    });
  });
}
