//-----------------assignment pane navigation-----------------

//change to assignment 1 pane
$('#assignment-1-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-pane-1').css('opacity','1')
        $('#assignment-pane-2').css('opacity','0')
        $('#assignment-pane-3').css('opacity','0')
        $('#assignment-pane-4').css('opacity','0')
    }
})
//change to assignment 2 pane
$('#assignment-2-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-pane-1').css('opacity','0')
        $('#assignment-pane-2').css('opacity','1')
        $('#assignment-pane-3').css('opacity','0')
        $('#assignment-pane-4').css('opacity','0')
    }
})
//change to assignment 3 pane
$('#assignment-3-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-pane-1').css('opacity','0')
        $('#assignment-pane-2').css('opacity','0')
        $('#assignment-pane-3').css('opacity','1')
        $('#assignment-pane-4').css('opacity','0')
    }
})
//change to assignment 4 pane
$('#assignment-4-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-pane-1').css('opacity','0')
        $('#assignment-pane-2').css('opacity','0')
        $('#assignment-pane-3').css('opacity','0')
        $('#assignment-pane-4').css('opacity','1')
    }
})