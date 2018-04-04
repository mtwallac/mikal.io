window.onload = function() { document.body.className = ''; }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }

$(document).ready(function(){

  $("#myModal").iziModal({
    title: 'Contact Me',
    headerColor: '#5A2B74',
    background: null,
    borderBottom: false,
    theme: '',  // light
    icon: null,
    iconText: null,
    iconColor: '',
    rtl: false,
    width: '60%',
    top: '20vh',
    radius: 7,
    zindex: 999,
    focusInput: true,
    restoreDefaultContent: false,
    openFullscreen: false,
    closeOnEscape: true,
    closeButton: true,
    appendTo: 'body', // or false
    appendToOverlay: 'body', // or false
    overlay: true,
    overlayClose: false,
    overlayColor: 'rgba(0, 0, 0, 0.4)',
    transitionIn: 'bounceInDown',
    onFullscreen: function(){},
    onResize: function(){},
    onOpening: function(){},
    onOpened: function(){},
    onClosing: function(){},
    onClosed: function(){},
    afterRender: function(){}
  });

  // open modal
  $('.email').on('touch click', function(){
    $('#myModal').iziModal('open');
  });

});
