$('#lastName').hover( function() {
    $('#lastName').addClass('pronounce')
  $('#lastName').text('/SHin·də·lēː/')  
},
function() {
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
   if (currentScrollTop > lastScrollTop){
       $('#title-screen').addClass('animated fadeOut')
       $('#title-screen').on('animationend', function(){
           $('#title-screen').addClass('hidden');
           $('#portfolio-screen').removeClass('hidden');
       });
       
   } else {

   }
   lastScrollTop = currentScrollTop;

});