/**
 * 解析地址参数
 */

function getUrlParams (URL) {
  var reg = /(\w*).html/;
  var url = location.href;
  var keywords = reg.exec(url);
  var I = 0;
  console.log($.cookie('i'), '-------------')
  I = $.cookie('i') ? $.cookie('i') : I;
  $.each(URL, function (index, item) {
    if (keywords && keywords[1] === item) {
      I = index;
    }
  })
  return I;
}

function getParams (x) {
  var search = location.search.substr(1).split("&");
  var obj = {}
  for(var i=0; i<search.length; i++) {
    var temp = search[i].split('=');
    obj[temp[0]] = temp[1]
  }
  if (typeof x === "string") {
    return obj[x]
  }
  return obj
}


 // 二级菜单的显示和隐藏
 $(".test").hover(
  function(){
  $(this).find("div").css('display','block'); 
  },
  function(){
  $(this).find("div").css('display','none')
  }
);

var URL = ['index', 'course', 'internet', 'aboutus', 'news', 'love'];

var a = Number(getParams("a"))
if (isNaN(a)) {
  a = getUrlParams(URL);
}
console.log(a, '000')

$(".nav li p").removeClass("line");
$(".nav li").eq(a).children("p").addClass("line");
$(".nav li").eq(a).addClass("active");

$(".nav").on("click", "li .title", function (e) {
  if (!$(this).next().hasClass("menu")) {
    var index = $(this).parent().index();
    if ($(this).attr("path") === "index") {
      location.href = '/index.html';
    }
    if ($(this).attr("path") === "internet") {
      location.href =  '/pags/' + 'internet' + '/' + 'internet.html';
    }

    //  else {
    //   location.href = $(this).attr("path") + ".html?a=" + index;
    // }
  }
})
$(".nav").on("click", ".menu", function (e) {
  location.href = '/pags/' + $(this).attr("path") + "/" + $(e.target).attr("path") + ".html?a=" + $(this).parent().index();
})