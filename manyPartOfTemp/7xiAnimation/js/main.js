/**
 * Created by Administrator on 2017/7/13 0013.
 */
(function($){

    $(document).ready(function(){
        var swipe = Swipe($("#content"));
        /* $(".button").click(function(){
         swipe.scrollTo($("#content").width()*2,10000)
         });*/
        //获取数据
        var getValue = function(className){
            var $ele = $(""+className+"");
            //走路的路线坐标
            return {
                height:$ele.height(),
                top:$ele.position().top
            }
        }
        //路的Y轴
        var pathY = function(){
            var data = getValue(".a_background_middle");
            return data.top + data.height / 2;
        };

        var $boy = $("#boy");
        var boyHeight = $boy.height();
        $boy.css({
            top:pathY() - boyHeight +25
        });


    });

})(jQuery);
