function removeClass(){  
  headerUserButton.className = headerUserButton.className.replace(new RegExp('(?:^|\\s)loading(?!\\S)'), '');
}

var headerUserButton = document.getElementById('headeruser[submit]');

headerUserButton.addEventListener("click", function() {
  headerUserButton.className = headerUserButton.className + ' loading';
  setTimeout(removeClass, 2000);
}, false);