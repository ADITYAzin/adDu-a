const itemsNumber = document.querySelectorAll('.items-number');


// File JavaScript (main.js)
var xhr = new XMLHttpRequest();
xhr.open('GET', 'boxCI', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    eval(xhr.responseText);
    console.log("Array Length: " + myArray.length);
  }
};
xhr.send();

function countItemsBox(){
    for (let i = 0; i < itemsNumber.length; i++){
    itemsNumber[0].innerHTML = `${CatatanIslamBox[i].length}`;
    }
}