function search() {
    window.location = encodeURIComponent(jQuery('#query').attr('value'));
    return false;
}

jQuery(function ($) {
    $('a').tipTip({maxWidth: '600px'});
    $('#query').autocomplete('suggest/', {
        autoFill: true,
        matchCase: true,
        selectFirst: false
    });
    $(window).load(function () {
        $('#query').attr('autocomplete', 'off');
    });
});

