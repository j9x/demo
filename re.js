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
		"mp" : /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
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
		"nm":/^\d+$/,
		"car":/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/
	
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
