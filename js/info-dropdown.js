(function(){
    $('.info__items label').on('click', function() {

        var textContent = $(this).siblings('.info__text')[0];
        var input = $(this).siblings('input')[0];
    
        if(!$(input).is(':checked')) {  
            $(textContent).fadeIn('2000');
        } else {
            $(textContent).fadeOut('2000');
        }
    
          $(this).find('.info__icon svg.plus').toggleClass('minus');
      })
}())