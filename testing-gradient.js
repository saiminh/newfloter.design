var $anitime = 10;
TweenLite.defaultEase =  Power0.easeNone;
tlOrbLT = new TimelineMax({paused: true});
tlOrbLT.to($(".lt"), $anitime, {	
	x: "-99vw", 
	y: "0"
}, 0);
tlOrbLT.to($(".lt"), $anitime, {	
	x: "-99vw", 
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

//	tlOrbLT.play(0).repeat(-1);
//	tlOrbRB.play(0).repeat(-1);
//	tlOrbLB.play(0).repeat(-1);
	tlRotate.play(0).repeat(-1);

	var st = $(".content").scrollTop();	
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
});

$('body').click(function(){
	$(this).addClass('red');
})