window.scrollTo(0, -1000);

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


var lastScrollTop = 0;
    $(window).scroll(function(event){
        
        var currentScrollTop = $(this).scrollTop();
        if (document.querySelector("#portfolio-screen").getClientRects()[0].y < 20){
            $('#title-screen').addClass('hidden')
            $('#title-screen').on('animationend', function(){
                $('#title-screen').addClass('hidden');
                $('#portfolio-screen').addClass('animated fadeIn fast')
                $('#portfolio-screen').removeClass('hidden');
            });
            
        } else {
     
        }
        lastScrollTop = currentScrollTop;
     
     });