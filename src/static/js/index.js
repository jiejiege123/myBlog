/*
* @Author: ZZZ
* @Date:   2018-10-21 10:32:56
* @Last Modified by:   jiejiege123
* @Last Modified time: 2018-10-23 16:52:22
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
	// nav吸顶
  $("nav").sticky({topSpacing:0});
  // var navH = $("nav").offset().top;
  //  //滚动条事件
  //  $(window).scroll(function(){
  //   var scroH = $(this).scrollTop();
  //   if(scroH>=navH){
  //     $("nav").addClass('navfixed')
  //   }else if(scroH<navH){
  //      $("nav").removeClass("navfixed")
  //   }
  //  })

  // 菜单栏图标
  $(document).on('click','.m-nav-menu',function () {
    $('.m-nav-menu').toggleClass("on")
    $('.nav-tabs').slideToggle()
  })
  // 全屏滚动
  // var runPage = new FullPage({

  //   id : 'pageContain',                            // id of contain
  //   slideTime : 800,                               // time of slide
  //   continuous : false,                            // create an infinite feel with no endpoints
  //   effect : {                                     // slide effect
  //           transform : {
  //             translate : 'Y',           // 'X'|'Y'|'XY'|'none'
  //             scale : [.1, 1],           // [scalefrom, scaleto]
  //             rotate : [0, 0]              // [rotatefrom, rotateto]
  //           },
  //           opacity : [0, 1]                       // [opacityfrom, opacityto]
  //       },                           
  //   mode : 'wheel,touch,nav:navBar',               // mode of fullpage
  //     start : 0,                                     // which page will display when install
  //   easing : 'ease'                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
  //     //  ,onSwipeStart : function(index, thisPage) {   // callback before pageChange
  //     //    return 'stop';
  //     //  }
  //     //  ,beforeChange : function(index, thisPage) {   // callback before pageChange
  //     //    return 'stop';
  //     //  }
  //     //  ,callback : function(index, thisPage) {       // callback when pageChange
  //     //    alert(index);
  //     //  };
  // });
  
  /**
   * 技能列表
   */
  var progress = 0;
  $('.skill-list li').on('mouseenter',function(){
    var val = $(this).attr("data-percent");
    $(this).children('.skill-item').children('.skill-upimg').css('bottom',-(100-val)+"%");
    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<=9){
      $('.skill-type .skill-per').html(val + "%");
    }else{
      function step() {
          progress += 2;
          $('.skill-type .skill-per').html(progress + "%");
          if (progress < val) {
              requestAnimationFrame(step);
          }
      }

      setTimeout(function(){
        requestAnimationFrame(step);
      },200)
    }
  })

  $('.skill-list li').on('mouseleave',function(){
     $('.skill-upimg').css('bottom','-100px');
     progress = 0;
     $('.skill-type .skill-per').html(progress + "%");

  })
})