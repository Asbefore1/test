(function(win,doc){
	//1.获取根元素
	var oRoot=doc.getElementsByTagName('html')[0];
	function refreshFontSize(){			
		//2.获取设备的宽
		var iWidth=doc.body.clientWidth ||doc.documentElement.clientWidth;
		console.log(iWidth);
		//3.根据设备的宽计算出根元素的fontSize
		var iFontSize=iWidth/10;
		oRoot.style.fontSize=iFontSize+'px';
	}
	win.addEventListener('resize',refreshFontSize,false);//在屏幕拉伸时
	doc.addEventListener('DOMContentLoaded',refreshFontSize,false);//在刷新页面时
})(window,document);