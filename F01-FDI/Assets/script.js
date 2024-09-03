let prev = document.getElementById('prev');
let next = document.getElementById('next');


var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 5){
        counter = 1;
      }
    }, 5000);

prev.onclick = function() {
  console.log("prev");
}

next.onclick = function() {
  console.log("next");
}