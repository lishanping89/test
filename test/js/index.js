
$(document).ready(function(){
    //瀑布流定位
    var pubuliu ={
        Iwidth:$('.article_like_content').width(),
        offsetLeft:20,
        offsetTop:30,
        cols:3,
        allHeight:[],
        maxheight:undefined,
        box:$('.article_like'),
        setOption:function(items){
            var Lstep = this.Iwidth + this.offsetLeft;
            var allHeight = this.allHeight;
            var maxheight = this.maxheight;
           // alert(this.items.length);
            for(var i=0; i<items.length; i++){
                if(i<this.cols){
                    allHeight[i] = items.eq(i).height()+this.offsetTop;
                    items.eq(i).css({"left":Lstep*i,"top":0});
                }else{
                    var minHeight = Math.min.apply(null,allHeight);
                    var gx = getIndex(allHeight,minHeight);
                    items.eq(i).css({"left":Lstep*gx,"top":minHeight});
                    allHeight[gx] += items.eq(i).height() +this.offsetTop;
                }
            }
            maxheight=Math.max.apply(null,allHeight);
            this.box.css("height",maxheight);
        }
    }

    var dataArr= [
        [
            {
                "id":1,
                "description":"简介：天然泉水，直接从源泉取水，无菌灌装；纯净无菌，含所需的微量元素和二氧化硅，低矿物含量，喷雾后可在肌肤",
                "img":"images/img6.jpg",
                "price":130,
                "score":6.6,
                "like":5678
            },
            {
                "id":2,
                "description":"棒子靓妆，轻松变漂亮~",
                "img":"images/img7.jpg",
                "price":130,
                "score":6.6,
                "like":5677
            },
            {
                "id":3,
                "description":"简介：天然泉水，直接从源泉取水，无菌灌装；纯净无菌，含所需的微量元素和二氧化硅，低矿物含量，喷雾后可在肌肤",
                "img":"images/img8.jpg",
                "price":120,
                "score":6.6,
                "like":5678
            }
        ],
        [
            {
                "id":1,
                "description":"简介：天然泉水，直接从源泉取水，无菌灌装；纯净无菌，含所需的微量元素和二氧化硅，低矿物含量，喷雾后可在肌肤",
                "img":"images/img9.jpg",
                "price":130,
                "score":6.6,
                "like":5678
            },
            {
                "id":2,
                "description":"棒子靓妆，轻松变漂亮~",
                "img":"images/img10.jpg",
                "price":130,
                "score":6.6,
                "like":5677
            },
            {
                "id":3,
                "description":"简介：天然泉水，直接从源泉取水，无菌灌装；纯净无菌，含所需的微量元素和二氧化硅，低矿物含量，喷雾后可在肌肤",
                "img":"images/img8.jpg",
                "price":120,
                "score":6.6,
                "like":5678
            }
        ],
        [
            {
                "id":1,
                "description":"简介：天然泉水，直接从源泉取水，无菌灌装；纯净无菌，含所需的微量元素和二氧化硅，低矿物含量，喷雾后可在肌肤",
                "img":"images/img6.jpg",
                "price":130,
                "score":6.6,
                "like":5678
            },
            {
                "id":2,
                "description":"棒子靓妆，轻松变漂亮~",
                "img":"images/img7.jpg",
                "price":130,
                "score":6.6,
                "like":5677
            },
            {
                "id":3,
                "description":"简介：天然泉水，直接从源泉取水，无菌灌装；纯净无菌，含所需的微量元素和二氧化硅，低矿物含量，喷雾后可在肌肤",
                "img":"images/img8.jpg",
                "price":120,
                "score":6.6,
                "like":5678
            }
        ]
    ];
    var items = $('.article_like_content');
    pubuliu.setOption(items);
    var index=0;
    $(window).bind('scroll',function(){
        if($(document).scrollTop() + $(window).height() > $(document).height() -20){
            if(index >2){
                alert("没有新数据了");
            }else{
                var Lstep = pubuliu.Iwidth + pubuliu.offsetLeft;
                var allHeight = pubuliu.allHeight;
                getdata(dataArr[index]);
                index++;
            }
        }
    });

    //滚动函数


    //取得数据
    function getdata(arr){
        for(var i=0; i<arr.length; i++){
            var div=$("<div class='article_like_content' >"+
                "<img class='article_img' src=" + arr[i].img+ " width='202'  />"+
                "<p class='fb'>"+
                "评分：<em class='icon grade_icon'></em><span class='grade'>"+ arr[i].score +"</span>"+
                "</p>"+
                "<p class='fs12'>" + arr[i].description + "</p>"+
                "<a class='icon add_icon' href='javascript:void();'>喜欢&nbsp;"+ arr[i].like + "</a>"+
                "<div class='like_people'>"+
                "<span class='arrow'></span>"+
                "<ul>"+
                "<li><img src='images/head_icon.gif' width='35' height='35' /></li>"+
                "<li><img src='images/head_icon.gif' width='35' height='35' /></li>"+
                "<li><img src='images/head_icon.gif' width='35' height='35' /></li>"+
                "<li><img src='images/head_icon.gif' width='35' height='35' /></li>"+
                "</ul>"+
                "</div>"+
                "</div>");
            $(".article_like").append(div);
        }
       var obj = $('.article_like_content');
        pubuliu.setOption(obj);
    }


    function getData(arr){
        for(var i=0; i<arr.length; i++){
            var div=$("<div class='article_like_content' >"+
                "<img class='article_img' src=" + arr[i].img+ " width='202'  />"+
                "<p class='fb'>"+
                "评分：<em class='icon grade_icon'></em><span class='grade'>"+ arr[i].score +"</span>"+
                "</p>"+
                "<p class='fs12'>" + arr[i].description + "</p>"+
                "<a class='icon add_icon' href='javascript:void();'>喜欢&nbsp;"+ arr[i].like + "</a>"+
                "<div class='like_people'>"+
                "<span class='arrow'></span>"+
                "<ul>"+
                "<li><img src='images/head_icon.gif' width='35' height='35' /></li>"+
                "<li><img src='images/head_icon.gif' width='35' height='35' /></li>"+
                "<li><img src='images/head_icon.gif' width='35' height='35' /></li>"+
                "<li><img src='images/head_icon.gif' width='35' height='35' /></li>"+
                "</ul>"+
                "</div>"+
                "</div>");
            $(".article_like").append(div);
        }
        fall.getPostion();
    }
})

//最小值的索引
function getIndex(array,item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == item) {
            return i;
        }
    }
}
