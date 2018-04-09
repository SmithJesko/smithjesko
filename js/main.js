$(document).ready(function () {
    $(".css-transitions-only-after-page-load").each(function (index, element) {
        setTimeout(function () { $(element).removeClass("css-transitions-only-after-page-load") }, 10);
    });
});

$("#toggle").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

var btn = document.querySelector('.mouse-cursor-gradient-tracking')
btn.onmousemove = function(e) {
  var x = e.pageX - btn.offsetLeft
  var y = e.pageY - btn.offsetTop
  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
}