$(function(){
  let navBtn = document.querySelector('.nav-btn');
  let nav = document.querySelector('.nav');
  navBtn.addEventListener('click', function () {
    nav.classList.toggle('active');
    navBtn.classList.toggle('active');
  })
});