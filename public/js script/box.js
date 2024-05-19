const cBox = document.querySelector('.content-box');
const love = cBox.querySelectorAll('.love');

love.forEach(function(lovee){
        lovee.addEventListener('click', () => {
        lovee.classList.toggle('text-red-500');
        lovee.classList.toggle('fa-solid');
    });

});