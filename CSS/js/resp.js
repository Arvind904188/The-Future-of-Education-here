burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('navList')
rightNav=document.querySelector('.rightNav')




burger.addEventListener('click',()=>){
    rightNav.classList.toggel('v-class-resp');
    navList.classList.toggel('v-class-resp');
    navbar.classList.toggel('h-nav-resp');

})
