$('.photo-input').on('change', function(){

    var parent = $(this).closest('.photo-item');

    if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(parent.find('.img-wrapper img'))
                .attr('src', e.target.result)
                .width('100%')
                .height('100%');
        };

        reader.readAsDataURL(this.files[0]);
    }

    $(parent.find('.img-wrapper img')).css('display', 'block');
})