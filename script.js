const sevenPage =document.getElementById("seven-page"),
      fourthPage =document.getElementById("fourth-page"),
      firstPage = document.querySelector(".first-page"),
      secondPage= document.querySelector(".second-page"),
      thirdPage =document.querySelector(".third-page"),
      fifthPage=document.querySelector(".fifth-page"),
      sixthPage =document.querySelector(".sixth-page"),
      eighPage=document.querySelector(".eight-page"),
      ninePage=document.querySelector(".nine-page"),
      tenPage=document.querySelector(".ten-page"),
      aboutPage=document.querySelector("#about-page"),
      homePage=document.querySelector("#home-page"),
      home=document.getElementById("home"),
      about=document.getElementById("about"),
      services=document.getElementById("services"),
      invest=document.getElementById("invest"),
      migration=document.getElementById("migration"),
      contact=document.getElementById("contact"),
      investPage=document.getElementById("invest-page"),
      names=document.getElementById("name"),
      subject=document.getElementById("subject"),
      email=document.getElementById("email"),
      phone=document.getElementById("phone"),
      p1=document.getElementById("p1"),
      p2=document.getElementById("p2"),
      p3=document.getElementById("p3"),
      p4=document.getElementById("p4"),
      check=document.getElementById("check"),
      form=document.getElementById("form"),
      close=document.getElementById("close")
      submit=document.getElementById("submit"),
      migrationPage=document.getElementById("migration-page");
const regax=/^[A-Za-z]{3,20}$/;
const emailRegx=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const  phoneRegx=/^[0-9\-\+]{9,15}$/;
services.addEventListener("click",()=>{
    firstPage.style.display="none";
    secondPage.style.display="none";
    thirdPage.style.display="none";
    fifthPage.style.display="none";
    sixthPage.style.display="none";
    sevenPage.style.display="none";
    eighPage.style.display="none";
    ninePage.style.display="none";
    fourthPage.style.display="block";
    aboutPage.style.display="none";
    homePage.style.display="block";
    migrationPage.style.display="none";

});
contact.addEventListener("click",()=>{
    firstPage.style.display="none";
    secondPage.style.display="none";
    thirdPage.style.display="none";
    fifthPage.style.display="none";
    sixthPage.style.display="none";
    fourthPage.style.display="none";
    eighPage.style.display="none";
    ninePage.style.display="none";
    sevenPage.style.display="block";
    sevenPage.style.paddingTop="100px";
    aboutPage.style.display="none";
    homePage.style.display="block";
    migrationPage.style.display="none";
});
home.addEventListener("click",()=>{
    window.scrollTo(0, 0)
    firstPage.style.display="block";
    secondPage.style.display="block";
    thirdPage.style.display="block";
    fifthPage.style.display="block";
    sixthPage.style.display="block";
    fourthPage.style.display="block";
    eighPage.style.display="block";
    ninePage.style.display="block";
    sevenPage.style.display="block";
    aboutPage.style.display="none";
    homePage.style.display="block";
    investPage.style.display="none";
    migrationPage.style.display="none";
});
about.addEventListener("click",()=>{
    aboutPage.style.display="block";
    homePage.style.display="none";
    migrationPage.style.display="none";
});
invest.addEventListener("click",()=>{
    homePage.style.display="none";
    investPage.style.display="block";
    migrationPage.style.display="none";

});
migration.addEventListener("click",()=>{
    homePage.style.display="none";
    migrationPage.style.display="block";
    investPage.style.display="none"
});
btn.addEventListener("click",()=>{
    firstPage.style.display="none";
    secondPage.style.display="none";
    thirdPage.style.display="none";
    fifthPage.style.display="none";
    sixthPage.style.display="none";
    fourthPage.style.display="none";
    eighPage.style.display="none";
    ninePage.style.display="none";
    sevenPage.style.display="block";
    sevenPage.style.paddingTop="100px";
    aboutPage.style.display="none";
    homePage.style.display="block";
    migrationPage.style.display="none";
})
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  form.addEventListener('click',(a)=>{
    a.preventDefault();
        submit.addEventListener('click',()=>{
    if(regax.test(names.value)){
        p1.style.visibility='hidden';
    } else{
        p1.style.visibility='visible';
        console.log('xato');
    }
});
  });
  form.addEventListener('click',(a)=>{
    a.preventDefault();
        submit.addEventListener('click',()=>{
    if(regax.test(names.value)){
        p1.style.visibility='hidden';
    } else{
        p1.style.visibility='visible';
        console.log('xato');
    }
    if(regax.test(subject.value)){
        p2.style.visibility='hidden';
    } else{
        p2.style.visibility='visible';
        console.log('xato');
    }
    if(emailRegx.test(email.value)){
        p3.style.visibility='hidden';
    } else{
        p3.style.visibility='visible';
        console.log('xato');
    }
    if(phoneRegx.test(phone.value)){
        p4.style.visibility='hidden';
    } else{
        p4.style.visibility='visible';
        console.log('xato');
    }
});
});
check.addEventListener("click",()=>{
    check.style.background="#fff";
    close.style.display="block";
});
close.addEventListener("click",()=>{
    check.style.background="transparent";
    close.style.display="none";
})
  

