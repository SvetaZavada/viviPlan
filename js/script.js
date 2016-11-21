/*window.onload = function(){
    var b1 = document.getElementById("title");//блок перед которым ставим
    var b2 = document.getElementById("members");//блок который передвигаем
    b1.parentNode.insertBefore(b2, b1);
}*/
$(document).ready(function() {

  $(".sticker").click(function() {
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

});
