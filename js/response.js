burger = document.querySelector('.burger')
navBar = document.querySelector('.navBar')
navList = document.querySelector('.navList')

burger.addEventListener('click',()=>{
    navList.classList.toggle('visibility-class-resp');
    navBar.classList.toggle('height-nav-resp');


})