;(function($){

	function loadHtmlOnce($elem,callBack){
		//获取需要请求的地址
		var loadUrl = $elem.data('load');
		//如果页面上没有设置请求地址直接返回
		if(!loadUrl) return;

		var isLoaded = $elem.data('isLoaded');
		//如果已经加载过数据了直接返回
		if(isLoaded) return;		
		//如果有请求地址,发送请求获取数据
		$.getJSON(loadUrl,function(data){
			console.log('get data ...',data);
			callBack($elem,data);
		});		
	}

	function loadImage(url,success,error){
		var image = new Image();

		image.onload = function(){
			if(typeof success == 'function') success(url);
		}

		image.onerror = function(){
			if(typeof error == 'function') error(url);
		}

		image.src = url;		
	}
	/*顶部下拉菜单开始*/
	var $menu = $('.nav-site .dropdown');
	
	$menu.on('dropdown-show',function(ev){
		loadHtmlOnce($(this),buildMenuItem)
	});
	//构建菜单并加重
	function buildMenuItem($elem,data){
		var html = '';
		for(var i = 0;i<data.length;i++){
			html += '<li><a href="'+data[i].url+'" class="menu-item">'+data[i].name+'</a></li>';
		}
		//模拟网络延时
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			$elem.data('isLoaded',true);
		},1000);
	}
	$menu.dropdown({
		css3:false,
		js:true,
		mode:'slideUpDown'
	});

	/*顶部下拉菜单结束*/
	
	/*搜索框开始*/

	var $search = $('.search');
	
	//search插件初始化
	$search.search({
		autocomplete:true,
		getDataInterval:0
	});
	
	$search
	.on('getData',function(ev,data){
			var $this = $(this);
			var html = createSearchLayer(data,10);	
			$this.search('appendLayer',html);
			if(html){
				$this.search('showLayer');
			}else{
				$this.search('hideLayer');
			}
	})
	.on('getNoData',function(){
		$search.search('appendLayer','').search('hideLayer');
	})
	.on('click','.search-item',function(){
		$search.search('setInputVal',$(this).html());
		$search.search('submit');

	});

	function createSearchLayer(data,maxNum){
		if(data.result.length == 0){
			return '';
		}		
		var html = '';
		for(var i = 0;i<data.result.length;i++){
			if(i>=maxNum) break;
			html += '<li class="search-item">'+data.result[i][0]+'</li>'
		}
		return html;
	}
	/*搜索框结束*/	


	/*中心轮播图开始*/
	var $carouselContainer=$('.focus .carousel-container');
	//接收事件
	$carouselContainer.on('carousel-show carousel-shown carousel-hide carousel-hidden',function(ev,index,elem){
		console.log(index,ev.type);
	})

	$carouselContainer.on('carousel-show',function(ev,index,elem){
		var $img=$(elem).find('img');
		var imgUrl=$img.data('src');
		// $img.attr('src',imgUrl);

		var image=new Image();
		image.onload=function(){
			$img.attr('src',imgUrl);
		}
		image.src=imgUrl;
	})

	/*调用轮播图插件*/
	$carouselContainer.carousel({//此时是在调用carousel插件
		activeIndex:0,//如果默认指定显示第几张,调用时也指定了,以调用时为准
		// interval:1000,
		mode:'slide',
	})
	/*中心轮播图结束*/



	/*分类导航开始*/
	var $category = $('.category .dropdown');

	$category.on('dropdown-show',function(ev){

		loadHtmlOnce($(this),buildCategorItem);

	});
	function buildCategorItem($elem,data){
		var html = '';
		for(var i = 0;i<data.length;i++){
			html += '<dl class="category-details clearfix"><dt class="category-details-title fl"><a href="#" class="category-details-title-link">'+data[i].title+'</a></dt><dd class="category-details-item fl">';
			for(var j = 0;j<data[i].items.length;j++){
				html += '<a href="#" class="link">'+data[i].items[j]+'</a>'
			}
			html += '</dd></dl>';
		}
		//模拟网络延时
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			$elem.data('isLoaded',true);
		},1000);		
	}

	$category.dropdown({
		css3:false,
		js:true,
		mode:'slideLeftRight'
	});

	/*分类导航结束*/
	
	


	/*楼层一开始*/
	var $floor = $ ('.floor');
	
	$floor.on('tab-show tab-shown tab-hide tab-hidden',function(ev,index,elem){
		console.log(index,elem,ev.type);
	})

	$floor.tab({
		activeIndex:0,
	})
	/*楼层一结束*/


	/*电梯开始*/
	
	
	/*判断楼层号*/
	function whichFloor(){
		var num=-1;
		$floor.each(function(index,elem){
			if($win.scrollTop() < $(elem).offset().top){//不满足条件
				return false;
			}
		})
		return num;
	}

	var $elevactor=$('#elevactor');
	var $elevactorA=$('.elevactor-a');
	/*设置电梯*/
	function setElevactor(){
		whichFloor();
		var num=index;
		// .removeClass('elevactor-a-active');
	
	}
	/*电梯结束*/
})(jQuery);