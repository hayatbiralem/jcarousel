// jcarousel.responsive.js
(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');
        var getSlideCount = function(selector){
            var width = $(selector).innerWidth();
            if(width >= 600) {
                return 3;
            } else if (width >= 350) {
                return 2;
            } else {
                return 1;
            }
        };

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this);
                var width = carousel.innerWidth() / getSlideCount(carousel);
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: function(){
                    return '-=' + getSlideCount(this);
                }
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: function(){
                    return '+=' + getSlideCount(this);
                }
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: function(){
                    return getSlideCount(this);
                },
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
