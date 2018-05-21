handleCar();
handleNav();
handleSearch();
handleCarousel();
handleCate();
handleClock();
handleFalsh();
handleElec();
function handleCar(){
	//获取元素
	var oCarBox=document.querySelector('.car-box');
	var oCar=document.querySelector('.car-box .car');
	var oCarContent=document.querySelector('.car-box .car-content');
	var oLoading=document.querySelector('.car-content .loader');
	var oEmptyBox=document.querySelector('.car-box .car-content .empty-box')
	var oCarA=oCar.getElementsByTagName('a')[0];  //返回一个数组
	//监听鼠标移入事件
	oCarBox.onmouseenter=function(){
		//改变购物车的背景和颜色
		oCar.style.background='#fff';
		oCarA.style.color='#ff6700';
		//显示loading图标
		oLoading.style.display='block';
		//购物车内容显示出来
		animation(oCarContent,{height:100},false,function(){
			//隐藏loading
			oLoading.style.display='none';
			//显示购物车的内容
			oEmptyBox.style.display='block';
		});	
	}
	oCarBox.onmouseleave=function(){
		oCar.style.background='#424242';
		oCarA.style.color='#b0b0b0';
		//隐藏购物车内容
		animation(oCarContent,{height:0});
		oEmptyBox.style.display='none';
		oLoading.style.display='none';		
	}
}
function handleNav(){
	var Nav=document.querySelector('.header .nav');
	var oNavContent=document.querySelector('.header .nav-content');
	var oNavLoader=document.querySelector('.header .nav-content .loader');
	var oUl=oNavContent.getElementsByTagName('ul')[0];
	var aNavA=document.querySelectorAll('.header .nav a');
	var timer=null;
	for(var i=0;i<aNavA.length-2;i++){
		aNavA[i].index=i;  //要存一下
		aNavA[i].onmouseenter=function(){
			oUl.innerHTML='';
			clearTimeout(timer);
			oNavContent.style.borderTop='1px solid #ccc';
			animation(oNavContent,{height:240});
			// console.log(i);   //取不到i,i=10,要存一下
			oNavLoader.style.display='block';
			//模拟网络请求数据延迟
			var index=this.index;   //外面的是this.index,把this.index重新存一下
			setTimeout(function(){
				loadData(index);  //此时index发生了变化
				oNavLoader.style.display='none';
			},1000)			
			// console.log(this.index);  //现在就可以取到了			
		}
		aNavA[i].onmouseleave=function(){		
			timer=setTimeout(function(){
				oNavContent.style.borderTop='none';
				animation(oNavContent,{height:0});
				oNavLoader.style.display='none';
				oUl.innerHTML='';
			},500)			
		}
		oNavContent.onmouseenter=function(){
			clearTimeout(timer);
		}
		oNavContent.onmouseleave=function(){
			timer=setTimeout(function(){
				oNavContent.style.borderTop='none';
				animation(oNavContent,{height:0});
				oNavLoader.style.display='none';
				oUl.innerHTML='';				
			},500)

		}
	}
	function loadData(index){
		var aData=aNavitems[index];
		oUl.innerHTML='';  //在放上去之前把原有的清空
		if(!aData){
			return false;
		}
		for(var i=0;i<aData.length;i++){
			// console.log(aData[i]);  //鼠标放在小米手机上会显示隐藏的内容
			var oLi=document.createElement('li');			
			if(aData[i].target){
				var Span=document.createElement('span');
				Span.className='target';
				Span.innerHTML=aData[i].target;
				oLi.appendChild(Span);
			}
			var oDiv=document.createElement('div');
			oDiv.className='img-box';
			var Img=document.createElement('img');
			Img.src=aData[i].img;
			var p1=document.createElement('p');
			p1.className='produce-intro';
			p1.innerHTML='小米MIX 2S';
			var p2=document.createElement('p');
			p2.className='produce-price';
			p2.innerHTML='3299'+'元起';

			oLi.appendChild(oDiv);
			oLi.appendChild(p2);
			oLi.appendChild(p1);
			oDiv.appendChild(Img);						
			oUl.appendChild(oLi);
		}
	}
}
function handleSearch(){
	var oInput=document.querySelector('.search input');
	var oInputer=document.querySelector('.search .inputer');
	var oInputerContent=document.querySelector('.search .inputer-content');
	var oBtn=document.querySelector('.header .search .search-btn');
	var aInputerA=document.querySelectorAll('.search .inputer a');
	oInput.onfocus=function(){
		oInputerContent.style.display='block';
		oInputer.style.borderColor='#ff6700';
		oBtn.style.borderColor='#ff6700';
		aInputerA[0].style.display='none';
		aInputerA[1].style.display='none';
	}
	oInput.onblur=function(){
		oInputerContent.style.display='none';
		oInputer.style.borderColor='#e0e0e0';
		oBtn.style.borderColor='#e0e0e0';
		aInputerA[0].style.display='block';
		aInputerA[1].style.display='block';
	}	
}
function handleCarousel(){
	new Carousel({
		id:'carousel',
		aImg:[
			'./1.jpg',
			'./2.jpg',
			'./3.jpg',
			'./4.jpg',
			'./5.jpg',
			'./6.jpg'
		],
		width:1226,
		height:460,
		playDuration:2000
	})
} 
function handleCate(){
	var oCateContent=document.querySelector('.hot .banner .cate-content');
	var acateA=document.querySelectorAll('.hot .banner .cate li a');
	var oCate=document.querySelector('.hot .banner .cate');
	var oCateUl=document.querySelector('.hot .banner .cate-content ul');
	var timer=null;
	for(var i=0;i<acateA.length;i++){
		acateA[i].index=i;	 //先存一下
		acateA[i].onmouseenter=function(){
			for(var j=0;j<acateA.length;j++){
				acateA[j].className='';
			}
			loadData(this.index);   //动态添加数据  			
			oCateContent.style.display='block';
			this.className='active';  
		}
		/*acateA[i].onmouseleave=function(){
			timer=setTimeout(function(){
				this.className='';
				oCateContent.style.display='none';
			},500)
			
		}  //由于有定时器,移动的太快会出现有的有,有的没有*/	
		function loadData(index){
			var aCateData=aCateItems[index];
			oCateUl.innerHTML='';
			if(!aCateData){
				return false;
			}
			for(var i=0;i<aCateData.length;i++){
				var oLi=document.createElement('li');
				var oImg=document.createElement('img');
				oImg.src=aCateData[i].img;
				var oA=document.createElement('a');
				oA.innerHTML=aCateData[i].intro;


				oLi.appendChild(oImg);
				oLi.appendChild(oA);				
				oCateUl.appendChild(oLi);
			}
		}
	}
	oCate.onmouseleave=function(){
		timer=setTimeout(function(){
			for(var i=0;i<acateA.length;i++){
				acateA[i].className='';
			}
			oCateContent.style.display='none';
		},500)
	}
	oCateContent.onmouseenter=function(){
		clearTimeout(timer);
	}
	oCateContent.onmouseleave=function(){
		for(var i=0;i<acateA.length;i++){
			acateA[i].className='';
		}
		oCateContent.style.display='none';
	}
}
function handleClock(){
	var aBox=document.querySelectorAll('.hot .flash .box-bd .clock-box .timer-box');
	var nextDate=new Date('2018/05/20 12:00:00'); //获取未来时间
			//console.log(nextDate.getTime());  //5月20日12点距离1970年相差的毫秒数
	var timer=null;
	function toStr(num){
		if(num<10){
			return "0"+num;
		}else{
			return ""+num;
		}
	}
	timer=setInterval(time,500);
	function time(){
		var now=new Date();	//获取当前时间	
			//console.log(now.getTime());  //现在的时间距离1970年相差的毫秒数
		var allTime=nextDate.getTime()-now.getTime();   //剩下的毫秒数
			// console.log(allTime);
		if(allTime<0){
			allTime=0;
			clearInterval(timer);
		}
		var allS=parseInt(allTime/1000);			
		var h=parseInt(allS/3600);
		var m=parseInt(allS%3600/60);
		var s=(allS%3600)%60;


		aBox[0].innerHTML=toStr(h);
		aBox[1].innerHTML=toStr(m);
		aBox[2].innerHTML=toStr(s);
	}
	time();
}
function handleFalsh(){
	var aSpan=document.querySelectorAll('.hot .flash .box-hd .more span');
	var oBoxUl=document.querySelector('.hot .flash .box-bd .product-list ul');
	// console.log(oBoxUl);
	aSpan[1].onclick=function(){
		animation(oBoxUl,{marginLeft:-978});
		this.className='';
		aSpan[0].className='active';
	}
	aSpan[0].onclick=function(){
		animation(oBoxUl,{marginLeft:0});
		this.className='';
		aSpan[1].className='active';
	}
}
function handleElec(){
	var aElecA=document.querySelectorAll('.elec .box-hd .more li a');
	var oUl=document.querySelector('.elec .box-bd .right-box ul');
	loadData(0);
	for(var i=0;i<aElecA.length;i++){
		aElecA[i].index=i;  //先把i存起来
		aElecA[i].onmouseenter=function(){
			for(var j=0;j<aElecA.length;j++){
				aElecA[j].className='';  //点之前先清空
			}
			this.className='active';
			loadData(this.index);  //动态添加数据
		}
	}
	function loadData(index){
		var aData=aElecItems[index];			
		// console.log(aData);
		oUl.innerHTML='';		
		if(!aData){
			return false;
		}
		var sHtml='';
		for(var i=0;i<aData.length-1;i++){
			sHtml+='<li class="col1';
			if(aData[i].tag){
				sHtml+='flag'+aData[i].tag+'">';
			}else{
				sHtml+='">';
			}
			sHtml+='<a href="#"><div class="img-box"><img src="'+aData[i].img+'" alt=""></div>';
			sHtml+='<p class="intro">'+aData[i].intro+'</p><p class="desc">';
			sHtml+='Unibody 全陶瓷</p><p class="price"><span>'+aData[i].price+'元</span></p>';
			if(aData[i].recomm){
				sHtml+='<div class="view"><p class="recomm">'+aData[i].recomm+'</p>';
				if(aData[i].author){
					sHtml+='<p class="author">来自于'+aData[i].author+'的评论</p>';
				}
				sHtml+='</div>';
			}
			sHtml+='</a></li>';
		}

		var lastData=aData[aData.length-1];
		sHtml+='<li class="col1"><div class="top"><div class="top-left"><p class="desc">';
		sHtml+=lastData.top.desc+'</p><p class="pr">'+lastData.top.pr+'元</p>';
		sHtml+='</div><div class="top-right"><img src="'+lastData.top.img+'"alt=""></div></div>';
		sHtml+='<div class="bottom"><div class="bottom-left"><p class="desc">'+lastData.bottom.desc;
		sHtml+='</p><p class="more">'+lastData.bottom.more+'</p></div><div class="bottom-right">';
		sHtml+='<i class="iconfont">'+lastData.bottom.iconfont+'</i></div></div></li>';
		oUl.innerHTML=sHtml;													
	}	
}
