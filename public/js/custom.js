$( document ).ready(function() {

	// 1. This activates the animations when the elements come to the viewport
	$('.in-viewport').viewportChecker({
	  	// Class to add to the elements when they are visible
	  	classToAdd: 'visible',
	 
	  	// The offset of the elements (let them appear earlier or later)
	  	offset: 100,
	 
	  	// Add the possibility to remove the class if the elements are not visible
	  	repeat: false,
	 
	  	// Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
	  	callbackFunction: function(elem, action){}
  	});


	// 2. Draw Roadmap Path
	function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $timeline1 = $("path#timeline-1");

	// prepare SVG
	pathPrepare($timeline1);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($timeline1, 1.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path", 1, {stroke: "#4D4960", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1303.957, tweenChanges: true})
		.setTween(tween)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	// var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 1430, tweenChanges: true})
	// 	.setTween(tween)
	// 	.addIndicators() // add indicators (requires plugin)
	// 	.addTo(controller);

	// 3. Start / Stop video when tha page is loaded and close the modal

	// $('#main-video-modal').addClass('show');
	// $('body').addClass('modal-open');
	//$('#main-video-modal video').trigger('play');

	document.getElementById('mainVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {

		$('body').removeClass('modal-open');
        $('body').css("padding-right", "0");
        
        $('#main-video-modal').removeClass('show');
        $('#main-video-modal').css("display", "none");

        $('.modal-backdrop').removeClass('show');
        $('.modal-backdrop').css("display", "none");

    }

	$('#main-video-modal .close').click(function(){

		$('#main-video-modal video').trigger('pause');

		$('body').removeClass('modal-open');
		$('#main-video-modal').removeClass('show');

	});

	$('#sec-video-modal .close').click(function(){
		$('#sec-video-modal video').trigger('pause');
	});

});