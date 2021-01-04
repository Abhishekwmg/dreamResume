const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', function(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
})

closeMenu.addEventListener('click', function(){
    mainMenu.style.top = "-100%";
})