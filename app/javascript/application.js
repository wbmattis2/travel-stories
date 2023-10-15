// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"

$('#button').toggle( 
    function() {
        $('#right').animate({ left: 250 }, 'slow', function() {
            $('#button').html('Close');
        });
    }, 
    function() {
        $('#right').animate({ left: 0 }, 'slow', function() {
            $('#button').html('Menu');
        });
    }
);