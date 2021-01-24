$(document).ready(function(){
  $.mask.definitions['#'] = $.mask.definitions['9']; // Set # to do what 9 does
  $.mask.definitions['9'] = null;                    // Remove 9 as a masking character
  $('#tel').mask("+996 (###) ##-##-##");
  
  $.fn.selectRange = function(start, end) {
    var e = document.getElementById($(this).attr('id')); // I don't know why... but $(this) don't want to work today :-/
    if (!e) return;
    else if (e.setSelectionRange) { e.focus(); e.setSelectionRange(start, end); } /* WebKit */ 
    else if (e.createTextRange) { var range = e.createTextRange(); range.collapse(true); range.moveEnd('character', end); range.moveStart('character', start); range.select(); } /* IE */
    else if (e.selectionStart) { e.selectionStart = start; e.selectionEnd = end; }
  };

  $('#tel').on('focus click', function() {
    $(this).selectRange(5, 19);
  })
  
})