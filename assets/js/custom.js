/*  --------------------------------------------------------------------------- 
        
    Author: Vandré Leal Cândido
    Description: Personal Portfolio
    Year: 2015

---------------------------------------------------------------------------  */

$(document).ready(function () {

	// Smooth Wheel
	//$("body").smoothWheel();

	// Stop resize div #intro on mobile devices
	var width = $(window).width();
	var height = $(window).height();
	$(window).resize(function(){
		if(width < 992) {
			$('#introduction').css('height', height +'px');
			$('.page-positioning').css('top', height +'px');
		}
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 500, 'easeInCubic');
	        event.preventDefault();
	    });
	});

	// Google Analytics
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-56529027-1', 'auto');
	ga('send', 'pageview');
});