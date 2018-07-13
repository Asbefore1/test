;(function($){

	function Carousel($elem,options){
		this.$elem = $elem;//$elem就是轮播图
		this.options = options;

		this.$carouselLi=this.$elem.find('.carousel-Li');
		this.$carouselLiLength=this.$carouselLi.length;
		this.$btnLi=this.$elem.find('.btn-Li');
		this.$control=this.$elem.find('.control');

		
		this.now=this._GetCorrectIndex(this.options.activeIndex);
		this._init();
	
	}
	Carousel.prototype = {
		constructor:Carousel,
		_init:function(){
			var self=this;
			this.$elem.trigger('carousel-show',[this.now,this.$carouselLi[this.now]]); 
			if(this.options.mode=='slide'){//划入划出
				this.$carouselLi.on('move moved',function(ev){
					// console.log(self.$carouselLi.index(this),ev.type);
					var index=self.$carouselLi.index(this);
					if(ev.type=='move'){
						if(self.now==index){
							self.$elem.trigger('carousel-hide',[index,this]);
						}else{
							self.$elem.trigger('carousel-show',[index,this]);
						}
					}else if(ev.type=='moved'){
						if(self.now==index){
							self.$elem.trigger('carousel-shown',[index,this]);
						}else{
							self.$elem.trigger('carousel-hidden',[index,this]);
						}
					}
				});
				//添加划入划出的初始化class,隐藏所有
				this.$elem.addClass('slide');

				this.$carouselLi.eq(this.now).css({left:0});

				//初始化移动插件
				this.$carouselLi.move(this.options);

				//获取元素的宽度
				this.$carouselLi.width=this.$carouselLi.eq(this.now).width();
				this.transitionClass=this.$carouselLi.eq(this.now).hasClass('transition') ? 'transition' : '';

				this.tab=this._slide;		
			}else{//淡入淡出
				this.$carouselLi.on('show shown hide hidden',function(ev){
					self.$elem.trigger('carousel-'+ev.type,[self.$carouselLi.index(this),this]);
				})
				//添加淡入淡出的初始化class,隐藏所有
				this.$elem.addClass('fade');

				this.$carouselLi.eq(this.now).show();
				//初始化隐藏插件
				this.$carouselLi.showHide(this.options);

				this.tab=this._fade;			
			}
			//激活底部对应的按钮
			this.$btnLi.eq(this.now).addClass('active');

			//绑定事件,委托代理给this.$control的父元素---->$elem
			this.$elem
			.hover(function(){//第一是移进去,第二个是移走
				self.$control.show();
			},function(){
				self.$control.hide();
			})
			.on('click','.control-right',function(){
				//点击右按钮-->向左划,方向为1
				self.tab(self._GetCorrectIndex(self.now+1,1));
			})
			.on('click','.control-left',function(){
				//点击左按钮-->向右划,方向为-1
				self.tab(self._GetCorrectIndex(self.now-1,-1));
			})

			//点击按钮触发事件
			this.$btnLi.on('click',function(){
				//console.log(this);//this是点击哪个是哪个
				//console.log(self.$btnLi.index($(this)));//获取到按钮对应的下标
				self.tab(self.$btnLi.index($(this)));
			})

			if(this.options.interval){
				this.auto();
				this.$elem.hover($.proxy(self.pause,self),$.proxy(self.auto,self));
				//改变了this的指向
			}
		},	
		_fade(index){//index是将要显示的那页的下标

			//当一直点同一个页面时,不需要触发多次
			if(this.now==index) return;
			// console.log('aa');

			this.$carouselLi.eq(this.now).showHide('hide');//隐藏当前的
			this.$btnLi.eq(this.now).removeClass('active');
			this.$carouselLi.eq(index).showHide('show');//显示下一张
			this.$btnLi.eq(index).addClass('active');

			this.now=index;
		},
		_slide(index,direction){
			if(this.now==index) return;
			//direction为1-->点右键,左划
			//direction为-1-->点左键,右划
			if(!direction){
				if(index > this.now){
					direction=1;
				}else{
					direction=-1;
				}
			}
				
			//让将要划入的放到指定位置
			this.$carouselLi.eq(index)
			.removeClass(this.transitionClass)
			.css({left:direction*this.$carouselLi.width});
			
			setTimeout(function(){
				//让当前的画出
				this.$carouselLi.eq(this.now).move('x',-1 * direction*this.$carouselLi.width);
				//把指定位置的划入
				this.$carouselLi.eq(index).addClass(this.transitionClass).move('x',0);
				this.now=index;
			}.bind(this),20);
			
			this.$btnLi.eq(this.now).removeClass('active');
			this.$btnLi.eq(index).addClass('active');		
		},
		auto(){
			var self=this;
			this.timer=null;
			this.timer=setInterval(function(){
				self.tab(self._GetCorrectIndex(self.now+1),-1)
			},this.options.interval)			
		},
		pause(){
			clearTimeout(this.timer);
		},
		_GetCorrectIndex(index){
			if(index >= this.$carouselLiLength) return 0;
			if(index < 0)  return this.$carouselLiLength-1;
			return index;
		}
	}
	Carousel.DEFAULTS = {
		css3:true,
		js:false,
		mode:'slide',
		activeIndex:0,//初始化默认显示第几张
		// interval:500,
	}

	$.fn.extend({
		carousel:function(options){
			return this.each(function(){
				var $this = $(this);
				var carousel = $this.data('carousel');
				if(!carousel){//单例模式
					options  = $.extend({},Carousel.DEFAULTS,options);
					carousel = new Carousel($(this),options);
					$this.data('carousel',carousel);
				}
				if(typeof carousel[options] == 'function'){
					carousel[options]();
				}
			});
		}
	})

})(jQuery);