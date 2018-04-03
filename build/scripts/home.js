window.onload = function() { document.body.className = ''; }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }

$(document).ready(function(){

  // open modal
  $('.email').on('touch click', function(){
    $('.emial').trigger('click');
  });

  // close modal
  $('a.close-reveal-modal').trigger('click');
});
