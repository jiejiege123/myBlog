/*
* @Author: ZZZ
* @Date:   2018-10-21 16:30:11
* @Last Modified by:   jiejiege123
* @Last Modified time: 2018-10-22 14:01:24
*/

/*if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
    alert("您的浏览器版本过低，请下载IE9及以上版本");
}*/
(function(designWidth, maxWidth) {
    var doc = document,
        win = window,
        docEl = doc.documentElement,
        remStyle = document.createElement("style"),
        tid;
 		var explorer =navigator.userAgent ;
 		var isie8 = false
 		//ie 
 		if (explorer.indexOf("MSIE 8.0") >= 0) {
 				isie8 = true 
 		}

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        maxWidth = maxWidth || 540;
        width>maxWidth && (width=maxWidth);
        var rem = width * 100 / designWidth;
        if (isie8 == true) {
        	remStyle.innerTEXT = 'html{font-size:' + rem + 'px;}';
        }else{
        	remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
        }
    }
 
    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        if (isie8 == true) {
        	doc.write(wrap.innerHTML);
        }else{
        	doc.write(wrap.innerTEXT);
        }
        
        wrap = null;
    }
    refreshRem();

    if (isie8 == true) {
    	win.attachEvent("onresize", function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
        console.log('onresize ok');
    	});
    }
    else{
    	win.addEventListener("resize", function() {
    	    clearTimeout(tid);
    	    tid = setTimeout(refreshRem, 300);
    	}, false);
    }
    
 		if (isie8 == true) {
    	win.attachEvent("onpageshow", function(e) {
    	    if (e.persisted) {
    	        clearTimeout(tid);
    	        tid = setTimeout(refreshRem, 300);
    	        console.log('onpageshow ok');
    	    }
    	});
    }
    else{
    	win.addEventListener("pageshow", function(e) {
    	    if (e.persisted) {
    	        clearTimeout(tid);
    	        tid = setTimeout(refreshRem, 300);
    	    }
    	}, false);
    }
    
 
    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "16px";
    } else {
					if (isie8 == true) {
						doc.attachEvent("onDOMContentLoaded", function(e) {
						    doc.body.style.fontSize = "16px";
						    console.log('onDOMContentLoaded ok');
						});
					}
			   	else{
			   		doc.addEventListener("DOMContentLoaded", function(e) {
			   		    doc.body.style.fontSize = "16px";
			   		}, false);
			   }
        
    }
})(750, 1920);
