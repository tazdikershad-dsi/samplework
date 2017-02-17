//Note: this script should be placed at the bottom of the page, or after the slider markup. It cannot be placed in the head section of the page.
$(document).ready(function() {
    $('.specialities .w3-row .w3-card-2').find('button').hide();
    var thumbs1 = document.getElementById("thumbnail-slider");
    var thumbs2 = document.getElementById("thumbs2");
    var closeBtn = document.getElementById("closeBtn");
    var slides = thumbs1.getElementsByTagName("li");
    for (var i = 0; i < slides.length; i++) {
        slides[i].index = i;
        slides[i].onclick = function (e) {
            var li = this;
            var clickedEnlargeBtn = false;
            if (e.offsetX > 220 && e.offsetY < 25) clickedEnlargeBtn = true;
            if (li.className.indexOf("active") != -1 || clickedEnlargeBtn) {
                thumbs2.style.display = "block";
                mcThumbs2.init(li.index);
            }
        };
    }

    thumbs2.onclick = closeBtn.onclick = function (e) {
        //This event will be triggered only when clicking the area outside the thumbs or clicking the CLOSE button
        thumbs2.style.display = "none";
    };

    

    $('.specialities .w3-row .w3-card-2')
        .hover(function() {
            $(this).find('button').show();
        }, function() {
            $(this).find('button').hide();
    });

    $('.head_nav_list>ul>li>a')
    .hover(function(){
        $(this).addClass('selected');
    }, function() {
        $(this).removeClass('selected');
    });

    $('.contact_section>.w3-col')
    .hover(function() {
        $(this).addClass('contact_hover');
        $(this).find('i').addClass('contact_hover_color');
        $(this).find('span').addClass('contact_hover_color');
    }, function () {
        $(this).removeClass('contact_hover');
        $(this).find('i').removeClass('contact_hover_color');
        $(this).find('span').removeClass('contact_hover_color');
    })

})

