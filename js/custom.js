// Preloader 
jQuery(document).ready(function () {
    //Preloader
    jQuery(document).ready(function () {
        jQuery('.preloader').remove();
    });
    
 
jQuery(window).on('load', function() {
			setTimeout(function() {
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
          $('header').addClass('sticky animated fadeInDown');
      } else {
          $('header').removeClass('sticky fadeInDown');
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
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
  });
  wow.init(); 

    
       if(navigator.userAgent.match(/Trident\/7\./)) { document.body.addEventListener("mousewheel", function() { event.preventDefault(); var wd = event.wheelDelta; var csp = window.pageYOffset; window.scrollTo(0, csp - wd); }); }
    
    
    // date picker js starts here
    
    jQuery(function () {
          jQuery(".date").datepicker({ 
          autoclose: true, 
          todayHighlight: true
          }).datepicker('update', new Date());
    });

var vm = function() {
  var self = this;
  this.selectedFiles = ko.observableArray();
  // fileupload change function 
  this.fileUploadChange= function(data,evt) {
     // clear array
    self.selectedFiles([]);
    // loop thru results
     ko.utils.arrayForEach(evt.target.files,  function(file) {
      //start file reader
       var reader = new FileReader();
       // reader onload function is a callback from readAsDataURL
          reader.onload = function (f) {
            // result is base64 string 
             var b64=(f.target.result);
            // if selectedFiles length less than
             if(self.selectedFiles().length <3){
               //push into array
                 self.selectedFiles.push({base64String:b64});
             } 
            //end reader onload
            };
        reader.readAsDataURL(file); // calls onload
       //end file reader
    });
    //for each end
  };
  //file Upload Change end     
};
//end vm
     //   xhr = new XMLHttpRequest();
    //    xhr.open("post", url, true);
    //    xhr.setRequestHeader("Content-Type", "image/jpeg");
    //    xhr.setRequestHeader("X-File-Name", file.name);
    //    xhr.setRequestHeader("X-File-Size", file.size);
   //     xhr.setRequestHeader("X-File-Type", file.type);
    //    console.log("sending")
        // Send the file (doh)
   //    xhr.send(file);
ko.applyBindings(vm);

    
});

