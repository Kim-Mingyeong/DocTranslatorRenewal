// 상단/하단 이동 스크롤 스크립트
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollTopPc").style.display = "block";
        document.getElementById("scrollDownPc").style.display = "block";
    } else {
        document.getElementById("scrollTopPc").style.display = "none";
        document.getElementById("scrollDownPc").style.display = "none";
    }
}
function topFunction() {
    $('html,body').animate( {scrollTop:0 }, 500);
}
function downFunction() {
    $('html, body').animate( {scrollTop: $('#footer').offset().top },500);
}
