$(document).ready(function () {
    'use strict';

    $('#password').keyup(function () {
        $('#result').html(checkStrength($('#password').val()));
    });

    function checkStrength(password) {
        var strength = 0;
        if (password.length <= 6) {
            $('#result').removeClass();
            $('#result').addClass('short');
            return 'Too short';
        } else if (password.length <= 8) {
            $('#result').removeClass();
            $('#result').addClass('weak');
            return 'Weak';
        } else if (password.length <= 10) {
            $('#result').removeClass();
            $('#result').addClass('good');
            return 'Good';
        } else if (password.length <= 15) {
            $('#result').removeClass();
            $('#result').addClass('strong');
            return 'Strong';
        }
    }
    checkStrength(password);
});