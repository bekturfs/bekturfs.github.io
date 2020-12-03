(function() {

    $('.photo-input').on('change', function () { 
        var name = this.files[0].name;
        $(this).parent().find('.photo-label').text(name);
       })

       $('#profile-photo').on('change', function(){
           if (this.files && this.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#profile__upload-img')
                    .attr('src', e.target.result)
                    .width(115)
                    .height(115);
            };

            reader.readAsDataURL(this.files[0]);
        }
       })

})()