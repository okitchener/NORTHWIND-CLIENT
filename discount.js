document.addEventListener("DOMContentLoaded", function() {
     document.getElementById('discount-row').addEventListener('click', function(e){
     if (e.target.classList.contains('discount')) {
      e.preventDefault();
      document.getElementById('product').innerHTML = e.target.dataset['product'];
        document.getElementById('title').innerHTML = e.target.dataset['title'];
        document.getElementById('discount').innerHTML = e.target.dataset['discount'];
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }  });
   
}); 
function closeToast() {
    var toast = document.getElementById("liveToast");
toast.className = toast.className.replace("show", "");
    }

document.addEventListener('keydown', function (e){
    if (e.key === 'Escape' || e.key === 'Esc') {
        closeToast();
    }
})