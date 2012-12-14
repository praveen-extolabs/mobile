$(document).ready(function () {
    $('#city').focus(function () {
        $('#search-box').addClass('ui-header');
        $('#search-box').addClass('ui-bar-c');
        $('#search-box').attr('role', 'banner');
        $('#logo').slideUp();
    });

});