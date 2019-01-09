$(function () {
  //手动控制主轮播图
  $('#one2 li').eq(0).show();
  $('#two2 li').mouseover(function () {
    $(this).addClass('on').siblings().removeClass('on');
    var index = $(this).index();
    i = index;
    $('#one2 li').eq(i).addClass('on').siblings().removeClass('on');
  })
  var len = $("#two2 li").length;
  //自动播放
  var i = 0;
  var t = setInterval(move11, 2000);
  //自动播放核心函数
  function move11() {
    i++;
    if (i == len) {
      i = 0;
    }
    $('#two2 li').eq(i).addClass('on').siblings().removeClass('on');
    $('#one2 li').eq(i).addClass('on').siblings().removeClass('on');
  }

  //向右播放核心函数
  function move22() {
    i--;
    if (i == -1) {
      i = len - 1;
    }
    $('#two2 li').eq(i).addClass('on').siblings().removeClass('on');
    $('#one2 li').eq(i).addClass('on').siblings().removeClass('on');
  }
  $('#left').click(function () {
    move22();
  })
  $('#right').click(function () {
    move11();
  })
  //鼠标移入移除
  $('#lunbo2').hover(function () {
    clearInterval(t);
  }, function () {
    t = setInterval(move11, 2000);
  })

});