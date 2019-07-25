// window.scrollTo(0, -1000);

$("#lastName").hover(
  function() {
    $("#lastName").addClass("pronounce");
    $("#lastName").text("/SHin·də·lēː/");
  },
  function() {
    $("#lastName").removeClass("pronounce");
    $("#lastName").text("Schindele");
  }
);

$("#lastName").on("touchstart", function(e) {
  $("#lastName").addClass("pronounce");
  $("#lastName").text("/SHin·də·lēː/");
});
$("#lastName").on("touchend", function(e) {
  $("#lastName").removeClass("pronounce");
  $("#lastName").text("Schindele");
});

// setTimeout(function(){
//     $('#name').removeClass('hidden')
//     $('#name').addClass('fadeIn slower')
// }, 500)

setTimeout(function() {
  $("#web-dev").removeClass("hidden");
  $("#web-dev").addClass("fadeIn slow");
}, 750);

$(window).scroll(function() {
  var currentScrollTop = $(window).scrollTop();
  $("#home-overlay").css(
    "opacity",
    currentScrollTop / $("#home-overlay").height()
  );
});

$(window).scroll(function() {
  let currentScrollTop = $(window).scrollTop();

  //   if ($("#hi").offset().top - currentScrollTop <= 0) {
  //     if ($("#portfolio-segway").hasClass("hidden") === false) {
  //       $("#portfolio-segway").addClass("hidden");
  //     }
  //   } else {
  //     if ($("#portfolio-segway").hasClass("hidden")) {
  //       $("#portfolio-segway").removeClass("hidden");
  //     }
  //   }

  if ($('.side-nav').offset().top - currentScrollTop < 40) {
    $('.side-nav').addClass('getSticky')
  }

  if ($("#portfolio-segway").offset().top - currentScrollTop <= 0) {
    if ($("#all-projects").hasClass("handleOverflow") === false) {
        $("#all-projects").addClass("handleOverflow");
    } }
    else {
    
    if ($("#all-projects").hasClass("handleOverflow")) {
      $("#all-projects").removeClass("handleOverflow");
    }
  }
});

function responsive() {
  if ($(window).width() < 700) {
    if ($("#github-icon").hasClass("fa-10x")) {
      $("#github-icon").removeClass("fa-10x");
      $("#github-icon").addClass("fa-5x");
    }

    if ($("#linkedin-icon").hasClass("fa-10x")) {
      $("#linkedin-icon").removeClass("fa-10x");
      $("#linkedin-icon").addClass("fa-5x");
    }

    if ($("#email-icon").hasClass("fa-10x")) {
      $("#email-icon").removeClass("fa-10x");
      $("#email-icon").addClass("fa-5x");
    }

    $(".profile-picture").attr("src", "./assets/images/self.jpg");
  }

  if ($(window).width() > 700) {
    if ($("#github-icon").hasClass("fa-5x")) {
      $("#github-icon").removeClass("fa-5x");
      $("#github-icon").addClass("fa-10x");
    }
    if ($("#linkedin-icon").hasClass("fa-5x")) {
      $("#linkedin-icon").removeClass("fa-5x");
      $("#linkedin-icon").addClass("fa-10x");
    }

    if ($("#email-icon").hasClass("fa-5x")) {
      $("#email-icon").removeClass("fa-5x");
      $("#email-icon").addClass("fa-10x");
    }

    $(".profile-picture").attr("src", "./assets/images/self-2.jpg");
  }
}

responsive();

window.onresize = responsive;
