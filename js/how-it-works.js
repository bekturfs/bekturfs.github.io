$('.dropdown-item').on('click', function() {
    var dropdownElem = $(this).siblings('.dropdown-text')[0];
    var labelElem = $(this).siblings('label')[0];

    if($(this).is(':checked')) {
        $(dropdownElem).fadeIn('2000');
    } else {
        $(dropdownElem).fadeOut('2000');
    }
  })



  