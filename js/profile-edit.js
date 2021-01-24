(function() {

    $('.photo-input').on('change', function () { 
        var name = this.files[0].name;
        if (name.length > 12){
            name = name.slice(0, 12) + ' ...';
        }
        $(this).parent().find('.photo-label').text(name).css({'color': '#000'});
    })


    $('#profile-photo').on('change', function(){
        showLoadedImg(this, '#profile__upload-img', 115, 115)
    });

    $('#photo-input1').on('change', function(){
        showLoadedImg(this, '#photo-place1', '100%', '100%')
    })

    $('#photo-input2').on('change', function(){
        showLoadedImg(this, '#photo-place2', '100%', '100%')
    })


    $.mask.definitions['#'] = $.mask.definitions['9']; // Set # to do what 9 does
    $.mask.definitions['9'] = null;                    // Remove 9 as a masking character
    $('#tel').mask("+996 (###) ##-##-##");

    function showLoadedImg(from, selector, width, height){
        if (from.files && from.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(selector)
                    .attr('src', e.target.result)
                    .width(width)
                    .height(height);
            };

            reader.readAsDataURL(from.files[0]);
        }

        $(selector).css({ 'display': 'block' })
    }

})()