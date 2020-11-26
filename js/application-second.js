var totalInputsCount = 26;
var filledInputsCount = 0;

$('#application-salary').on('click', function(){
    showHideContent(this, 4)
})

$('#application-own-business').on('click', function(){
    showHideContent(this, 9)
})

$('#application-estate').on('click', function(){
    showHideContent(this, 4)
})

$('#application-movable').on('click', function(){
    showHideContent(this, 4)
})

function showHideContent(context, inputsCount){
    if (!$(context).is(':checked')){
        $(context).closest('.application__dropdown')
        .find('.dropdown-content').css('display', 'none');
        totalInputsCount -= inputsCount;
    } else {
        $(context).closest('.application__dropdown')
        .find('.dropdown-content').css('display', 'block');
        totalInputsCount += inputsCount;
    }
}

var startPercent = 40;

$('.application-percentage .line .filled-line').css('width', startPercent + '%' );
$('.application-percentage .line .percent-indicator').css('left', (startPercent - 2) + '%' );
$('.application-percentage .line .percent-indicator').text(startPercent + '%');

$('.application__text-input').on('input', countPersentage)

function countPersentage() {

    var inputs = document.querySelectorAll('.application__text-input');

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