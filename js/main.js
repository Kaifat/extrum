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
        $(inputObj.el).click(function() {
            var currElem = this;

            $(formInputs).each(function(j, elem) {
                if ($(elem.el).val() == "") {
                    $(elem.el).val(elem.defVal);
                }
            });

            if ($(currElem).val() == inputObj.defVal) {
                $(currElem).val("");
            }
        });
    });

}); //end jQuery
