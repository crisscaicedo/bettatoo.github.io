document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.bg-img');
    const overlay = document.querySelector('.overlay');
    const formWrapper = document.querySelector('.form-wrapper');
    const form = document.querySelector('.subscribe-form');
    const successMsg = document.querySelector('.success-msg');
  
    img.addEventListener('click', function() {
      img.classList.add('left');
      overlay.style.opacity = 0.8;
      formWrapper.classList.add('active');
    });
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      // perform database operation to save subscription details
  
      form.style.display = 'none';
      successMsg.innerHTML = 'Thanks for Subscribing ' + name + '!!';
      successMsg.style.display = 'block';
  
      setTimeout(function() {
        successMsg.style.display = 'none';
        img.classList.remove('left');
        overlay.style.opacity = 0;
        form.style.display = 'block';
      }, 3000);
  
    });
  });
  
