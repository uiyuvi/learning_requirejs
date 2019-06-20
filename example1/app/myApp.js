define(['jquery'], function($) {
    return function(id) {
        $('#' + id).text('Hello World!');
    } 
});