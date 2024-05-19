const filterParent = document.getElementById('filterparent');
const ul = document.querySelector('#parentlist');
const li = ul.querySelectorAll('li');


filterParent.addEventListener('click', function(){
    ul.classList.toggle('hidden');
    filterParent.classList.toggle('ylw');
  });

li.forEach(function(li){
ul.appendChild(li);
li.style.border = '1px solid gray';
li.style.padding = '2px';

li.classList.add('hover:bg-gray-300');
li.classList.add('cursor-pointer');

});

const a = document.createElement('a'); // Membuat elemen <a>
a.setAttribute('href', 'https://www.instagram.com/accounts/login/');
a.textContent = 'Tautan ke Instagram'; // Menambahkan teks ke dalam tag <a>

li.appendChild(a); // Menambahkan elemen <a> ke dalam elemen <li>
ul.appendChild(li); // Menambahkan elemen <li> ke dalam elemen <ul>


const NiOlang = document.querySelectorAll('.ini');
const box = document.querySelectorAll('.card-body-box')[0];

for (let i = 0; i < NiOlang.length; i++){
  NiOlang[i].classList.add('ha');
}