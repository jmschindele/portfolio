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


// $('.click-flip').on('click', function() {

//     let text = $(this).parent();
//     let overlay = $(this).parent().parent();
//     let span = $(this).parent().parent().parent();

//     overlay.addClass('hidden');
//     span.removeClass('project-image')
//     span.addClass('flip-card')
// })

const coll = document.getElementsByClassName('collapsible');
console.log(coll)
for ( let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
