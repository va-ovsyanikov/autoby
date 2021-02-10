$(document).ready(function(){
    

    

    $ ( ".city_select" ).select2 ({ 
        placeholder: 'Любой город',
        allowClear : true 
    }); 

    $('.filter_car_mark').select2({
        placeholder: 'Марка'
    });

    $('.filter_car_model').select2({
        placeholder: 'Модель'
    });

    $('.filter_car_generation').select2({
        placeholder: 'Поколение'
    });

    $('.filter_car_body').select2({
        placeholder: 'Кузов',
        minimumResultsForSearch: -1
    });

    $('.filter_car_box').select2({
        placeholder: 'Коробка',
        minimumResultsForSearch: -1
    });

    $('.filter_car_engine').select2({
        placeholder: 'Двигатель',
        minimumResultsForSearch: -1
    });

    $('.filter_car_drive').select2({
        placeholder: 'Привод',
        minimumResultsForSearch: -1
    });

    $('.filter_car_volumefrom').select2({
        placeholder: 'Обьем от,л',
        minimumResultsForSearch: -1
    });

    $('.filter_car_volumeto').select2({
        placeholder: 'до',
        minimumResultsForSearch: -1
    });

    $('.filter_car_datefrom').select2({
        placeholder: 'Год от',
        minimumResultsForSearch: -1
    });

    $('.filter_car_dateto').select2({
        placeholder: 'до',
        minimumResultsForSearch: -1
    });

    $('.filter_car_pricefrom').select2({
        placeholder: 'Цена от',
        minimumResultsForSearch: -1
    });

    $('.filter_car_priceto').select2({
        placeholder: 'до',
        minimumResultsForSearch: -1
    });

    $('.car_list_sort_relevance').select2({
        minimumResultsForSearch: -1,
    });
    

//    show all mark
    $('.brands_auto_btn_show').click(function(){
        $('.brands_auto_more').css( "display", "flex" );
        $('.brands_auto_show').hide();
    });
 
//sidebar
$(window).scroll(function() {
    var sb_m = 0; /* отступ сверху и снизу */
    var mb = 300; /* высота подвала с запасом */
    var st = $(window).scrollTop();
    var sb = $(".content_right");
    var sbi = $(".content_right_banner");
    var sb_ot = sb.offset().top;
    var sbi_ot = sbi.offset().top;
    var sb_h = sb.height();

    if(sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
        if(st > sb_ot) {
            var h = Math.round(st - sb_ot) + sb_m;
            sb.css({"paddingTop" : h});
        }
        else {
            sb.css({"paddingTop" : 0});
        }
    }

    
    });
    //
    //
    //
    //
    //
    //    //    owlCarousel
    //    $("#owl-carousel").owlCarousel({
    //        navigation : true, 
    //        slideSpeed : 300,
    //        paginationSpeed : 400,
    //        singleItem:true,
    //        items : 1,
    //        loop:true,
    //        autoplay:true,
    //        smartSpeed:1500,
    //        autoplayTimeout:4000,
    //        autoplayHoverPause: true,
    //        itemsMobile : true,
    //        margin:50,
    //        autoplayHoverPause: true
    //    });
    //
    //    //    magnificPopup
    //    $('#header_top_btn').magnificPopup({
    //        type:'inline',
    //        midClick: true,
    //        removalDelay: 300
    //
    //    });
    //
    //
});

