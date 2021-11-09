window.onclick = function(event) {

if (!event.target.matches('.abc')) {

  var openDropdown = document.getElementById("myDropdown");
  openDropdown.style.display = "none";
}

if (event.target == modal) {
  modal.style.display = "none";
}

if (!event.target.matches('.search') && !event.target.matches('.unsplash-input')) {
  document.getElementById("search").style.display = "none";
}
}


// function showSearch() {
// document.getElementById("search").style.display = "block";
// }
