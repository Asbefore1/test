;(function($){
	function init($elem){
		this.$elem=$elem;//this.$elem是box
		this.currentX=parseFloat(this.$elem.css('left'));							
		this.currentY=parseFloat(this.$elem.css('top'));
		//console.log(this); //此时的this是window
		this.$elem.css({
				//没有设置的left和top时,会影响过渡效果,回来的时候才有过渡效果,因为不确定初始值需要人为的设置
			left:this.currentX,
			top:this.currentY
		})
	}
	function same(x,y,callBack){
		x = (typeof x=='number' ? x : this.currentX);
		y = (typeof y=='number' ? y : this.currentY);
		if(this.currentX==x && this.currentY==y) return;
		this.$elem.trigger('move');//移动之前
		if(typeof callBack=='function') callBack();

		this.currentX=x;//把x,y设置成新的当前值
		this.currentY=y;
	}


	function Slient($elem){//让谁移动
		// console.log(this)//这里的this是slient对象
		init.call(this,$elem);//改变this的指向
		this.$elem.removeClass('transition');		
	}		
	Slient.prototype={
		constructor:Slient,
		to:function(x,y){
			var self=this;
			same.call(this,x,y,function(){
				self.$elem.css({
					left:x,
					top:y
				})
				self.$elem.trigger('moved');//移动之后
			});				
		},
		x:function(x){
			this.to(x);
		},
		y:function(y){
			this.to(null,y);
		}
	}


	function Css3($elem){//让谁移动
		init.call(this,$elem);
		this.$elem.addClass('transition');		
	}
	Css3.prototype={
		constructor:Css3,
		to:function(x,y){
			var self=this;
			same.call(this,x,y,function(){
				self.$elem.css({
					left:x,
					top:y
				})
				//监听过渡完成事件
				self.$elem
				.off(kuazhu.transition.end)//为了解决用户频繁点击触发事件多次执行
				.one(kuazhu.transition.end,function(){//用one绑定事件是为了事件只触发一次后就移除
					self.$elem.trigger('moved');//移动之后
				});
			})
		},
		x:function(x){
			this.to(x);
		},
		y:function(y){
			this.to(null,y);
		}
	}


	function JS($elem){//让谁移动
		init.call(this,$elem);
		this.$elem.removeClass('transition');
	}
	JS.prototype={
		constructor:JS,
		to:function(x,y){
			var self=this;
			same.call(this,x,y,function(){
				self.$elem
				.stop()//把之前的动画结束掉
				.animate({//开启新的动画
					left:x,
					top:y
				},function(){
					self.$elem.trigger('moved');//移动之后
				})
			})				
		},
		x:function(x){
			this.to(x);
		},
		y:function(y){
			this.to(null,y);
		}
	}

	var DEFAULTS={
		Css3:true,
		JS:true,
	}

	//根据参数决定使用什么方式的显示和隐藏
	var mode=null;
	function move($elem,options){
			
		if(options.Css3 && kuazhu.transition.isSupport){//Css3
			mode=new Css3($elem);
		}else if(options.JS){//js
			mode=new JS($elem);
		}else{//slietn
			mode=new Slient($elem);
		}
		return{
			to:mode.to.bind(mode),
			x:mode.x.bind(mode),
			y:mode.y.bind(mode)
		}
	}

	$.fn.extend({
		move:function(options,x,y){
			return this.each(function(){
				var $this = $(this);
				var moveMode = $this.data('moveMode');
				if(!moveMode){//单例模式
					options  = $.extend(DEFAULTS,options);
					moveMode = move($this,options);
					$this.data('moveMode',moveMode);
				}
				if(typeof moveMode[options] == 'function'){
					moveMode[options](x,y);
				}
			});
		}
	})

})(jQuery);