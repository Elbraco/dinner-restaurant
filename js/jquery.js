

$('.btn1').on('click', function(){

    $('.img1').show()
    $('.img2').hide()
    $('.img3').hide()

})

$('.btn2').on('click', function(){

    $('.img2').show()
    $('.img1').hide();
    $('.img3').hide();

})

$('.btn3').on('click', function(){

    $('.img3').show()
    $('.img1').hide();
    $('.img2').hide();

})