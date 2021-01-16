$(document).ready(function(){

    $('.validate .text-input').on('blur', function(){
        validateInput(this);
    })

    $('.validate .text-input').on('input', function(){
        validateInput(this);
    })

    $('.validate .photo-input').on('change', function(){
        validatePhoto(this)
    })

    $('.validate .date-select-group select').on('change', function(){
        validateDate(this)
    })

    function validateInput(context){
        var value = $(context).val();
        var validationError = $(context).siblings('.validation-error')

        if (value  === ''){

            if (validationError){
                $(validationError).remove()
            }

            var div = document.createElement('div');
            div.classList.add('validation-error');
            div.textContent = 'Это поле является обязательным к заполнению'

            $(context).parent().append(div);
            $(context).css({
                'border-image': 'none',
                'border-width': '2px',
                'border-color': 'red'
            });
        } else {
            validationError.remove();
            $(context).css({
                'border-width': '2px',
                'border-image': 'linear-gradient(to right, #11998e, #38ef7d)',
                'border-image-slice': '1'
            });
        }
    }

    function validateDate(context){
        var parent = $(context).closest('.validate');
        var dayValue = parent.find('select.date-day').val();
        var monthValue = parent.find('select.date-month').val();
        var yearValue = parent.find('select.date-year').val();

        if (dayValue !== '' && 
                dayValue !== 'day' &&
                monthValue !== '' &&
                monthValue !== 'month' &&
                yearValue !== '' &&
                yearValue !== 'year' )
            {
                parent.css({
                    'border-width': '2px',
                    'border-image': 'linear-gradient(to right, #11998e, #38ef7d)',
                    'border-image-slice': '1'
                })
            } else {
                parent.css({
                    'border-bottom': '1px solid #e0e0e0',
                    'border-image': 'none'
                })
            }
    }

    function validatePhoto(context){
        var parent = $(context).closest('.validate');
        var photo = $(context).prop('files')[0];

        if (photo){
            parent.css({
                'border-width': '2px',
                'border-image': 'linear-gradient(to right, #11998e, #38ef7d)',
                'border-image-slice': '1'
            })
        } else {
            parent.css({
                'border-bottom': '1px solid #e0e0e0',
                'border-image': 'none'
            })
        }
    }

})