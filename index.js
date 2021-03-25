
//Slider

const slides = document.querySelectorAll('.slide');
console.log(slides[0]);
const next  = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const timeInt = 5000;
let slideInt;

const nextSlide = ()=>{
    //Get Current Class
    const current = document.querySelector('.current');
    //Remove Current Class
    current.classList.remove('current');
    //Check for next slide
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }
    else{
        slides[0].classList.add('current');
    }

    setTimeout(()=>current.classList.remove('current'),2000);
};

const prevSlide = ()=>{
    //Get Current Class
    const current = document.querySelector('.current');
    //Remove Current Class
    current.classList.remove('current');
    //Check for previous slide
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }
    else{
        slides[slides.length-1].classList.add('current');
    }

    setTimeout(()=>current.classList.remove('current'),2000);
};

//Button Events
next.addEventListener('click', e=>{
    nextSlide();
    if(auto){
        clearInterval(slideInt);
        slideInt = setInterval(nextSlide,timeInt);
    }
})

prev.addEventListener('click', e =>{
    prevSlide();
    if(auto){
        clearInterval(slideInt);
        slideInt = setInterval(nextSlide,timeInt);
    }
})

//auto slide
if(auto){
    //Run slide at time interval
    slideInt = setInterval(nextSlide, timeInt)
}