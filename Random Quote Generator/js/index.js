$(document).ready(function() {
  $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-author').text(post.title);
        $('#quote-content').html(post.content);
      },
      cache: false
    });
  });

$('#button_right').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-author').text(post.title);
        $('#quote-content').html(post.content);
      },
      cache: false
    });
  });