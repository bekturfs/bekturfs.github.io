$(document).ready(function(){
    $("#tel").inputmask({
        mask: "+ 999 (999) 999999",
        placeholder: "+ 996 (•••) ••••••",
      });
      $("#tel").focus(function () {
        if ($(this).val() === '+ 996 (•••) ••••••' || $(this).val() === ''){
            $(this).val("+996");
        }
      });
})