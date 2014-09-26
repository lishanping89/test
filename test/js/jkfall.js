/**
 * Created by shinly on 2014/7/16.
 */

(function(){
    $.fn.jkfall = function(options){
        var defaults = {
            itemWidth:0,
            container:$('body'),
            autoResize:false,
            offset:20,
            outOffset:10,
            items:$('#tiles li'),
            resizeDelay:50
        }
        options = $.extend(defaults,options);
        var offset= options.offset,
            items = options.items,
            outOffset = options.outOffset,
            container = options.container,
            innerWidth = options.container.outerWidth();

        if(options.autoResize){
            $(window).resize(function(){
                innerWidth = options.container.outerWidth();
                if(timeout){clearTimeout(timeout);}
                var timeout = setTimeout(function(){
                    me.getPostion();
                })
            })
        }
        //另一种插件写法
        var me={};
        me.getItemWidth = function(){
            if(!defaults.itemWidth){
                defaults.itemWidth = items.eq(0).outerWidth();
            }
            return defaults.itemWidth;
        };
        me.getcolumun =function(){
           var itemWidth = me.getItemWidth();
           var cols = ~~(innerWidth/(itemWidth + offset));
            return cols;
        };
        me.getPostion = function(){
            var cols = me.getcolumun();
            var allHeight = [];
            var minHeight = 0;
            var itemWidth=me.getItemWidth();
            var minIndex;
            var firstLeft = parseInt((innerWidth - itemWidth*cols -(cols-1)*offset)/2);

            for(var i=0; i<items.length; i++){
                if(i < cols){
                    allHeight[i] = items.eq(i).outerHeight(true);
                    items.eq(i).css({"left":i*(itemWidth + offset)+firstLeft,"top":minHeight});
                }else{
                    minHeight = Math.min.apply(null,allHeight);
                    for(var k=0; k<allHeight.length; k++){
                        if(allHeight[k] == minHeight){
                            minIndex = k;
                        }
                    }
                    items.eq(i).css({"left":minIndex*(itemWidth + offset) +firstLeft,"top":minHeight + offset});
                    allHeight[minIndex] +=items.eq(i).outerHeight()+offset;
                }
            }
            var maxHeight = Math.max.apply(null,allHeight);
            container.css("height",maxHeight);
        }
        return me;
    }
    //一种写法
    /*$.fn.jkfall.prototype={
        _init:function(){

        },
        getItemWidth:function(){

        },
        getHeight:function(){

        }
    }*/


})(jQuery)
