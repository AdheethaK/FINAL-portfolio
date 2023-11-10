//-----------------assignment pane navigation-----------------

//change to assignment 1 pane
$('#assignment-1-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-pane-1').css('opacity','1')
        $('.assignment label:first-of-type').css('-webkit-text-fill-color','#DB0092')
        $('#assignment-pane-2').css('opacity','0')
        $('.assignment label:nth-of-type(2)').css('-webkit-text-fill-color','#2E2328')
        $('#assignment-pane-3').css('opacity','0')
        $('.assignment label:nth-of-type(3)').css('-webkit-text-fill-color','#2E2328')
        $('#assignment-pane-4').css('opacity','0')
        $('.assignment label:nth-of-type(4)').css('-webkit-text-fill-color','#2E2328')
    }
})
//change to assignment 2 pane
$('#assignment-2-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-pane-1').css('opacity','0')
        $('.assignment label:nth-of-type(1)').css('-webkit-text-fill-color','#2E2328')
        $('#assignment-pane-2').css('opacity','1')
        $('.assignment label:nth-of-type(2)').css('-webkit-text-fill-color','#9C41E1')
        $('#assignment-pane-3').css('opacity','0')
        $('.assignment label:nth-of-type(3)').css('-webkit-text-fill-color','#2E2328')
        $('#assignment-pane-4').css('opacity','0')
        $('.assignment label:nth-of-type(4)').css('-webkit-text-fill-color','#2E2328')
    }
})
//change to assignment 3 pane
$('#assignment-3-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-pane-1').css('opacity','0')
        $('.assignment label:nth-of-type(1)').css('-webkit-text-fill-color','#2E2328')
        $('#assignment-pane-2').css('opacity','0')
        $('.assignment label:nth-of-type(2)').css('-webkit-text-fill-color','#2E2328')
        $('#assignment-pane-3').css('opacity','1')
        $('.assignment label:nth-of-type(3)').css('-webkit-text-fill-color','#E56157')
        $('#assignment-pane-4').css('opacity','0')
        $('.assignment label:nth-of-type(4)').css('-webkit-text-fill-color','#2E2328')
    }
})
//change to assignment 4 pane
$('#assignment-4-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-pane-1').css('opacity','0')
        $('.assignment label:nth-of-type(1)').css('-webkit-text-fill-color','#2E2328')
        $('#assignment-pane-2').css('opacity','0')
        $('.assignment label:nth-of-type(2)').css('-webkit-text-fill-color','#2E2328')
        $('#assignment-pane-3').css('opacity','0')
        $('.assignment label:nth-of-type(3)').css('-webkit-text-fill-color','#2E2328')
        $('#assignment-pane-4').css('opacity','1')
        $('.assignment label:nth-of-type(4)').css('-webkit-text-fill-color','#0013E6')
    }
})

//-----------------case pane navigation for assignment 1-----------------
//change to assignment 1 case 1 pane
$('#assignment-1-case-1-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-1-case-1-pane').css('opacity','1')
        $('#assignment-1-case-2-pane').css('opacity','0')
        $('#assignment-1-case-3-pane').css('opacity','0')
        $('#assignment-1-case-4-pane').css('opacity','0')
        $('#assignment-1-case-5-pane').css('opacity','0')
        $('#assignment-1-case-6-pane').css('opacity','0')
    }
})
//change to assignment 1 case 2 pane
$('#assignment-1-case-2-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-1-case-1-pane').css('opacity','0')
        $('#assignment-1-case-2-pane').css('opacity','1')
        $('#assignment-1-case-3-pane').css('opacity','0')
        $('#assignment-1-case-4-pane').css('opacity','0')
        $('#assignment-1-case-5-pane').css('opacity','0')
        $('#assignment-1-case-6-pane').css('opacity','0')
    }
})
//change to assignment 1 case 3 pane
$('#assignment-1-case-3-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-1-case-1-pane').css('opacity','0')
        $('#assignment-1-case-2-pane').css('opacity','0')
        $('#assignment-1-case-3-pane').css('opacity','1')
        $('#assignment-1-case-4-pane').css('opacity','0')
        $('#assignment-1-case-5-pane').css('opacity','0')
        $('#assignment-1-case-6-pane').css('opacity','0')
    }
})
//change to assignment 1 case 4 pane
$('#assignment-1-case-4-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-1-case-1-pane').css('opacity','0')
        $('#assignment-1-case-2-pane').css('opacity','0')
        $('#assignment-1-case-3-pane').css('opacity','0')
        $('#assignment-1-case-4-pane').css('opacity','1')
        $('#assignment-1-case-5-pane').css('opacity','0')
        $('#assignment-1-case-6-pane').css('opacity','0')
    }
})
//change to assignment 1 case 5 pane
$('#assignment-1-case-5-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-1-case-1-pane').css('opacity','0')
        $('#assignment-1-case-2-pane').css('opacity','0')
        $('#assignment-1-case-3-pane').css('opacity','0')
        $('#assignment-1-case-4-pane').css('opacity','0')
        $('#assignment-1-case-5-pane').css('opacity','1')
        $('#assignment-1-case-6-pane').css('opacity','0')
    }
})
//change to assignment 1 case 6 pane
$('#assignment-1-case-6-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-1-case-1-pane').css('opacity','0')
        $('#assignment-1-case-2-pane').css('opacity','0')
        $('#assignment-1-case-3-pane').css('opacity','0')
        $('#assignment-1-case-4-pane').css('opacity','0')
        $('#assignment-1-case-5-pane').css('opacity','0')
        $('#assignment-1-case-6-pane').css('opacity','1')
    }
})
//-----------------case pane navigation for assignment 2-----------------
//change to assignment 2 case 1 pane
$('#assignment-2-case-1-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-2-case-1-pane').css('opacity','1')
        $('#assignment-2-case-2-pane').css('opacity','0')
        $('#assignment-2-case-3-pane').css('opacity','0')
        $('#assignment-2-case-4-pane').css('opacity','0')
        $('#assignment-2-case-5-pane').css('opacity','0')
        $('#assignment-2-case-6-pane').css('opacity','0')
    }
})
//change to assignment 2 case 2 pane
$('#assignment-2-case-2-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-2-case-1-pane').css('opacity','0')
        $('#assignment-2-case-2-pane').css('opacity','1')
        $('#assignment-2-case-3-pane').css('opacity','0')
        $('#assignment-2-case-4-pane').css('opacity','0')
        $('#assignment-2-case-5-pane').css('opacity','0')
        $('#assignment-2-case-6-pane').css('opacity','0')
    }
})
//change to assignment 2 case 3 pane
$('#assignment-2-case-3-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-2-case-1-pane').css('opacity','0')
        $('#assignment-2-case-2-pane').css('opacity','0')
        $('#assignment-2-case-3-pane').css('opacity','1')
        $('#assignment-2-case-4-pane').css('opacity','0')
        $('#assignment-2-case-5-pane').css('opacity','0')
        $('#assignment-2-case-6-pane').css('opacity','0')
    }
})
//change to assignment 2 case 4 pane
$('#assignment-2-case-4-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-2-case-1-pane').css('opacity','0')
        $('#assignment-2-case-2-pane').css('opacity','0')
        $('#assignment-2-case-3-pane').css('opacity','0')
        $('#assignment-2-case-4-pane').css('opacity','1')
        $('#assignment-2-case-5-pane').css('opacity','0')
        $('#assignment-2-case-6-pane').css('opacity','0')
    }
})
//change to assignment 2 case 5 pane
$('#assignment-2-case-5-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-2-case-1-pane').css('opacity','0')
        $('#assignment-2-case-2-pane').css('opacity','0')
        $('#assignment-2-case-3-pane').css('opacity','0')
        $('#assignment-2-case-4-pane').css('opacity','0')
        $('#assignment-2-case-5-pane').css('opacity','1')
        $('#assignment-2-case-6-pane').css('opacity','0')
    }
})
//change to assignment 2 case 6 pane
$('#assignment-2-case-6-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-2-case-1-pane').css('opacity','0')
        $('#assignment-2-case-2-pane').css('opacity','0')
        $('#assignment-2-case-3-pane').css('opacity','0')
        $('#assignment-2-case-4-pane').css('opacity','0')
        $('#assignment-2-case-5-pane').css('opacity','0')
        $('#assignment-2-case-6-pane').css('opacity','1')
    }
})
//-----------------case pane navigation for assignment 3-----------------
//change to assignment 3 case 1 pane
$('#assignment-3-case-1-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-3-case-1-pane').css('opacity','1')
        $('#assignment-3-case-2-pane').css('opacity','0')
    }
})
//change to assignment 3 case 2 pane
$('#assignment-3-case-2-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-3-case-1-pane').css('opacity','0')
        $('#assignment-3-case-2-pane').css('opacity','1')
    }
})
//-----------------case pane navigation for assignment 4-----------------
//change to assignment 4 case 1 pane
$('#assignment-4-case-1-radio').click(function () {
    if($(this).is(':checked')){
        $('#assignment-4-case-1-pane').css('opacity','1')
    }
})