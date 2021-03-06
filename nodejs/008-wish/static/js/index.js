(function($){

	function getRandom(min,max) {	
		return Math.round(min + (max-min)*Math.random());
	}

	$wall = $('.wall');
	$wish = $('.wish');
	
	//获取墙的宽高和卡片的宽高
	var wallWidth = parseInt($wall.css('width'));
	var wallHeight = parseInt($wall.css('height'));
	var wishWidth = parseInt($wish.css('width'));
	var wishHeight = parseInt($wish.css('height'));
	
	function handleWish($elem){
		//显示卡片拖拽
		$elem.pep({  constrainTo: '.wall' });//不让卡片拖出墙外
		//随机显示卡片
		$elem.each(function(){//循环拿到每一个卡片让每一个位置是随机的
			$(this).css({//this是$wish卡片
				//字符串拼接
				transform:'matrix(1, 0, 0, 1, '+ getRandom(0,wallWidth-wishWidth) +','+getRandom(0,wallHeight-wishHeight) +')'
			});
		});
		//改变显示顺序
		$elem.hover(function(){
			$(this).css({//移入
				zIndex:999
			})
		},function(){
			$(this).css({//移出
				zIndex:0
			})
		});		
	}

	handleWish($wish);

	//委托代理监听删除事件,绑定在wall，因为如果绑定在a上,而a是动态生成的,所以用委托代理事件,代理给父元素
	$wall.on('click','.close',function(){
		// console.log(this);//this是叉号,通过'.close'绑定在$wall父元素上,this就是叉号
		var $this = $(this);
		var self = this;
		// console.log($this.data('id'));
		$.ajax({
			url:'/del',
			data:'id='+$this.data('id'),//可以是对象/字符串
			dataType:'json'
		})
		.done(function(data){
			if(data.status == 0){//删除成功
				//移除dom节点
				$(self.parentNode).remove();
			}
		})

	});

	//增加许愿卡
	$('.sub-btn').on('click',function(){
		let val = $('#content').val();
		$.ajax({
			url:'/add',
			data:{content:val},
			dataType:'json',
			type:'POST'
		})
		.done(function(data){
			//填充数据到dom节点并且插入
			// console.log(data);
			if(data.status === 0){//成功
				var $dom = $(`<div class="wish" style="background: ${data.data.color}">
								<a href="javascript:;" class="close" data-id='${data.data.id}'></a>
									${data.data.content}
							   </div>`);
				$wall.append($dom);

				handleWish($dom);

				$('#content').val('');//插入之后把框里的内容变空			
			}else{
				alert('许愿失败了');
			}
		})		
	});


})(jQuery);