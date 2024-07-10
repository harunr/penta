
(function($){
	$(function(){


        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });



// Slider
            $('.popular-product-items').slick({
                autoplaySpeed: 2000,
                infinite: true,
                navigation: false,
                speed: 300,
                arrows:true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive:[
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false // Optional: hide arrows on smaller screens
                        }
                    }
                ]
            });
        
        


        
        


        
  
        $('.cart-trigger').click(function (e) {
            e.preventDefault()
            $("body").toggleClass("cartShown");
            $("html").toggleClass("scrollOff");

            $('.cart-close').click(function () {
                $("body").removeClass("cartShown");
                $("html").removeClass("scrollOff");
            });
        });

        $('.cart').click(function () {
            $("body").removeClass("cartShown");
            $("html").removeClass("scrollOff");
        });
        $('.cart-inner').click(function (e) {
            e.stopPropagation();
        });
        




    }); //end ready funtion


})(jQuery)

