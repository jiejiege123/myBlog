/*
* @Author: ZZZ
* @Date:   2018-10-21 19:47:26
* @Last Modified by:   ZZZ
* @Last Modified time: 2018-10-21 20:56:39
*/
window.onload = function() {
	var html=document.getElementsByTagName("html")[0];
  // var width=window.innerWidth;
  // var font_Size=16/1920*width;
  // html.style.fontSize=font_Size+"px";
  html.style.fontSize="54px";
  console.log(html);
}

window.onresize=function(){
    var html=document.getElementsByTagName("html")[0];
    // var width=window.innerWidth;
    // var font_Size=16/1920*width;
    // html.style.fontSize=font_Size+"px";
    html.style.fontSize="54px";
};