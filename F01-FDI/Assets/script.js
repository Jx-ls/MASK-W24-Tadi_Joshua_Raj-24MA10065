let prev = document.getElementById('prev');
let next = document.getElementById('next');


var counter = 1;
    var slideshow = setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 5){
        counter = 1;
      }
    }, 5000);

prev.onclick = function() {
  console.log("prev");
  document.getElementById('radio' + counter).checked = true;
  counter--;
  if(counter < 1) {
    counter = 5;
  }
  clearInterval(slideshow);
  slideshow = setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 5){
        counter = 1;
      }
    }, 5000);
}

next.onclick = function() {
  console.log("next");
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5) {
    counter = 1;
  }
  clearInterval(slideshow);
  slideshow = setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 5){
        counter = 1;
      }
    }, 5000);
}