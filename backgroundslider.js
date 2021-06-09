var body = document.body
var slides = document.querySelectorAll('.slide')
var leftBtn = document.getElementById('left')
var rightBtn = document.getElementById('right')

let activeSlide = 0


rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length - 1)
    {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0)
    {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slide => 
        slide.classList.remove('active')
    )

    slides[activeSlide].classList.add('active')
}
