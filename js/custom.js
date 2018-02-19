
$(document).ready(function(){

$('.hover').hover(function(){
    var value=$(this).attr('data-src');
    $('#cord-cover').attr('src', value).toggleClass('fade-in');
});

$('a.learn').click(function() {
    $('html, body').animate({
      scrollTop: $("#colors").offset().top
    }, 1000)
  })
});