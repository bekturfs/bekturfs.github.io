var Days = [31,28,31,30,31,30,31,31,30,31,30,31];// index => month [0-11]
var monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

$(document).ready(function(){

    var option = '<option value="day">День</option>';
    var selectedDay="day";
    for (var i=1;i <= Days[0];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('.date-day').append(option);
    $('.date-day').val(selectedDay);

    var option = '<option value="month">Месяц</option>';
    var selectedMon ="month";
    for (var i=1;i <= 12;i++){
        option += '<option value="'+ i + '">' + monthNames[i-1] + '</option>';
    }
    $('.date-month').append(option);
    $('.date-month').val(selectedMon);

    var option = '<option value="month">Месяц</option>';
    var selectedMon ="month";
    for (var i=1;i <= 12;i++){
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('.date-month2').append(option);
    $('.date-month2').val(selectedMon);
  
    var d = new Date();
    var option = '<option value="year">Год</option>';
    selectedYear ="year";
    for (var i=1930;i <= d.getFullYear();i++){// years start i
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('.date-year').append(option);
    $('.date-year').val(selectedYear);
});
function isLeapYear(year) {
    year = parseInt(year);
    if (year % 4 != 0) {
	      return false;
	  } else if (year % 400 == 0) {
	      return true;
	  } else if (year % 100 == 0) {
	      return false;
	  } else {
	      return true;
	  }
}

function change_year(select)
{
    if( isLeapYear( $(select).val() ) )
	  {
		    Days[1] = 29;
		    
    }
    else {
        Days[1] = 28;
    }
    if( $(select).siblings('.date-month').val() == 2)
		    {
                   var day = $(select).siblings('.date-day');
                   var month = $(select).siblings('.date-month').val()
			       var val = $(day).val();
			       $(day).empty();
			       var option = '<option value="day">День</option>';
			       for (var i=1;i <= Days[1];i++){ //add option days
				         option += '<option value="'+ i + '">' + i + '</option>';
             }
			       $(day).append(option);
			       if( val > Days[ month ] )
			       {
				          val = 1;
			       }
			       $(day).val(val);
		     }
  }

function change_month(select) {

    var day = $(select).siblings('.date-day');
    var val = $(day).val();
    $(day).empty();
    var option = '<option value="day">День</option>';
    var month = parseInt( $(select).val() ) - 1;
    for (var i=1;i <= Days[ month ];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $(day).append(option);
    if( val > Days[ month ] )
    {
        val = 1;
    }
    $(day).val(val);
}