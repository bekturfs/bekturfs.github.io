
(function() {

  $('.application__radio').on('click', function(e) {
    if($('#married').is(':checked')) {
      $('#married-content').css("display", "block");
      $('#married-content input').each(function () {
        $(this).prop('required', 'true')
      })
    } else {
      $('#married-content').css("display", "none");
      $('#married-content input').each(function () {
        $(this).removeAttr('required')
      })
    }
  })

    $('.application__checkbox-input').on('change', function() {

        var empty = false;

        $('.application__checkbox-input').each(function() {
          if (!$(this).is(':checked')) {
              empty = true;
          }
      });

        if (empty) {
            $('#submit-btn').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#submit-btn').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });

    $('.file-input').on('change', function () { 
      var name = this.files[0].name;
      if (name.length > 20){
        name = name.slice(0, 20) + ' ...';
      }
      $(this).parent().find('.photo-label').text(name).css({'color': '#000'});
     })


    var inputsCount = 9;
    var checkboxCount = 9;
    var filledInputsCount = 0;
    var checkedInputsCount = 0;

    $('.application__input').on('input', countPersentage)

    function countPersentage() {
      // Get the div you want to look in.
      var div = document.querySelector(".application1");

      // Get all the input fields inside your div
      var inputs = div.querySelectorAll('.material-input .text-input');

      var checkboxInputs = document.querySelectorAll('.application__checkbox-input');


      // Get the number of the found inputs.
      var totalInputs = inputs.length;
      var totalCheckboxInputs = checkboxInputs.length;

      // Loop through them and check which of them has a value.
      var inputsWithValue = 0;
      for(var i=0; i<totalInputs; i++){
        if(inputs[i].value!=='')
          inputsWithValue += 1;
      }   
              
      var checkboxInputsWithValue = 0;

      if (this.id === 'agreement-input-1'){
        if (this.checked) {
          $('.application__checkbox-input').each(function(){
            this.checked = true;
          })
        } else if (!this.checked) {
          $('.application__checkbox-input').each(function(){
            this.checked = false;
          })
        }
      }

      for(var j=0; j<totalCheckboxInputs; j++){
        if(checkboxInputs[j].checked)
          checkboxInputsWithValue += 1;
      }

      filledInputsCount = inputsWithValue;
      checkedInputsCount = checkboxInputsWithValue;

      renderPercentage()
    }

    function renderPercentage() {
      var total = inputsCount + checkboxCount;
      var filledTotal = filledInputsCount + checkedInputsCount;

      $('.application-percentage .line .filled-line').css('width', (filledTotal + 2) * 2 + '%' );
      $('.application-percentage .line .percent-indicator').css('left', filledTotal * 2 + '%' );
      $('.application-percentage .line .percent-indicator').text((filledTotal + 2) * 2 + '%');
    }

  $.mask.definitions['#'] = $.mask.definitions['9']; // Set # to do what 9 does
  $.mask.definitions['9'] = null;                    // Remove 9 as a masking character
  $('#phone').mask("+996 (###) ##-##-##");               

})()