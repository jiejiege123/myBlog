/*
* @Author: ZZZ
* @Date:   2018-10-21 10:32:56
* @Last Modified by:   jiejiege123
* @Last Modified time: 2018-10-22 17:42:53
*/

// loading
$(window).load(function(){
  $(".loading").delay(600).fadeOut("slow")
});
// banner
$(document).ready(function () {
  // 滚动条样式 niceScroll
  $("html").niceScroll();
  if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<=9){
    console.log('<= ie9');
    var mySwiper = new Swiper ('.swiper-container', {
      mode: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay:5000,//等同于以下设置
      speed:300,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      paginationClickable :true,
    }) 
  }else{
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: false, // 循环模式选项
      autoplay:{
        delay: 5000,//1秒切换一次
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
        // 分页器样式
        bulletClass : 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
      }
    }) 
  }
	
})