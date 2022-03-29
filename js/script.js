// creating navbar fixed
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
         
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
          
         
        } 
    });
  }); 