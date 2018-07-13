;(function($){

	function Tab($elem,options){
		this.$elem = $elem;
		this.options = options;
		this.$floorLiA = this.$elem.find('.floor-li-a');
		this.ALength = this.$floorLiA.length;
		this.$floorUl = $elem.find('.floor-bd-ul');

		this.now = this._getCorrectIndex(options.activeIndex);
		this._init();
	}
	Tab.prototype = {
		constructor:Tab,
		_init:function(){
			var self=this;
			var timer=null;
			//初始化页面

			//默认选中第零个
			this.$floorLiA.eq(this.now).addClass('floor-li-a-active');
			this.$floorUl.eq(this.now).show();


			this.$floorUl.on('show shown hide hidden',function(ev){
				// console.log(ev.type);
				self.$elem.trigger('tab-'+ev.type,[self.$floorUl.index(this),this]);
			})


			//初始化showHide
			this.$floorUl.showHide(this.options);


			//处理click和mouseenter进行绑定事件
			var eventName=this.options.eventName=='click'? 'click':'mouseenter';
			this.$elem.on(eventName,'.floor-li-a',function(){//委托代理给$elem
				//console.log(this);//this代表放在哪个a上面,this就是谁
				var index=self.$floorLiA.index(this);//index是将要显示的a对应的下标
				//console.log(index);
				if(self.options.delay){
					clearTimeout(timer);
					timer=setTimeout(function(){
						self.toggle(index);
					},self.options.delay)
				}else{
					self.toggle(index);
				}			
			})

			if(this.options.interval){
				this.auto();
				this.$elem.hover($.proxy(self.pause,self),$.proxy(self.auto,self));		
			}
		},

		//a显示时,对应的面板也显示出来
		toggle:function(index){
			//隐藏当前面板
			this.$floorLiA.eq(this.now).removeClass('floor-li-a-active');
			this.$floorUl.eq(this.now).showHide('hide');
			//显示index对应的
			this.$floorLiA.eq(index).addClass('floor-li-a-active');
			this.$floorUl.eq(index).showHide('show');

			this.now=index;//把显示后的定义为当前的
		},
		auto(){
			var self = this;
			this.autoTimer = null;
			this.autoTimer = setInterval(function(){
				self.toggle(self._getCorrectIndex(self.now+1));
			},this.options.interval)
		},
		pause(){
			clearInterval(this.autoTimer);
		},
		_getCorrectIndex(index){
			if(index >= this.ALength) return 0;
			if(index < 0) return (this.ALength - 1);
			return index;
		}
	}

	Tab.DEFAULTS = {
		css3:false,
		js:false,
		activeIndex:0,
		eventName:'mouseenter',
		delay:200,
		// interval:2000
	}

	$.fn.extend({
		tab:function(options){
			return this.each(function(){
				var $this = $(this);
				var tab = $this.data('tab');
				if(!tab){//单例模式
					options  = $.extend({},Tab.DEFAULTS,options);
					tab = new Tab($(this),options);
					$this.data('tab',tab);
				}
				if(typeof tab[options] == 'function'){
					tab[options]();
				}
			});
		}
	})

})(jQuery);