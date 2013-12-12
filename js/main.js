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

}); //end jQuery
