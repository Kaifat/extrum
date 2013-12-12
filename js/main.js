$(document).ready(function(){

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    // datepicker
    $( "#datepicker" ).datepicker({
        inline: true,
        changeMonth: true,
        changeYear: true
    });

    // registration popup
    $( "#register_popup" ).dialog({
        autoOpen: false,
        width: 500,
        title: "Создать кабинет",
        modal:true,
        buttons: [
            {
                text: "Зарегистрироваться",
                "class": "orangeBg",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });
    // Link to open the register dialog
    $( "#regegister_link" ).click(function( event ) {
        $( "#register_popup" ).dialog( "open" );
        event.preventDefault();
    });

}); //end jQuery
