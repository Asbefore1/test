handleCarbox();
handleSearch();
handleCate();
function handleCarbox(){
	var oCarbox=document.querySelector('.top .car-box');
	var oCar=document.querySelector('.top .car-box .car');
	var oCarcontent=document.querySelector('.top .car-box .car-content');
	var oLoading=document.querySelector('.top .car-box  .car-content .loader');
	var oEmptyBox=document.querySelector('.top .car-box  .car-content .empty-box');
	var aCarA=oCar.getElementsByTagName('a')[0];
	oCarbox.onmouseenter=function(){
		animation(oCarcontent,{height:100},false,function(){
			oLoading.style.display='none';			
			oEmptyBox.style.display='block';
		});	
		aCarA.style.color='#ff6700';
		oCar.style.background='#fff';
		oCarcontent.style.display='block';
		
	}
	oCarbox.onmouseleave=function(){
		aCarA.style.color='#b0b0b0';
		oCar.style.background='#424242';
		animation(oCarcontent,{height:0});	
		oEmptyBox.style.display='none';
		oLoading.style.display='block';
				
	}
}
function handleSearch(){
	var oInput=document.querySelector('.nav .search .search-left input');
	var oSearch=document.querySelector('.nav .search');
	var oSearchLeft=document.querySelector('.nav .search .search-left');
	var oSearchBtn=document.querySelector('.nav .search .search-btn');
	var oSearchContent=document.querySelector('.nav .search .search-content');
	var aSearchA=document.querySelectorAll('.nav .search .search-left a');
	oInput.onfocus=function(){
		oSearchLeft.style.borderColor='#ff6700';
		oSearchBtn.style.borderColor='#ff6700';
		oSearchContent.style.display='block';
		oSearchContent.style.borderColor='#ff6700';
		aSearchA[0].style.display='none';
	}
	oInput.onblur=function(){
		oSearchLeft.style.borderColor='#e0e0e0';
		oSearchBtn.style.borderColor='#e0e0e0';
		oSearchContent.style.display='none';
		aSearchA[0].style.display='block';
	}
}
function handleCate(){
	var oNavLi=document.querySelector('.nav .list');
	var oListContent=document.querySelector('.jianjie .list-content');
	var oList=document.querySelector('.jianjie .list');	
	var aListA=document.querySelectorAll('.jianjie .list li a');
	var oUl=document.querySelector('.jianjie .list-content ul');
	var timer=null;	
	var timer1=null;
	oNavLi.onmouseenter=function(){
		clearTimeout(timer1);
		oList.style.display='block';					
	}
	oNavLi.onmouseleave=function(){
		timer1=setTimeout(function(){
			oList.style.display='none';	
		},500)
						
	}
	oList.onmouseenter=function(){
		clearTimeout(timer1);
		clearTimeout(timer);
	}
	oList.onmouseleave=function(){
		oList.style.display='none';
		oListContent.style.display='none';	
	}
	for(var i=0;i<aListA.length;i++){
		aListA[i].index=i;
		aListA[i].onmouseenter=function(){
			for(var j=0;j<aListA.length;j++){
				aListA[j].className="";
			}
			this.className="active";
			oListContent.style.display='block';
			loadData(this.index);
		}

	}
	oListContent.onmouseenter=function(){
		oListContent.style.display='block';
		oList.style.display='block';
	}
	oListContent.onmouseleave=function(){
		timer=setTimeout(function(){
			oListContent.style.display='none';
			oList.style.display='none';
		},200)
		
	}
}
loadData(index){
	oUl.innerHTML='';
}