$(function() {

	var $window = $(window);
	
	// Parallax Backgrounds
	
	$('div[data-type="background"]').each(function(){
		var $bgobj = $(this);
		
		$(window).scroll(function() {
			
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			var coords = '50% '+ yPos + 'px';
			
			$bgobj.css({ backgroundPosition: coords });
			
		}); 
	});// end parallax


	// mobile dropdown navigation
	var width = $window.width();
	if(width <= 767){
		$(".burger").click(function(){
			$("nav").slideToggle();
			$(".burger").toggleClass("open");
			$("body").toggleClass("nav-open");
		});
	}//end mobile dropdown nav

	// tablet side nav
	if(width >=768 && width <= 1023){
		$(".burger").click(function() {
			$("nav").toggleClass("expand");
			$(".burger").toggleClass("open");
			$("body").toggleClass("nav-open");
		});
	}



	// menu tabs
	$(".menu-section:not(:first)").hide(); //initially hide all but first menu section
	var tab = $(".menu-tabs ul li"); //store menu tabs in var
	tab.click(function() { //on tab click
		var tabId = $(this).attr("id"); //store tabs id in var - will be used to match to content
		$(".menu-section").hide(); //hide all menu sections
		$("#" + tabId + "-content").show(); //show selected tab using the id of the tab to match to the id of the section
		$(".underline").css("left", 25 * $(this).index() + "%"); //shift underline of menu tab to underline selected tab
	});//end menu tabs
	
});