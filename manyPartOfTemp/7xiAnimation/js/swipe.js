/**
 * Created by Administrator on 2017/7/18 0018.
 */

function Swipe($content){
    //var $content = $("#content");
    var $contentWrap = $content.find(":first");   //获取第一个子节点
    var swipe = {};                                 //滑动对象
    var slides = $content.find("li");               //li页面数量
    var contentWidth = $content.width();            //容器尺寸
    var contentHeight = $content.height();
    console.log(contentWidth );
    console.log(contentHeight );
    $contentWrap.css({
        width:(contentWidth * slides.length) + "px",     //设置li页面总宽度
        height:contentHeight + "px"
    });
    $.each(slides,function(index){                   //设置每一个li页面宽度
        var slide = slides.eq(index);
        slide.css({
            width : contentWidth + "px",
            height : contentHeight + "px"
        });
    });

    swipe.scrollTo = function(x,speed){
        console.log("contentWidth" );
        $contentWrap.css({
            "transition-timing-function":"linear",
            "transition-duration" : speed + "ms",
            "transform" : 'translate3d(-' + x +'px,0px,0px)'
        });
        return this;

    };
    return swipe;
}
