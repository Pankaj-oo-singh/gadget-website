burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
listele=document.querySelector('.listele');

rightnav=document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    listele.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

