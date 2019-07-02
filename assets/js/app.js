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



