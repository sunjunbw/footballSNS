var commonUtil = {
	setFocus:function($el){
       $el.addClass("active").siblings().removeClass("active");
	},
	dataFormat:function(){
		console.log("我是被editMain修改的");
    },
	setHeader:function(){
		console.log("我是被bugfix修改的");
	}
}

module.exports = commonUtil;