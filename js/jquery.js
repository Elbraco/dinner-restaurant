//BUTTON CLICK

$('.family__container-btn1').on('click', function(){

    $('.family__container-img1').show()
    $('.family__container-img2').hide()
    $('.family__container-img3').hide()

})

$('.family__container-btn2').on('click', function(){

    $('.family__container-img2').show()
    $('.family__container-img1').hide();
    $('.family__container-img3').hide();

})

$('.family__container-btn3').on('click', function(){

    $('.family__container-img3').show()
    $('.family__container-img1').hide();
    $('.family__container-img2').hide();

})