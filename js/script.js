/*window.onload = function(){
    var b1 = document.getElementById("title");//блок перед которым ставим
    var b2 = document.getElementById("members");//блок который передвигаем
    b1.parentNode.insertBefore(b2, b1);

 $('.draggable').draggable();

}*/
$(document).ready(function() {




	$('.sticker:not(.new)').click(function() {
		$(this).addClass("full");
		$(".overlay").css({'opacity': 1, 'visibility': 'visible'});
		var b1 = document.querySelector('.sticker.full .title');//блок перед которым ставим
		var b2 = document.querySelector('.sticker.full .members');//блок который передвигаем
		b1.parentNode.insertBefore(b2, b1);
	});

	$('.close, .overlay').click(function() {

		var b1 = document.querySelector('.sticker.full .attachments');//блок перед которым ставим
		var b2 = document.querySelector('.sticker.full .members');//блок который передвигаем
		b2.parentNode.insertBefore(b2, b1);
		$(".sticker").removeClass("full");
		$(".overlay").css({'opacity': 0, 'visibility': 'hidden'});
		return false;

	});

// drag & drop

	$( ".col" ).sortable({
		connectWith: ".col",
		placeholder: "sticker-placeholder",
        items: ".sticker:not(.new, .title)",
		cancel: ".sticker.full"
	});


// menu button

	$(".cmn-toggle-switch").click(function() {
		$(this).toggleClass("active");
		$(".dark-bg").toggleClass("active");
	});

// open panel

	$('.panel-label').click(function () {
		if($(this).hasClass('open')) {
			$(".panel").animate({right: '-20%'}, 500);
			$(".panel-label").animate({right: '0'}, 500);
			$(".panel-label").removeClass('open');
		}else{
			$(".panel").animate({right: '0'}, 500);
			$(".panel-label").animate({right: '20%'}, 500);
			$(".panel-label").addClass('open');
		}
	});

    $('.col, .main').click(function() {
        if($('.panel-label').hasClass('open')) {
            $(".panel").animate({right: '-20%'}, 500);
            $(".panel-label").animate({right: '0'}, 500);
            $(".panel-label").removeClass('open');
            $('.cmn-toggle-switch').toggleClass("active");
            $(".dark-bg").toggleClass("active");
        }
    });

// change form

	$('.tab-name:first-child').click(function () {
		if($(this).hasClass('inactive')) {
			$(".loginForm:nth-child(1)").show();
			$(".loginForm:nth-child(2)").hide();
			$(".tab-name:first-child").removeClass('inactive');
			$(".tab-name:nth-child(2)").addClass('inactive');
		}
	});

	$('.tab-name:nth-child(2)').click(function () {
		if($(this).hasClass('inactive')) {
			$(".loginForm:nth-child(2)").show();
			$(".loginForm:nth-child(1)").hide();
			$(".tab-name:nth-child(2)").removeClass('inactive');
			$(".tab-name:first-child").addClass('inactive');
		}
	});

// confirm

	$('a#forgot').click(function() {
		$(".confirm").show();
		$(".overlay2").css({'opacity': 1, 'visibility': 'visible'});
	});

	$('div.overlay2, #close, .close img').click(function() {
		$(".confirm").hide();
		$(".overlay2").css({'opacity': 0, 'visibility': 'hidden'});
		return false;

	});

// filter panel

	$('.filter-link').click(function() {
		$('.panel.filter').show();
	});

    $('.close-cross').click(function() {
        $('.panel.filter').hide();
    });

// labels panel

	$('.labels-link').click(function() {
		$('.panel.labels').show();
	});

	$('.close-cross').click(function() {
		$('.panel.labels').hide();
	});

});

/*window.onload = function(){
 var b1 = document.getElementById("title");//блок перед которым ставим
 var b2 = document.getElementById("members");//блок который передвигаем
 b1.parentNode.insertBefore(b2, b1);

 $('.draggable').draggable();

 }*/















