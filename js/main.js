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

    var icons = {
        header: "ui-icon-carat-1-e",
        activeHeader: "ui-icon-carat-1-s"
    };
    $( "#signs_accordion" ).accordion({
        collapsible: true,
        active: false,
        icons: icons,
        heightStyle: "content"
    });

    $( "#numbers_accordion" ).accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        icons: false
    });

    $("#signs_accordion").find("h3").tooltip();
    $("#numbers_accordion").find("h3").tooltip();

    // progressbars
    $('#progress_intellect').progressbar({
        value: 50
    });
    $('#progress_lucky').progressbar({
        value: 20
    });
    $('#progress_character').progressbar({
        value: 70
    });
    $('#progress_talent').progressbar({
        value: 30
    });
    $('#progress_hardworking').progressbar({
        value: 40
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


    $('.details a').click(function() {
        var self = $(this),
            parent = self.parents('.info');
        if (parent.hasClass('more_info')) {
            parent.removeClass('more_info');
        } else {
            parent.addClass('more_info');
        }
        parent.find('div.full').toggle();
        parent.find('div.short').toggle();
    });


}); //end jQuery
