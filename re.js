/**
 * re v0.1
 */
function RE(){
	var res = {
		// 常用表单
		// 邮箱
		"em":/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
		// 链接
		"url" : /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
		// 移动电话
		"mp" : /^(0|86|17951)?(13[0-9]|15[012356789]|16[012356789]|17[0-9]|18[0-9]|19[0-9]|14[0-9])[0-9]{8}$/,
		// 身份证
		"id":/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
		// 邮编号
		"zip":/^[1-9]\d{5}(?!\d)$/,
		// 常用字符
		//匹配数字和字母
		"az09":/^[a-z0-9]+$/i,
		// 匹配中文字符
		"ch":/[\u4e00-\u9fa5]/gm,
		// 只能输入数字
		"nm":/^\d+$/
	};
	var content  = "";
	this.test=function(text,rule){
		var err = 0;
		for(var i in res){
			if(rule==i){
				err++;
			}
		}
		if(err==0) return;
		return res[rule].test(text);
	}
	this.add = function(text){
		content = text;
		return this;
	}
	this.rule = function(rule){
		var err = 0;
		for(var i in res){
			if(rule==i){
				err++;
			}
		}
		if(err==0&&content=="") return;
		return res[rule].test(content);		
	}
}
