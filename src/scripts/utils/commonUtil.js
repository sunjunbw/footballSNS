var commonUtil = {
	setFocus:function($el){
       $el.addClass("active").siblings().removeClass("active");
	},
	setHeader:function(){
		console.log("我是被bugfix修改的");
	}
}

module.exports = commonUtil;