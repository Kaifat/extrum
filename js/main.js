$(document).ready(function(){

    var formInputs = [
        {
            "el": '#searchText',
            "defVal": "Поиск по сайту"
        },
        {
            "el": '#reg_name',
            "defVal": "имя"
        },
        {
            "el": '#reg_password',
            "defVal": "пароль"
        }
    ];

    $(formInputs).each(function(i, inputObj) {

        $(inputObj.el).blur(function() {
            var currElem = this;
            if ($(currElem).val() == "") {
                $(currElem).val(inputObj.defVal);
            }
        });

        $(inputObj.el).click(function() {
            var currElem = this;
            if ($(currElem).val() == inputObj.defVal) {
                $(currElem).val("");
            }
        });
    });

    // datepicker
    $( "#datepicker" ).datepicker({
        inline: true
    });

    // registration popup
    $( "#register_popup" ).dialog({
        autoOpen: false,
        width: 400,
        title: "Создать кабинет",
        buttons: [
            {
                text: "Ok",
                click: function() {
                    $( this ).dialog( "close" );
                }
            },
            {
                text: "Cancel",
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
