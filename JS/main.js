function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


const mySidebar = document.getElementById('mySidebar');

if (window.matchMedia("(max-width: 999px)").matches) {
mySidebar.onclick = function(){
    closeNav(); 
  }
}


