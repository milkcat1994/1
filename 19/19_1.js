function init(){
	var param=location.href.split("?items=")[1];
	items.value=(param!==0 && param!==NaN && param!==undefined) ? param : 0;
//	items.value=(param.length < 1) ? 0 : param;
}