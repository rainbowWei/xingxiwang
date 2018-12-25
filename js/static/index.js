$(function(){
  
     //手动控制主轮播图
     $('#one li').eq(0).show();
        
     $('#two li').mouseover(function () {
     $(this).addClass('on').siblings().removeClass('on');
     var index = $(this).index();
     i = index;
     // $('#one li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
     $('#one li').eq(i).addClass('on').siblings().removeClass('on');
     })
     var len = $("#two li").length;
     //自动播放
     var i = 0;
     var t = setInterval(move, 4000);
     //自动播放核心函数
     function move() {
     i++;
     if (i == len) {
     i = 0;
     }
     $('#two li').eq(i).addClass('on').siblings().removeClass('on');
     // $('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
     $('#one li').eq(i).addClass('on').siblings().removeClass('on');
     }

     //向右播放核心函数
     function moveL() {
     i--;
     if (i == -1) {
     i = len - 1;
     }
     $('#two li').eq(i).addClass('on').siblings().removeClass('on');
     // $('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
     $('#one li').eq(i).addClass('on').siblings().removeClass('on');
     }
     $('#left').click(function () {
     moveL();
     })
     $('#right').click(function () {
     move();
     })
     //鼠标移入移除
     $('#lunbo').hover(function () {
     clearInterval(t);
     }, function () {
     t = setInterval(move, 4000);
     })

     //专家团队的显示隐藏
     $(".ex-list a").hover(
        function(){
            $(this).find(".title").css('display','none')
            $(this).find(".text").css('display','block'); 
        },
        function(){
            $(this).find(".title").css('display','block')
            $(this).find(".text").css('display','none'); 
        }
      );

      //公司动态  行业新闻   ASD百科内容的显示与隐藏
      $(".tab li").click(function(){
        $(".content1 li").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');    
    })
    $(".tab li").mouseover(function(){
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
            var _index = $(this).index();
            $(".content1>div").eq(_index).show().siblings().hide();
            if(_index == 0){
                 $(this).addClass("tab_on").siblings().removeClass("tab_on tab_on2 tab_on3");
            }else if(_index == 1){
                $(this).addClass("tab_on2").siblings().removeClass("tab_on tab_on2 tab_on3");
            }else{
                $(this).addClass("tab_on3").siblings().removeClass("tab_on tab_on2 tab_on3");
            }
       
        });
    
    //所获荣誉部分 
        var i1;
        function move1(){
            $("#bigul").animate({"margin-left":"-233px"},function(){  
                $("#bigul").css("margin-left","0px");
                $("#bigul").append($("#bigul li").eq(0));

            })
        }
        i1=setInterval(move1,2000);
        /*鼠标悬浮事件*/
        $(".honor-list").hover(function(){
            clearInterval(i1);
        },
        function(){
            i1=setInterval(move1,2000);
        });
        /*按钮 下一个*/
        $("#right2").on("click",function(){
        
            $("#bigul").animate({"margin-left":"-233px"},function(){
                $("#bigul").append($("#bigul>li:first"));
                $("#bigul").css("margin-left","0px");
            })   
        })
        /*按钮 上一个*/
        $("#left2").on("click",function(){
            $("#bigul").prepend($("#bigul>li:last"));
            $("#bigul").css("margin-left","-233px");
            $("#bigul").animate({"margin-left":"0px"},function(){ 

            })
    })


   //为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））
   $(window).scroll(function(){
    //创建一个变量存储当前窗口下移的高度
   var scroTop = $(window).scrollTop();
   //判断当前窗口滚动高度
   //如果大于300，则显示顶部元素，否则隐藏顶部元素
   if(scroTop>300){
       $('#back').fadeIn(500);
   }else{
       $('#back').fadeOut(500);
   }
    }
    );
 //为返回顶部元素添加点击事件
   $('#back').click(function(){
    //将当前窗口的内容区滚动高度改为0，即顶部
    $("html,body").animate({scrollTop:0},"fast");
});
})