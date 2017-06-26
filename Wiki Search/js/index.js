function search(){
    var searchTerm = $("#search-field").val();
    var url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info|extracts&generator=search&inprop=url&exsentences=2&exlimit=10&exintro=1&explaintext=1&exsectionformat=plain&gsrsearch=' + searchTerm;
    $.getJSON(url, function(data) {
        $('.search-results').html('');
        $.each(data.query.pages, function(i, item) {
            $a = $('<a/>').addClass('result').attr({'href': item.fullurl,
                'target': '_blank'});
            $h = $('<h2/>').addClass('result-title').text(item.title).appendTo($a);
            $p = $('<p/>').addClass('result-extract').text(item.extract).appendTo($a);
            $('.search-results').append($a);
            $('#search-field').blur();
        });
    });
};

// $('body').on('click', '#button', search);
function clearSearchField() {
    $('#search-field').attr('placeholder', '');
    $('#search-field').val('');
}

function loadSearchField() {
    $('#search-field').removeClass('unloaded');
    $('#search-field').addClass('loaded');
    clearSearchField();
    $('h3').text('Type search term and hit enter')
}

function unloadSearchField() {
    $('#search-field').removeClass('loaded');
    $('#search-field').addClass('unloaded');
    clearSearchField();
    $('#search-field').attr('placeholder', '+');
    $('h3').text('Click to search')
}

$('body').on('click', '#search-field', loadSearchField);
$('body').on('blur', '#search-field', unloadSearchField);
// $('body').on('focus', '#search-field', clearSearchField);
$('body').on('keyup', '#search-field', function(e) {
    if(e.keyCode === 13) {
        search();
    } else {
        return;
    }
})