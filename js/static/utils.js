/**
 * 解析地址参数
 */

function getUrlParams (URL) {
  var reg = /(\w*.html)/;
  var url = location.href;
  var keywords = reg.exec(url);
  var I = 0;
  console.log($.cookie('i'), '-------------')
  I = $.cookie('i') ? $.cookie('i') : I;
  $.each(URL, function (index, item) {
    if (keywords[1] === item) {
      I = index;
    }
  })
  return I;
}