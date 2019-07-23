function init() {
	$(".content").scrollTop(0);

	var st = 0;	
	var contentHeight_inner = $(".content_text").height();
	var contentHeight = $(".content").height();
	var scrollLeft = contentHeight_inner - contentHeight;

	$(".content").scroll( function(){		
		st = $(this).scrollTop();
		tlOrbLT.progress(st / scrollLeft);
		tlOrbRB.progress(st / scrollLeft);
		tlOrbLB.progress(st / scrollLeft);
	//	tlRotate.progress(st / scrollLeft);
	//	console.log(st / scrollLeft);
	});
}

var toggleWork = function() {
	if($('body').hasClass('work_toggled')){
		$('body').removeClass('work_toggled');
		TweenMax.to($(".rotater"), .3, {
			scale: 1,
		});
		TweenMax.to($(".work_images"), .3, {
			scale: 0.5,
			autoAlpha: 0
		});
		tlRotate.play();
	} else {
		$('body').addClass('work_toggled');
		tlRotate.pause();
		TweenMax.set($(".rotater"), {
			transformOrigin: "0 0",
			left: 0,
			top: 0
		});
		TweenMax.to($(".rotater"), .3, {
			scale: .2,
		});
		TweenMax.to($(".work_images"), .3, {
			scale: 1,
			autoAlpha: 1
		});
	}
};
$('body.work_toggled .wrapper, .btn_show-work').on('click', function(){
	toggleWork();
});

var $anitime = 10;

TweenLite.defaultEase =  Power0.easeNone;
tlOrbLT = new TimelineMax({paused: true});
tlOrbLT.to($(".lt"), $anitime, {	
	x: "0", 
	y: "99vh"
}, 0);
tlOrbLT.to($(".lt"), $anitime, {	
	x: "99vw", 
	y: "99vh"
});
tlOrbLT.to($(".lt"), $anitime, {	
	x: "0", 
	y: "99vh"
});
tlOrbLT.to($(".lt"), $anitime, {	
	x: "0", 
	y: "0"
});

tlOrbRB = new TimelineMax({paused: true});
tlOrbRB.to($(".rb"), $anitime, {	
	x: "0", 
	y: "-99vh"
}, 0);
tlOrbRB.to($(".rb"), $anitime, {	
	x: "-99vw", 
	y: "-99vh"
});
tlOrbRB.to($(".rb"), $anitime, {	
	x: "-99vw", 
	y: "0"
});
tlOrbRB.to($(".rb"), $anitime, {	
	x: "0", 
	y: "0"
});

tlOrbLB = new TimelineMax({paused: true});
tlOrbLB.to($(".lb"), $anitime, {	
	x: "99vw", 
	y: "0"
}, 0);
tlOrbLB.to($(".lb"), $anitime, {	
	x: "99vw", 
	y: "-99vh"
});
tlOrbLB.to($(".lb"), $anitime, {	
	x: "0", 
	y: "-99vh"
});
tlOrbLB.to($(".lb"), $anitime, {	
	x: "0", 
	y: "0"
});

tlRotate = new TimelineMax({ paused: true })
.to($(".rotater"), 10, {
		rotationX: 6,
		rotationY: 6,
		scale: .9
}, 0)
.to($(".rotater"), 10, {
		rotationX: -6,
		rotationY: -6,
		scale: .95
}, 10)
.to($(".rotater"), 10, {
	rotationX: 0,
	rotationY: 0,
	scale: 1
}, 20);

$(document).ready(function(){
	const swup = new Swup({
	  plugins: [
	  	new SwupSlideTheme(),
	  	new SwupBodyClassPlugin()
	  ]
	});
	init();
	swup.on('contentReplaced', init);

	tlRotate.play(0).repeat(-1);
	
});