/* http://blog.bassta.bg/2013/05/smooth-page-scrolling-with-tweenmax/ */

$(function(){
	/* === SET UP SOME VARIABLES === */
	var $window = $(window);	//Window object: $(window);
	var scrollTime = 0.8;		//Scroll time (1.2): will be used to define the time of the animation. Decrease it, if you want to make the scroll faster!
	var scrollDistance = 200;	//Distance (170): calculate the amount of scroll. Increase it, if you want to scroll to a longer distance (Use smaller value for shorter scroll and greater value for longer scroll)

	/* === WE HAVE TO LISTEN FOR MOUSE SCROLL EVENT === */
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault(); // to prevent default scrolling; what we need is the event delta!
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3; // how much the user scrolled

		/* === NOW WE ARE ABLE TO CALCULATE THE NEW WINDOW POSITION === */
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		/* === LET’S ANIMATE THE WINDOW TO THIS NEW POSITION === */
		TweenMax.to($window, scrollTime, {
			scrollTo : {
				y: finalScroll,
				autoKill: true
			},
			ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
			autoKill: true,
			overwrite: 5						
		});

	});

	/* === EXTENSION TO KEYBOARD'S KEYCODE EVENT === */

	/* 
		=== CUSTOM FUNCTION ===
		https://stackoverflow.com/questions/26990986/jquery-scroll-event-how-to-determine-amount-scrolled-scroll-delta-in-pixels
		http://jsfiddle.net/tew9zxc1/
	*/

//	$.event.special.scrolldelta = {
//		// from http://learn.jquery.com/events/event-extensions/
//		delegateType: "scroll",
//		bindType: "scroll",
//		handle: function (event) {
//			var handleObj = event.handleObj;
//			var targetData = jQuery.data(event.target);
//			var ret = null;
//			var elem = event.target;
//			var isDoc = elem === document;
//			var oldTop = targetData.top || 0;
//			targetData.top = isDoc ? elem.documentElement.scrollTop + elem.body.scrollTop : elem.scrollTop;
//			event.scrollTopDelta = targetData.top - oldTop;
//			event.scrollTop = targetData.top;
//			event.type = handleObj.origType;
//			ret = handleObj.handler.apply(this, arguments);
//			event.type = handleObj.type;
//			return ret;
//		}
//	};

//	$window.on('scrolldelta', function (e) {
		// https://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery
//		var code = e.keyCode || e.which,
//		key = {page_up: 33, page_down: 34, end: 35, home: 36, arrow_up: 38, arrow_down: 40 };

//	    switch(code) {
//	        case key.page_up:
	        // your code here
//			var scrollTop = e.scrollTop;
			//var topDelta = e.scrollTopDelta;
//			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3; // how much the user scrolled
			//var delta = -e.originalEvent.detail/3;
			//var delta = e.scrollTopDelta/3;
			//var delta = -e.originalEvent.deltaY/3;

			//var feedbackText = 'scrollTop: ' + top.toString() + 'px (' + (topDelta >= 0 ? '+' : '') + topDelta.toString() + 'px)';
			//document.getElementById('feedback').innerHTML = feedbackText;

			/* === NOW WE ARE ABLE TO CALCULATE THE NEW WINDOW POSITION === */
			//var scrollTop = top;
			//var finalScroll = scrollTop - parseInt(topDelta*scrollDistance);
//			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//	        break;

//	        case key.page_down:
	        // your code here
//			var scrollTop = e.scrollTop;
			//var topDelta = e.scrollTopDelta;
//			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3; // how much the user scrolled
			//var delta = -e.originalEvent.detail/3;
			//var delta = e.scrollTopDelta/3;
			//var delta = -e.originalEvent.deltaY/3;

			//var feedbackText = 'scrollTop: ' + top.toString() + 'px (' + (topDelta >= 0 ? '+' : '') + topDelta.toString() + 'px)';
			//document.getElementById('feedback').innerHTML = feedbackText;

			/* === NOW WE ARE ABLE TO CALCULATE THE NEW WINDOW POSITION === */
			//var scrollTop = top;
			//var finalScroll = scrollTop - parseInt(topDelta*scrollDistance);
//			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//	        break;

//	        case key.end:
	        // your code here
//			var scrollTop = e.scrollTop;
			//var topDelta = e.scrollTopDelta;
//			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3; // how much the user scrolled
			//var delta = -e.originalEvent.detail/3;
			//var delta = e.scrollTopDelta/3;
			//var delta = -e.originalEvent.deltaY/3;

			//var feedbackText = 'scrollTop: ' + top.toString() + 'px (' + (topDelta >= 0 ? '+' : '') + topDelta.toString() + 'px)';
			//document.getElementById('feedback').innerHTML = feedbackText;

			/* === NOW WE ARE ABLE TO CALCULATE THE NEW WINDOW POSITION === */
			//var scrollTop = top;
			//var finalScroll = scrollTop - parseInt(topDelta*scrollDistance);
//			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//	        break;

//	        case key.home:
	        // your code here
//			var scrollTop = e.scrollTop;
			//var topDelta = e.scrollTopDelta;
//			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3; // how much the user scrolled
			//var delta = -e.originalEvent.detail/3;
			//var delta = e.scrollTopDelta/3;
			//var delta = -e.originalEvent.deltaY/3;

			//var feedbackText = 'scrollTop: ' + top.toString() + 'px (' + (topDelta >= 0 ? '+' : '') + topDelta.toString() + 'px)';
			//document.getElementById('feedback').innerHTML = feedbackText;

			/* === NOW WE ARE ABLE TO CALCULATE THE NEW WINDOW POSITION === */
			//var scrollTop = top;
			//var finalScroll = scrollTop - parseInt(topDelta*scrollDistance);
//			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//	        break;

//	        case key.arrow_up:
	        // your code here
//			var scrollTop = e.scrollTop;
			//var topDelta = e.scrollTopDelta;
//			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3; // how much the user scrolled
			//var delta = -e.originalEvent.detail/3;
			//var delta = e.scrollTopDelta/3;
			//var delta = -e.originalEvent.deltaY/3;

			//var feedbackText = 'scrollTop: ' + top.toString() + 'px (' + (topDelta >= 0 ? '+' : '') + topDelta.toString() + 'px)';
			//document.getElementById('feedback').innerHTML = feedbackText;

			/* === NOW WE ARE ABLE TO CALCULATE THE NEW WINDOW POSITION === */
			//var scrollTop = top;
			//var finalScroll = scrollTop - parseInt(topDelta*scrollDistance);
//			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//	        break;

//	        case key.arrow_down:
	        // your code here
//			var scrollTop = e.scrollTop;
			//var topDelta = e.scrollTopDelta;
//			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3; // how much the user scrolled
			//var delta = -e.originalEvent.detail/3;
			//var delta = e.scrollTopDelta/3;
			//var delta = -e.originalEvent.deltaY/3;

			//var feedbackText = 'scrollTop: ' + top.toString() + 'px (' + (topDelta >= 0 ? '+' : '') + topDelta.toString() + 'px)';
			//document.getElementById('feedback').innerHTML = feedbackText;

			/* === NOW WE ARE ABLE TO CALCULATE THE NEW WINDOW POSITION === */
			//var scrollTop = top;
			//var finalScroll = scrollTop - parseInt(topDelta*scrollDistance);
//			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//	        break;

//	        default: return; // allow other keys to be handled
//	    }

//		e.preventDefault(); // prevent the default action (scroll / move caret)

		/* === LET’S ANIMATE THE WINDOW TO THIS NEW POSITION === */
//		TweenMax.to($window, scrollTime, {
//			scrollTo : {
//				y: finalScroll,
//				autoKill: true
//			},
//			ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
//			autoKill: true,
//			overwrite: 5						
//		});
//	});
});