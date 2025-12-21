$(window).on('load', function(){
    
  $('.csr-img-slider').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop:true,
    dots: true,
    margin:0,
    // dotsContainer: '#custom_dots',
    nav: true,
    mouseDrag: true,  
    touchDrag: true,
    smartSpeed: 600,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 1000
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn'

    
});

$('.home-ban-slider').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop:true,
    dots: true,
    // dotsContainer: '#custom_dots',
    nav: false,
    mouseDrag: true,  
    touchDrag: true,
    smartSpeed: 600,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'

    
});

});

$(document).ready(function() {
// site loader
    $('body').addClass("site-open");


    $('.main-nav ul li:has(ul)').addClass('submenu');
    $('.main-nav ul i').click(function() {
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').children('ul').slideToggle();
    })
    $('.mob-btn').click(function() {
        if (!$('body').hasClass('show-menu')) {
            $('body').addClass('show-menu');
        } else {
            $('body').removeClass('show-menu');
        }
    });

    $('.overlay,.close-menu-btn,.eligible-menu').click(function() {
        if ($('body').hasClass('show-menu')) {
            $('body').removeClass('show-menu');
        }
    });

    // mobile-only
   

    

});

// home tab
$(document).ready(function(){

    //hides dropdown content
    $(".size_chart").hide();
    
    //unhides first option content
    $("#option1").show();
   
    //listen to dropdown for change
    $("#size_select").change(function(){
      //rehide content on change
      $('.size_chart').hide();
      $(".size_chart").removeClass('open');
      
      //unhides current item
      $('#'+$(this).val()).show();
      $('#'+$(this).val()).addClass("open");
    });

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        } 
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
            $( "body" ).trigger( "click" );
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
               
            }
        }
        lastScrollTop = st;
    }


// Header afix on scroll down
    $(window).on('load resize scroll', function (event) {
        var scrollValue = $(window).scrollTop();
        var offset = $('[data-spy="affix"]').attr('data-offset-top');
        if (scrollValue > offset) {
            $('[data-spy="affix"]').addClass('affix-top');
            // $('body').addClass('search-dwn');
            var width = $('[data-spy="affix"]').parent().width();
            // $('.affix-top').css('width', width);
        } else {
            $('[data-spy="affix"]').removeClass('affix-top');
            // $('body').removeClass('search-dwn');
        }
    });

  
        


    // search box
    $(function () {
		$(".head-search").on("click", function (e) {
			$(".search-box").addClass("open");
			e.stopPropagation()
			$(".search-field").click(function (event) {
				event.stopImmediatePropagation();
			});
		});
		$(document).on("click", function (e) {
			if ($(e.target).is(".search-box") === false) {
				$(".search-box").removeClass("open");
			}
		});
	});


    // inner page select 
    if ($(window).width() < 992) {
    $(".left-wrapper").on("click", function (e) {
        $(this).toggleClass("show");
    });
    }

    // $(document).on('mouseup tap touchstart click',function(e) 
    // {
    //     var container = $(".left-wrapper");
    
    //     // if the target of the click isn't the container nor a descendant of the container
    //     if (!container.is(e.target) && container.has(e.target).length === 0) 
    //     {
    //         container.removeClass("show");
    //     }
    // });


    // MENU
    if ($(window).width() > 1199) {
    $('header .header-right nav > ul>li > a').on('mouseenter', function(){
        $('body').removeClass('megamenu_open');
        $('header .header-right nav > ul li.mega_menu._show').removeClass('_show');
    });
    
    $('header').on('mouseleave', function(){
        $('body').removeClass('megamenu_open');
        $('header .header-right nav > ul li.mega_menu._show').removeClass('_show');
    });
    
    $('header .header-right nav > ul li.mega_menu>a').on('mouseenter', function() {
        if ($('body').hasClass('megamenu_open')) {
            $('body').removeClass('megamenu_open');
        } else {
            $('body').addClass('megamenu_open');
        }
        $('header .header-right nav > ul li.mega_menu._show').removeClass('_show');
        $(this).closest('li').addClass('_show');
    });

    var container = $("header .header-right nav > ul li.mega_menu");
    $(document).mouseup(function (e) {
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('body').removeClass('megamenu_open');
            $('header .header-right nav > ul li.mega_menu._show').removeClass('_show');
        }
    });
}
if ($(window).width() < 1199) {
    $("header .header-right nav > ul li.mega_menu>a .drop-arow").click( function(event) {
        if($(this).is('.drop-arow')){
            $(this).parent().next().slideToggle();
            return false;
        }
    });
}


    if(window.innerWidth < 768) {

        $('.home-mobile-slider').owlCarousel({
            items: 1,
            lazyLoad: true,
            loop:true,
            dots: true,
            margin:10,
            // dotsContainer: '#custom_dots',
            nav: false,
            mouseDrag: true,  
            touchDrag: true,
            smartSpeed: 600,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplaySpeed: 1000
            // animateOut: 'fadeOut',
            // animateIn: 'fadeIn'
    
            
        });

        $(".top-colm h6").click(function () {
            // $("footer ul").toggleClass("intro");
            $(this).toggleClass("collapsed");
            $(this).next("ul").slideToggle("intro");   
            // $(this).parent().find("ul").toggleClass("intro");
        });
    }

    // loan client slider
    $('.client-profile').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop:true,
        dots: true,
        margin:0,
        // dotsContainer: '#custom_dots',
        nav: true,
        mouseDrag: false,  
        touchDrag: false,
        smartSpeed: 600,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 1000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'

        
    });

   


    var a = 0;
$(window).scroll(function() {

  var oTop = $('.home-pravasi-chitty').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 1000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});




  });

  
// Intersection Observer Images
var images = document.querySelectorAll("[data-src]");
var amine_elem = document.querySelectorAll(".ksfe-anim,.ksfe-anim-text");
/*=========== Intersection Observer For Image Load =========*/
var config = {
    rootMargin: "0px 0px 50px 0px",
    threshold: 0
};

var observer = new IntersectionObserver(function (entries, self) {
    for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            preloadImage(entries[i].target);
            self.unobserve(entries[i].target);
        }
    }
}, config);

for (var i = 0; i < images.length; i++) {
    observer.observe(images[i]); /*-------- Observing Images in pages  ------*/
}

function preloadImage(img) {
    /*-------- Preloading Images   ------*/
    var src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    if (img.tagName === "IMG") img.src = src;
    else img.style.backgroundImage = "url(" + src + ")";
}


var observer2 = new IntersectionObserver(function (entries, self) {
    for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            addanimations(entries[i].target, i);
            self.unobserve(entries[i].target);
        }
    }
}, config);

for (var i = 0; i < amine_elem.length; i++) {
    observer2.observe(amine_elem[i]); /*-------- Observing Images in pages  ------*/
}

function addanimations(elem, indx) {
    setTimeout(function () {
        $(elem).addClass('anime');
    }, 200 * indx);
}
/*=========== ********* =========*/


  var   selectricOptions = {
    disableOnMobile: false,
  };
  
  $(function() {
    $('.selectric-select').selectric(selectricOptions);

    // if ($('.interest-rate .selectric-scroll .last').hasClass('selected')) {
    //     $('.interest-rate .selectric-wrapper').addClass('noclick');
    // };
  });
  $(".select2").select2({
    //   placeholder: "Select a programming language",
    //   allowClear: true
  });
//   console.log($('select').selectric)
  

            // tab link active
        // $(function(){
        //     var hash = window.location.hash;
        //     hash && $('ul.nav a[href="' + hash + '"]').tab('show');
          
        //   });