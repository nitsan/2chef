$(document).ready(function () {
    $('input').bind('input', function () {
        // get the current value of the input field.
        if ($(this).val() && $(this).val() != "") {
            console.log($(this).val());
            $(this).removeClass('badInput');

        }
    });
    $('textarea').bind('input', function () {
        if ($(this).val() && $(this).val() != "") {
            console.log($(this).val());
            $(this).removeClass('badInput');

        }
    });
});        

function validateForm() {
    var inputNames = ["name", "phone", "email", "message"];
    var isAllInputsValid = true;
    for (var i = 0; i < inputNames.length; i++) {
        var input = $("#" + inputNames[i]);
        var nameValue = input.val();
        if (nameValue == null || nameValue == "") {
            input.addClass('badInput');
            isAllInputsValid = false;
            $('#error').removeClass('hidden');
        } else {
            input.removeClass('badInput');
            $('#error').addClass('hidden');
        }
    }
    return isAllInputsValid;
};