const allCross = document.querySelectorAll('.visible-panel');
console.log(allCross);

allCross.forEach((element) => {
    element.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];
        gsap.to(currentChoice, {duration: 0.5, height: height + 40, opacity: 1,padding: '20px 0px 20px 0px', ease: 'power2.out'});
        }
    )
})
