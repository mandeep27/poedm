// Preloader 
jQuery(document).ready(function () {
    //Preloader
    jQuery(document).ready(function () {
        jQuery('.preloader').remove();
    });
    jQuery(window).on('load', function () {
        setTimeout(function () {
            jQuery('body').addClass('loaded');
        }, 100);
    });
    // grab the initial top offset of the navigation 
    var stickyNavTop = $('body').offset().top;
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > 10) {
            $('header.home-header').addClass('sticky animated fadeInDown');
        }
        else {
            $('header.home-header').removeClass('sticky fadeInDown');
        }
    };
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
        stickyNav();
    });
    // Wow 
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        }
        , scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();
    if (navigator.userAgent.match(/Trident\/7\./)) {
        document.body.addEventListener("mousewheel", function () {
            event.preventDefault();
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
        });
    }
    /**** Toggle Header Section ****/
    jQuery(".profile_img a").click(function () {
        jQuery(".view_links").toggle();
    });
    /**** Custom Scroll ****/
    jQuery(".home_wrap_lft,.home_wrap_chat_main1,.header_chat_sc").mCustomScrollbar({
        theme: "minimal-dark"
    });
    /**** Toggle Post Option ****/
    jQuery(".slct_optn a").click(function () {
        jQuery(".view_links1").toggle();
    });
    /**** Toggle Post Option ****/
    jQuery(".home_chat_sc a,.home_rght_sc a").click(function () {
        jQuery(this).parent().find(".view_links2").toggle();
        jQuery(this).parent().find('.active').show();
    }); 
    /**** Toggle Post Option ****/
   
    
    
    
    jQuery(document).ready(function() {
jQuery('.members_tab a').on('click', function(e)  {
var currentAttrValue = jQuery(this).attr('href');
// Show/Hide Tabs
jQuery('.tabs_Sc ' + currentAttrValue).show().siblings().hide();
// Change/remove current tab to active
    
jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
e.preventDefault();
});
});
    
    /**** Choose Post or Channel ****/
  jQuery(".view_links1 li #crt_pst").click(function () {
        jQuery(".create_post_sc1").show(); 
      jQuery(".home_descp_post_hd").hide();
      
    });
     jQuery(".view_links1 li #crt_chnl").click(function () {
        jQuery(".create_channel_sc").show();
          jQuery(".home_descp_post_hd").hide();
    });
    
     jQuery(".dot_sc").click(function () {
           
            jQuery(".home_wrap_chat").toggleClass("highlight");
        });
    
      jQuery(".cat_postcnt").click(function (e) {
          e.preventDefault();
            jQuery(this).parents(".cat_vid_tab").find(".likepost_main").toggle();
//            alert(jQuery(this).parents(".cat_vid_tab").html());
                jQuery(this).toggleClass("like_active_sc");
    });
    
 
   jQuery(".filter_slide_sc a.filer_bx").click(function () {
           
            jQuery(".filter_slide_main").toggleClass("highlight");
        }); 
	
	jQuery(".drp_dwn").click(function () {
            jQuery(this).find('.submenu_lst').toggleClass('listactive'); 
        });
	
    
    /**** Custom Height of Textarea ****/
    var textarea = document.querySelector('.inpt_sc textarea');
    textarea.addEventListener('keydown', autosize);

    function autosize() {
        var el = this;
        setTimeout(function () {
            el.style.cssText = 'height:auto; padding:0';
            // for box-sizing other than "content-box" use:
            // el.style.cssText = '-moz-box-sizing:content-box';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 0);
    }
});