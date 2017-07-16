/**
 * Created by Administrator on 2017/7/13 0013.
 */
(function($){

    $(document).ready(function(){
        var $content = $("#content");
        var $contentWrap = $content.find(":first");
        var slides = $content.find("li");
        var contentWidth = $content.width();
        var contentHeight = $content.height();
        console.log(contentWidth );
        console.log(contentHeight );
        $contentWrap.css({
            width:(contentWidth * slides.length) + "px",
            height:contentHeight + "px"
        });
        $.each(slides,function(index){
            var slide = slides.eq(index);
            slide.css({
                width : contentWidth + "px",
                height : contentHeight + "px"
            });
        });
    $("button").click(function(){
        $contentWrap.css({
            "transition-timing-function":"linear",
            "trans ition-duration" : "10000ms",
            "transform" : translate3d({'-' + (contentWidth*2)+"px"})
        });

    });

    })

})(jQuery);
