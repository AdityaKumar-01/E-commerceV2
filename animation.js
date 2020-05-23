$(document).ready(function(){
    $('.CAROUSEL').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
    $(".signUp-form").hide();
    $(".signIn").css("color","#F77F00");
    $(".signIn").on("click",function(){
      $(".signUp-form").hide();
      $(".signIn-form").show();
      $(".signUp").css("color", "black");
      $(".signIn").css("color", "#F77F00");
    });
    
    $(".signUp").on("click",function(){
      $(".signUp-form").show();
      $(".signIn-form").hide();
      $(".signUp").css("color", "#F77F00");
      $(".signIn").css("color", "black");
    });
    
    $(".button").on("click",function(){
      $(".input").val("");
    });
    const carouselSlide= document.querySelector(".carousel-slide");
const carouselImages= document.querySelectorAll(".carousel-slide img");
const prevBtn=document.querySelector("#prev-btn");
const nextBtn=document.querySelector("#next-btn");

let counter = 1;
const size=carouselImages[0].clientWidth;

carouselSlide.style.transform="translateX("+(-size*counter)+"px)";

nextBtn.addEventListener("click", function(){
    if(counter>=carouselImages.length-1) return ;
    carouselSlide.style.transition="transform 1s ease-in-out";
    counter++;
    carouselSlide.style.transform="translateX("+(-size*counter)+"px)";
});

prevBtn.addEventListener("click", function(){
    if(counter<=0) return ;
    carouselSlide.style.transition="transform 1s ease-in-out";
    counter--;
    carouselSlide.style.transform="translateX("+(-size*counter)+"px)";
});

carouselSlide.addEventListener("transitionend",function(){
    console.log(carouselImages[counter]);
    if(carouselImages[counter].id=="lastClone"){
        carouselSlide.style.transition="none";
        counter=carouselImages.length-2;
        carouselSlide.style.transform="translateX("+(-size*counter)+"px)";   
    }
    if(carouselImages[counter].id=="firstClone"){
        carouselSlide.style.transition="none";
        counter=carouselImages.length-counter;
        carouselSlide.style.transform="translateX("+(-size*counter)+"px)";   
    }
});
});

