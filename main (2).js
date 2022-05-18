
// common scrool reveal option to create reveal animation

 ScrollReveal({
     reset: true,
     distance: '60px',
     duration: 2500,
     delay: 100
});

// target

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02' , {delay: 500,origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn' ,{delay: 600,origin: 'right' });
ScrollReveal().reveal('.home .info .btn', {delay: 700,origin: 'bottom'});
ScrollReveal().reveal('.media-icon i, .contact-left li' ,  { delay: 500,origin: 'left',interval: 200 });
ScrollReveal().reveal('.home-img , .about-img', {delay: 500,origin: 'bottom'});
ScrollReveal().reveal('.about .discription, .contact-right', {delay: 600,origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', {delay: 500,origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', {delay: 700,origin: 'left'});
ScrollReveal().reveal('.exprience-card, .service-card , .education, .portfolio .img-card', {delay: 800,origin: 'bottom', interval: 200});
ScrollReveal().reveal('footer .group ', {delay: 500,origin: 'top', interval: 200});



//Navigation bar effect on Scroll
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky,window.scrolly>0")
});

//Services section -Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtns,i) => {
    learnmoreBtns.addEventListener("click",()=>{
        modal(i);
    });

});

//Website dark/light theme
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click",() =>{
      document.body.classList.toggle("dark-theme");
      themeBtn.classList.toggle("sun");

      localStorage.setItem("saved-theme" ,getCurrentTheme());
      localStorage.setItem("saved-theme" ,getCurrentIcon());
     
  });

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark"  : "light" ;
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun"  :"moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark " ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


  //scroll to top button
  const scrollTopBtn = document.querySelector(".scrollToTop-btn");
  window.addEventListener("scroll",function(){
      scrollTopBtn.classList.toggle("active", window.scrollY > 500);
  });

  scrollTopBtn.addEventListener("click",()  => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

  });
modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () =>{
        serviceModals.forEach((modalView) =>{
            modalView.classList.remove("active");
        });
    });
});


var swiper = new Swiper(".client-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }); 



      
// portfolio section 
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn");

var portfoliomodal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((learnmoreBtns,i) => {
    imgCards.addEventListener("click",()=>{
        portfolioModal(i);
    });

});

portfolioCloseBtns.forEach((portfolioCloseBtns) => {
    portfolioCloseBtns.addEventListener("click", () =>{
        portfolioModals.forEach((portfolioModalView) =>{
           potfolioModalView.classList.remove("active");
        });
    });
});


// common scrool reveal option to create reveal animation

 ScrollReveal({
     reset: true,
     distance: '60px',
     duration: 2500,
     delay: 100
});

// target

ScrollReveal().reveal('.home .info h2', {delay: 500,origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p', {delay: 600,origin: 'right' });
ScrollReveal().reveal('.home .info .btn', {delay: 700,origin: 'bottom'});

