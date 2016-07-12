;(function(factory) {
	if (typeof define === "function" && define.amd) {
		// AMD模式
		define(["jquery"], factory);
	} else {
		// 全局模式
		factory(jQuery, window, document, undefined);
	}
}(function($, window, document,undefined) {

	var pluginName = 'ajaxComboBox';  //插件名称

    var Privateclass = function(el) {//私有类
			this.el=el;
			this.opts=el.data(pluginName);//获取插件参数
			this.data=function(dataName,opts){
				el.data(dataName,opts);
			}
	}
	Privateclass.prototype = {

	}
	var privateclass=[];//用于私有类实例化
	var methods = {//对外接口

		init: function(options){

			return this.each(function() {
				var $this = $(this);
				var opts = $this.data(pluginName);
				if(typeof(opts) == 'undefined') {

					var defaults = {
							id:0, 
						    slideTime:700,	//动画滑行速度，越大越慢
						    autoPlay:true,	//true为自动播放，
						    pauseTime:3000,	//动画暂停时间
						    hoverPause:false, //是否鼠标悬停,默认为false
						    index:0, //展示项目的索引
						    autoReSize:true, //是否自适应
						    derection:'h'//h水平滑动，v垂直方向滑动
					   };

					opts = $.extend({}, defaults, options);
					$this.data(pluginName, opts);

				} else {

					opts = $.extend({}, opts, options);

				}
				opts.id=new Date().getTime();
				privateclass[opts.id]=new Privateclass($this);
				// 代码在这里运行
				


			});
		}
	};
	$.fn[pluginName] = function() {
		var method = arguments[0];

		if(methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if( typeof(method) == 'object' || !method ) {
			method = methods.init;
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.easySlide' );
			return this;
		}
		
		return method.apply(this, arguments);

	}
}));

