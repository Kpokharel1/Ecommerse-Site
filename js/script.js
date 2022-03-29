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
  // Increment decrement button
  let counter = 1;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.value = get();
});

dec.addEventListener("click", () => {
  if (input.value > 0) {
    decrement();
  }
  input.value = get();
});
