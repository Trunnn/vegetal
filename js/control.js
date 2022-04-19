// event scroll overlay left
$(document).ready(function() {
	$(window).scroll(function (event) { 
		var heihgt_body = $('html, body').scrollTop();
		//  console.log(heihgt_body);
		if( heihgt_body >300) {
			$('.scroll-overlay_left, .scroll-overlay_right').addClass('show_overlay');
		} else {
			$('.scroll-overlay_left, .scroll-overlay_right').removeClass('show_overlay');
		}
		if( heihgt_body >= 600 && heihgt_body < 1000) {
			$('.scroll-overlay_left-element.overlay-one').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-one').removeClass('show_overlay-width');
		}
		if( heihgt_body >= 1000 && heihgt_body < 1400) {
			$('.scroll-overlay_left-element.overlay-two').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-two').removeClass('show_overlay-width');
		}if( heihgt_body >= 1600 && heihgt_body < 2400) {
			$('.scroll-overlay_left-element.overlay-three').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-three').removeClass('show_overlay-width');
		}if( heihgt_body >= 1600 && heihgt_body < 2400) {
			$('.scroll-overlay_left-element.overlay-four').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-four').removeClass('show_overlay-width');
		}
	});
})


function change() {
	var obj= document.getElementById('green');
	obj.setAttrubute('style','border:#80bb35');
}