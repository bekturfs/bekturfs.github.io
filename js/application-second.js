(function(){
    var totalInputsCount = 26;
var filledInputsCount = 0;

$('#application-salary').on('click', function(){
    showHideContent(this, 4)
})

$('#application-own-business').on('click', function(){
    showHideContent(this, 9)
})

$('#application-possessions').on('click', function(){
    showHideContent(this, 4)
})

$('#application-movable').on('click', function(){
    showHideContent(this, 4)
})

$('#application-guarantor').on('click', function(){
    showHideContent(this, 5)
})

function requiredInputs(context, flag) {

    var inputs = $(context).find('input');

    if (flag){
        inputs.each(function(){
            $(this).prop('required', 'true')
        })
    } else {
        inputs.each(function(){
            $(this).removeAttr('required')
            $(this).val('');
        })
    }
}

function showHideContent(context, inputsCount){

    var dropdownContent = $(context).closest('.application__dropdown').find('.dropdown-content');

    if ($(context).is(':checked')){
        dropdownContent.css('display', 'block');
        requiredInputs(dropdownContent, true);
        totalInputsCount += inputsCount;
    } else {
        dropdownContent.css('display', 'none');
        requiredInputs(dropdownContent, false);
        totalInputsCount -= inputsCount;
    }
}

$('.file-input').on('change', function () { 
    var name = this.files[0].name;
      if (name.length > 20){
        name = name.slice(0, 20) + ' ...';
      }
      $(this).parent().find('.photo-label').text(name).css({'color': '#000'});
   })

var startPercent = 40;

$('.application-percentage .line .filled-line').css('width', startPercent + '%' );
$('.application-percentage .line .percent-indicator').css('left', (startPercent - 2) + '%' );
$('.application-percentage .line .percent-indicator').text(startPercent + '%');

$('.material-input .text-input').on('input', countPersentage)

function countPersentage() {

    var inputs = document.querySelectorAll('.material-input .text-input');

    // Get the number of the found inputs.
    var totalInputs = inputs.length;

    // Loop through them and check which of them has a value.
    var inputsWithValue = 0;
    for(var i=0; i<totalInputs; i++){
    if(inputs[i].value!=='')
        inputsWithValue += 1;
    }   

    filledInputsCount = inputsWithValue;

    renderPercentage()
}

function renderPercentage() {

    var percent = (filledInputsCount / totalInputsCount) * 100;

    var finalPercent = Math.round(startPercent + ( 60 / 100 ) * percent);

    if (finalPercent > 99){
        $('.application__filled-out-text').text('Поздравляем вы заполнили заявку');
    } else {
        $('.application__filled-out-text').text('');
    }

    $('.application-percentage .line .filled-line').css('width', finalPercent  + '%' );
    $('.application-percentage .line .percent-indicator').css('left', finalPercent - 2 + '%' );
    $('.application-percentage .line .percent-indicator').text(finalPercent + '%');
}

var rent = 0;
var purchaseOfGoods = 0;
var salaryOfPersonal = 0;
var comServices = 0;

function getTotalSum(){
    return rent + purchaseOfGoods + salaryOfPersonal + comServices;
}

function renderTotalSum(){
    var totalSum = getTotalSum();
    $('#total-sum').text(totalSum);
}

renderTotalSum();

$('#application__rent').on('input', function(){
    var inFloat = parseFloat(this.value);
    if (inFloat > 0){
        rent = inFloat;
    } else {
        rent = 0;
    }
    renderTotalSum();
})

$('#application__purchase-of-goods').on('input', function(){
    var inFloat = parseFloat(this.value);
    if (inFloat > 0){
        purchaseOfGoods = inFloat;
    } else {
        purchaseOfGoods = 0;
    }
    renderTotalSum();
})

$('#application__salary-of-personal').on('input', function(){
    var inFloat = parseFloat(this.value);
    if (inFloat > 0){
        salaryOfPersonal = inFloat;
    } else {
        salaryOfPersonal = 0;
    }
    renderTotalSum();
})

$('#application__com-services').on('input', function(){
    var inFloat = parseFloat(this.value);
    if (inFloat > 0){
        comServices = inFloat;
    } else {
        comServices = 0; 
    }
    renderTotalSum();
})

}())