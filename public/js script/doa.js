const footer = document.getElementsByClassName('card-footer-doa');
const show = document.querySelectorAll('.show-more-descript');
const descript = document.querySelectorAll('.descript');
let isToggled = false;

for (let i = 0; i < descript.length; i++) {
  descript[i].style.display = 'none'; // Atur tampilan kontainer menjadi none secara default
  show[i].addEventListener('click', () => {
    show[i].style.cursor = 'pointer';
    

    if (isToggled) {
      show[i].textContent = 'Show More';
    } else {
      show[i].textContent = 'Hide';
    }

    isToggled = !isToggled;
;
    descript[i].style.display = (descript[i].style.display === 'none') ? 'block' : 'none'; // Ubah tampilan kontainer sesuai kebutuhan
  });
}


const sidebar = document.querySelector('.sidebar');
const sidebarIcon = document.querySelector('.sidebar-icon');
sidebarIcon.style.cursor='pointer';
sidebarIcon.addEventListener('click',() => {
sidebar.classList.toggle('move-left');
sidebarIcon.classList.toggle('icon-rotate');
});


