//sections
$('#assignment-01').click(function(){
    if($(this).is(':checked')){
        $('#assignment-pane-01').css('opacity','1');
        $('#assignment-pane-02').css('opacity','0');
        $('#assignment-pane-03').css('opacity','0');
        $('#assignment-pane-04').css('opacity','0');

        //label
        $('.assignment > label:first-of-type').addClass('underline');
        $('.assignment > label:nth-of-type(2)').removeClass('underline');
        $('.assignment > label:nth-of-type(3)').removeClass('underline');
        $('.assignment > label:nth-of-type(4)').removeClass('underline');
    }
});
$('#assignment-02').click(function(){
    if($(this).is(':checked')){
        $('#assignment-pane-01').css('opacity','0');
        $('#assignment-pane-02').css('opacity','1');
        $('#assignment-pane-03').css('opacity','0');
        $('#assignment-pane-04').css('opacity','0');

        //label
        $('.assignment > label:first-of-type').removeClass('underline');
        $('.assignment > label:nth-of-type(2)').addClass('underline');
        $('.assignment > label:nth-of-type(3)').removeClass('underline');
        $('.assignment > label:nth-of-type(4)').removeClass('underline');
    }
});
$('#assignment-03').click(function(){
    if($(this).is(':checked')){
        $('#assignment-pane-01').css('opacity','0');
        $('#assignment-pane-02').css('opacity','0');
        $('#assignment-pane-03').css('opacity','1');
        $('#assignment-pane-04').css('opacity','0');

        //label
        $('.assignment > label:first-of-type').removeClass('underline');
        $('.assignment > label:nth-of-type(2)').removeClass('underline');
        $('.assignment > label:nth-of-type(3)').addClass('underline');
        $('.assignment > label:nth-of-type(4)').removeClass('underline');
    }
});
$('#assignment-04').click(function(){
    if($(this).is(':checked')){
        $('#assignment-pane-01').css('opacity','0');
        $('#assignment-pane-02').css('opacity','0');
        $('#assignment-pane-03').css('opacity','0');
        $('#assignment-pane-04').css('opacity','1');

        //label
        $('.assignment > label:first-of-type').removeClass('underline');
        $('.assignment > label:nth-of-type(2)').removeClass('underline');
        $('.assignment > label:nth-of-type(3)').removeClass('underline');
        $('.assignment > label:nth-of-type(4)').addClass('underline');
    }
});
// section 01 cases
$('#assignment-01-case-1-radio').click(function(){
    if($(this).is(':checked')){
        $('#assignment-01-case-pane-01').css('opacity','1');
        $('#assignment-01-case-pane-02').css('opacity','0');
        $('#assignment-01-case-pane-03').css('opacity','0');
        $('#assignment-01-case-pane-04').css('opacity','0');
        $('#assignment-01-case-pane-05').css('opacity','0');
        $('#assignment-01-case-pane-06').css('opacity','0');
    }
});
$('#assignment-01-case-2-radio').click(function(){
    if($(this).is(':checked')){
        $('#assignment-01-case-pane-01').css('opacity','0');
        $('#assignment-01-case-pane-02').css('opacity','1');
        $('#assignment-01-case-pane-03').css('opacity','0');
        $('#assignment-01-case-pane-04').css('opacity','0');
        $('#assignment-01-case-pane-05').css('opacity','0');
        $('#assignment-01-case-pane-06').css('opacity','0');
    }
});
$('#assignment-01-case-3-radio').click(function(){
    if($(this).is(':checked')){
        $('#assignment-01-case-pane-01').css('opacity','0');
        $('#assignment-01-case-pane-02').css('opacity','0');
        $('#assignment-01-case-pane-03').css('opacity','1');
        $('#assignment-01-case-pane-04').css('opacity','0');
        $('#assignment-01-case-pane-05').css('opacity','0');
        $('#assignment-01-case-pane-06').css('opacity','0');
    }
});
$('#assignment-01-case-4-radio').click(function(){
    if($(this).is(':checked')){
        $('#assignment-01-case-pane-01').css('opacity','0');
        $('#assignment-01-case-pane-02').css('opacity','0');
        $('#assignment-01-case-pane-03').css('opacity','0');
        $('#assignment-01-case-pane-04').css('opacity','1');
        $('#assignment-01-case-pane-05').css('opacity','0');
        $('#assignment-01-case-pane-06').css('opacity','0');
    }
});
$('#assignment-01-case-5-radio').click(function(){
    if($(this).is(':checked')){
        $('#assignment-01-case-pane-01').css('opacity','0');
        $('#assignment-01-case-pane-02').css('opacity','0');
        $('#assignment-01-case-pane-03').css('opacity','0');
        $('#assignment-01-case-pane-04').css('opacity','0');
        $('#assignment-01-case-pane-05').css('opacity','1');
        $('#assignment-01-case-pane-06').css('opacity','0');
    }
});
$('#assignment-01-case-6-radio').click(function(){
    if($(this).is(':checked')){
        $('#assignment-01-case-pane-01').css('opacity','0');
        $('#assignment-01-case-pane-02').css('opacity','0');
        $('#assignment-01-case-pane-03').css('opacity','0');
        $('#assignment-01-case-pane-04').css('opacity','0');
        $('#assignment-01-case-pane-05').css('opacity','0');
        $('#assignment-01-case-pane-06').css('opacity','1');
    }
});
