document.addEventListener("DOMContentLoaded", function() {
  console.log("hello world!");
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });
//Randomize attention seeker upon page load
    const randomizer = document.querySelector('.randomizer');
    const animations = ['animate__bounce', 'animate__flash', 'animate__pulse', 'animate__rubberBand', 'animate__shakeX', 'animate__headShake', 'animate__swing', 'animate__tada', 'animate__wobble', 'animate__jello'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    randomizer.classList.add(randomAnimation);
    // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
       elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });
});