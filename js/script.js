
$(document).ready(function(){
    // navigation toggling
    $('#nav-icon').click(function(){
        $('.nav-menu').slideToggle();
        
        // icon change
        if($('#nav-icon i').attr('class') === 'fas fa-bars'){
            $('#nav-icon i').removeClass('fas fa-bars');
            $('#nav-icon i').addClass('fas fa-times');
        } else {
            $('#nav-icon i').removeClass('fas fa-times');
            $('#nav-icon i').addClass('fas fa-bars');
        }
    });

    // year
    $('.date').text((new Date).getFullYear());

    // scrollSpy 
    function scrollSpy() {
        var sections = ['recent-posts', 'archive', 'category', 'contact'];
        var current;
  
        for (var i = 0; i < sections.length; i++) {
          if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() ) {
            current = sections[i];
          }
        }
  
        $("nav a[href='#"+current+"']").addClass('active');
        $("nav a").not("a[href='#"+current+"']").removeClass('active');      
      }
  
      // smooth scrolling navigation
      $("nav a").click( function() {
        var target = $(this).attr("href");
        $("body, html").animate({
          scrollTop: $(target).offset().top + 50
        }, 700);
        return false;
      });
  
      //scrollSpy call
      $(document).ready( function() {
        scrollSpy();
      });
  
      $(window).scroll( function() {
        scrollSpy();
      });
});

