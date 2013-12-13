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

    // HighCharts
    $('#spiderweb_container').highcharts({

        chart: {
            backgroundColor:'transparent',
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Budget vs spending',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                'Information Technology', 'Administration'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'Allocated Budget',
            data: [43000, 19000, 60000, 35000, 17000, 10000],
            pointPlacement: 'on'
        }, {
            name: 'Actual Spending',
            data: [50000, 39000, 42000, 31000, 26000, 14000],
            pointPlacement: 'on'
        }]

    });

}); //end jQuery
