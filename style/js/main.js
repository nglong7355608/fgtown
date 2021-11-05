$('.owl-carousel.header-wow').owlCarousel({loop: true, margin: 0, nav: false, dots: true, animateOut: 'fadeOut', animateIn: 'fadeIn', touchDrag: false, mouseDrag: false, items: 1, autoplay: true, autoplayTimeout: 10000});
$('.owl-carousel.main-wow').owlCarousel({loop: true,margin: 0,nav: false,dots: true,animateOut: 'fadeOut',animateIn: 'fadeIn',touchDrag: false,mouseDrag: false,items: 1,autoplay: false,autoplayTimeout: 10000});
$("#tabs").tabs();
$('.b-burger').on('click', function () {
    $(this).toggleClass('on');
    $('.burger-menu').toggleClass('b-on');
    $('body').toggleClass('overflow');
});
$('.close-burger').on('click', function () {
    $(this).toggleClass('on');
    $('.burger-menu').toggleClass('b-on');
    $('body').toggleClass('overflow');
});
$('#cookies-x').on('click', function () {
    $('#cookies').toggleClass('b-show');
});
$('#copy-ip-server-01').on('click', function () {
	$('.copy-ip-01').hide().html("Đã sao chép").fadeIn('slow');
	setTimeout(ReturnCopyData, 3000, 1);
});
$('#copy-ip-server-02').on('click', function () {
	$('.copy-ip-02').hide().html("Đã sao chép").fadeIn('slow');
	setTimeout(ReturnCopyData, 3000, 2);
});

let open_box = 0;
function onDonateInput() {
    let count = parseInt(document.getElementById("input").value);
    if(count >= 1000 && count < 2000) count = count + Math.round(count*0.05);
    else if(count >= 2000 && count < 5000) count = count + Math.round(count*0.1);
    else if(count >= 5000 && count < 10000) count = count + Math.round(count*0.15);
    else if(count >= 10000 && count < 25000) count = count + Math.round(count*0.2);
    else if(count >= 25000 && count < 50000) count = count + Math.round(count*0.3);
    else if(count >= 50000) count = count + Math.round(count*0.4);

    if(count && !open_box) {
        open_box = 1;

        $('.player_can_get').html("Вы получите: " + count + " ₽").css("display", "flex").hide().fadeIn('slow');
       
    }
    else if(count && open_box) {
        $('.player_can_get').html("Вы получите: " + count + " ₽");
    }
    else {
        open_box = 0;
        $('.player_can_get').fadeOut('slow');
    }
}
