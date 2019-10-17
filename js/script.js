$(document).ready(function () {
    /*
    $('.theButton').click(function() {
        $('.theButton').hide();
    });
   
    $('.theButton').click(function() {
      $(this).hide();
    });
   */
    $('.theButton').click(function () {
        $('.container').siblings().fadeTo('slow', 0.1);
    });


    $('.superButton').click(function () {
        $('.container').siblings().fadeTo('slow', 1);
    });


    $('.theButton').hover(function () {
        $(this).toggleClass('makeBlack');

        /*  Tried to do the hover effect only using js, did not work that well, not rue why...
        $(this).css('background-color', '#000');
            }, function() {
        var classNames = $(this).attr('class').split(' ');
        var colorAttr = classNames[0];
        var panelColor = colorAttr[2];
        $(this).css('background-color', "'"+panelColor+"'");

        Model answer used a longger method - not sure why the code uses enter and then out instead of enter and leave
        $('.theButton').mouseenter(function() {
            $(this).addClass('makeBlack');
        });
        $('.theButton').mouseout(function() {
            $(this).addClass('makeBlack');
        });
        */
    });

});