const menuIcon = document.getElementById("sidebar-icon");
const open = document.getElementById('sidebar')
menuIcon.addEventListener("click" , () => {
  open.classList.toggle("hidden");
})
