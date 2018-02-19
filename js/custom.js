
$(document).ready(function(){

$('.hover').hover(function(){
    var value=$(this).attr('data-src');
    $('#cord-cover').attr('src', value).toggleClass('fade-in');
});

});