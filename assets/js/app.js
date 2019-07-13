// window.scrollTo(0, -1000);

$('#lastName').hover( function() {
    $('#lastName').addClass('pronounce')
  $('#lastName').text('/SHin·də·lēː/')  
},
function() {
    $('#lastName').removeClass('pronounce')
    $('#lastName').text('Schindele')
})

$('#lastName').on('touchstart', function(e) {
    $('#lastName').addClass('pronounce')
  $('#lastName').text('/SHin·də·lēː/')  
})
$('#lastName').on('touchend',
function(e) {
    $('#lastName').removeClass('pronounce')
    $('#lastName').text('Schindele')
})

// setTimeout(function(){
//     $('#name').removeClass('hidden')
//     $('#name').addClass('fadeIn slower')
// }, 500)

setTimeout(function(){
    $('#web-dev').removeClass('hidden')
    $('#web-dev').addClass('fadeIn slow')
}, 750)


    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        $('#home-overlay').css('opacity',currentScrollTop/$('#home-overlay').height());

    });

    $(window).scroll(function () {
        let currentScrollTop = $(window).scrollTop();
        // console.log( 'current scroll: ',currentScrollTop);
//         if($("#contact-screen").scrollTop() === 0) {
// alert("started from the bottom now we're here")
//         }
if ($('#hi').offset().top - currentScrollTop <= 0) {

     if($("#portfolio-segway").hasClass('hidden') === false)
     {

      $('#portfolio-segway').addClass('hidden'); }

} else {

    if($("#portfolio-segway").hasClass('hidden'))
     {

      $('#portfolio-segway').removeClass('hidden'); }
}

})


// $('.click-flip').on('click', function() {

//     let text = $(this).parent();
//     let overlay = $(this).parent().parent();
//     let span = $(this).parent().parent().parent();

//     overlay.addClass('hidden');
//     span.removeClass('project-image')
//     span.addClass('flip-card')
// })


