/**
 * Created by Administrator on 2017/7/7 0007.
 */
;(function($){

    var Tab = function(tab){
        this.tab = tab;
        var _this = this;
        //默认配置参数
        _this.config = {
            "triggerType":"mouseover",  //用来定义鼠标的触发类型
                "effect":"default",    // 标记切换的效果
                "invoke":"1",           // 默认显示第几个tab
                "auto":false      //自动轮播时间间隔
        }
        if(this.getConfig()){
            $.extend( this.config,this.getConfig())
        } ;

        //保存tab标签列表,以及对应的内容列表
        this.tabItems = this.tab.find("ul.tabNav li");
        this.contentItems = this.tab.find("div.content-wrap div.content-item");
        var config = this.config;
       //绑定事件
        if(config.triggerType == "click"){
            this.tabItems.bind(config.triggerType,function(){
                _this.invoke(this);
            })
        }else if(config.triggerType == "mouseover" || config.triggerType != "click"){
            this.tabItems.onmouseover(function(){
                var self = $(this);
                _this.timer = window.setTimeout(function(){
                    _this.invoke(self)},300);
                }).onmouseout(function(){
                    window.clearTimeout(this.timer);
                });
        }
      /*  var actions =["click","mouseover"];
        if(actions.indexOf(config.triggerType) != -1){
           this.tabItems.bind(config.triggerType,function(){
               _this.invoke(this);
               //console.log(this);
            });
        }else{
            //默认时间，防止出现错误输入
            this.tabItems.bind("mouseover",function(){

                _this.invoke(this);
                //console.log(this);

            })
        }*/
        console.log(_this.config.auto);
        if(this.config.auto){
            console.log(_this.config.auto);
            //全局的定时器
            _this.timer = null;
            //计数器
            this.loop = 0;

            this.autoPlay();
            this.tab.hover(function(){
                window.clearInterval(_this.timer);
            },function(){

            });
        }

        console.log(_this.config);
    };

    Tab.prototype = {



        autoPlay:function(){
            var _this_ = this,
                tabItems = this.tabItems,
                tabLength = this.tabItems.length,
                config = this.config;
            this.timer = window.setInterval(function(){
                _this_.loop++;
                _this_.loop = _this_.loop / tabLength;
                tabItems.eq(_this_.loop).trigger(config.triggerType);
            },config.auto);

        },

        invoke:function(currentTab){
            /*tab选中状态*/
            var  currentTab = $(currentTab);
            var index = currentTab.index();
            //var index2 = currentTab.parent().children(currentTab).index(currentTab);
            //console.log(index + "||||" + index2);
            currentTab.addClass("active").siblings().removeClass("active");
            /*切换内容区*/
            var effect = this.config.effect;
            var contentItems = this.contentItems;
            if(effect == "default"){
                contentItems.eq(index).addClass("current").siblings().removeClass("current");

            }if(effect == "fade"){
                contentItems.eq(index).fadeIn().siblings().fadeOut();
            }

            //配置自动切换时候，人为改变了切换的下一个目标
            if(this.config.atuo){
                this.loop = index;
            }
        },

        //获取配置参数
        getConfig:function(){
            var config = this.tab.attr("data-config");

            if(config && config !=""){
                return $.parseJSON(config);
            }else{
                return null;
            }
        }

    };
    // 扩展到jqeury，实现插件
    $.fn.extend({
        tab:function(){
            this.each(function(){
                new Tab($(this));
            });
            return this;
        }
    });
    window.Tab = Tab;

})(jQuery);