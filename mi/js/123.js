	function animation(obj,attr,target){
				clearInterval(obj.timer);	
				obj.timer=setInterval(function(){
					var speed=0;
					var timer=null;
					var curr=parseFloat(getComputedStyle(obj,false)[attr]);//获取的是一个字符串,parsetFloat转换成整数和小数
					if(curr=="opacity"){
						curr=curr*100;
					}
					if(curr>target){
						speed=-10;
					}else{
						speed=10;
					}
					if(Math.abs(target-curr)<=Math.abs(speed)){
						clearInterval(timer);
						if(attr=="opacity"){
							obj.style[attr]=target/100;
						}else{
							obj.style[attr]=target+"px";
						}
					}else{
						if(attr=="opacity"){
							obj.style[attr]=(curr+speed)/100;
						}else{
							obj.style[attr]=curr+speed+"px";
						}
					}
				
				},30)
		}
	var show=false;
	window.onscroll=function(){
		var ojianjie=document.getElementById("jianjie");
		var top=document.body.scrollTop || document.documentElement.scrollTop;
		var otupian=document.getElementById("topian");
		console.log(top);
		if(top>=205){
			// otopnav.style.height='100'px;
			if(!show){
				animation(ojianjie,"height",205);
				otupian.style.marginTop="100px";
				show=true;
			}
		}else{
			if(show){
				animation(ojianjie,"height",0);
				otupian.style.marginTop="0px";
				show=false;
			}
		}
		
		
	}